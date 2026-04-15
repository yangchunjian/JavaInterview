#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
根据「思路」与「解法」中的 Java 代码，批量重写占位用的「## 总结」段落。
仅替换原先仅为占位句（或等价空白）的总结；已有实质内容的文件跳过。
"""

from __future__ import annotations

import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1] / "docs" / "algorithm" / "leetcode"

PLACEHOLDER_SUBSTR = "分析出几种情况，然后分别对各个情况实现"


def extract_section(text: str, title: str) -> str:
    pat = rf"(?ms)^## {re.escape(title)}\s*\n(.*?)(?=^## |\Z)"
    m = re.search(pat, text)
    return m.group(1).rstrip() if m else ""


def extract_java_code(text: str) -> str:
    sec = extract_section(text, "解法")
    if not sec:
        return ""
    # 第一个 ```...``` 代码块
    m = re.search(r"```(?:\w*)\s*\n(.*?)```", sec, re.DOTALL)
    return m.group(1).strip() if m else ""


def is_placeholder_only(body: str) -> bool:
    b = body.strip()
    if not b:
        return True
    if PLACEHOLDER_SUBSTR not in b:
        return False
    # 去掉占位行后几乎无内容则视为可替换
    lines = [ln.strip() for ln in b.splitlines() if ln.strip()]
    non_ph = [ln for ln in lines if PLACEHOLDER_SUBSTR not in ln]
    return len(non_ph) == 0


def strip_meta_silu(s: str) -> str:
    out_lines = []
    for ln in s.splitlines():
        t = ln.strip()
        if t.startswith("说明：") and ("思路" in t[:40] or "页面" in t[:40]):
            continue
        out_lines.append(ln)
    return "\n".join(out_lines).strip()


def split_into_sentences(text: str) -> list[str]:
    text = text.replace("\r\n", "\n")
    # 按段落再按句号切分，保留可读性
    chunks: list[str] = []
    for para in re.split(r"\n\s*\n", text):
        para = para.strip()
        if not para:
            continue
        for part in re.split(r"(?<=[。！？])\s*", para):
            part = part.strip()
            if part:
                chunks.append(part)
    # 若未切出句号（单行中英文逗号链），再按换行切
    if len(chunks) <= 1 and "\n" in text:
        chunks = [ln.strip() for ln in text.splitlines() if ln.strip()]
    return chunks


def looks_like_code_line(s: str) -> bool:
    s = s.strip()
    if len(s) < 6:
        return False
    # 代码痕迹：赋值、分号、典型关键字
    if ";" in s and ("=" in s or "return" in s or "if" in s or "while" in s):
        return True
    if re.match(r"^int\s+\w+\s*=", s) or re.match(r"^\w+\s*=\s*.+;$", s):
        return True
    return False


def infer_bullets_from_java(code: str) -> list[str]:
    if not code:
        return ["请先补充「思路」与「解法」，再在此用条列归纳算法要点与注意事项。"]

    bullets: list[str] = []
    c = code

    if re.search(r"\bwhile\s*\(", c) and re.search(r"\bmid\b", c) and re.search(
        r"\bleft\b|\bL\b", c
    ) and re.search(r"\bright\b|\bR\b", c):
        bullets.append("在单调区间内二分查找：取中点与目标比较，缩小左右边界直至收敛。")

    if "PriorityQueue" in c or ("new int[]" in c and "poll" in c) or (
        "Queue" in c and "offer" in c and "poll" in c
    ):
        bullets.append("使用优先队列维护当前最优扩展，按题意在入队／出队时更新答案。")

    if "Stack" in c or ("Deque" in c and "push" in c and "pop" in c):
        bullets.append("用栈在遍历中暂存尚未匹配的结构，在弹出时合并或计算。")

    if re.search(r"\bdfs\s*\(", c) or re.search(r"void\s+dfs\s*\(", c):
        bullets.append("深度优先搜索遍历状态空间，配合回溯或返回值合并子问题结果。")

    if "boolean[] vis" in c or "visited" in c.lower() and "Queue" in c:
        bullets.append("从起点广度优先扩展，用访问标记避免重复与死循环。")

    if "UnionFind" in c or "union(" in c and "find(" in c:
        bullets.append("用并查集维护连通性，在合并与查询中维护题目所需的集合信息。")

    if "Map<" in c or "HashMap" in c:
        bullets.append("用哈希表记录频次或前缀信息，实现 O(1) 查询与更新。")

    if re.search(r"\bint\[\]\s+dp\b|\bd\[i\]\s*=", c) or " dp[" in c:
        bullets.append(
            "动态规划：定义状态转移，按顺序填表（或滚动数组）得到最优值或方案数。"
        )

    if "Trie" in c or "TrieNode" in c:
        bullets.append("Trie 上按前缀／后缀组织字符串，加速匹配与计数。")

    if "SegmentTree" in c or "BIT" in c or "Fenwick" in c or "树状数组" in c:
        bullets.append("用线段树或树状数组维护区间和／最值，支持单点更新与区间查询。")

    if not bullets:
        if "ListNode" in c:
            bullets.append(
                "链表上迭代处理：注意空表与尾指针，必要时使用哑结点简化边界。"
            )
        elif "TreeNode" in c:
            bullets.append("二叉树上递归或迭代遍历，综合利用子树返回值与全局状态。")
        elif "for (" in c and "length" in c:
            bullets.append("线性扫描数组，按题意维护计数、最值或滑动窗口。")
        else:
            bullets.append("按「解法」中的步骤实现主要逻辑，注意边界条件与溢出。")

    # 去重保持顺序
    seen: set[str] = set()
    uniq: list[str] = []
    for b in bullets:
        if b not in seen:
            seen.add(b)
            uniq.append(b)
    return uniq[:4]


def _ensure_md_bullets(items: list[str]) -> list[str]:
    out: list[str] = []
    for b in items:
        b = b.strip()
        if not b:
            continue
        if not b.startswith("- "):
            b = "- " + b
        out.append(b)
    return out


def build_bullets(silu: str, java: str) -> list[str]:
    silu = strip_meta_silu(silu).strip()

    if not silu:
        return _ensure_md_bullets(infer_bullets_from_java(java))

    if looks_like_code_line(silu) and len(silu) < 120:
        # 思路栏写成了代码片段：以代码推断为主，并附一句贴近题面
        extra = infer_bullets_from_java(java)
        lines: list[str] = [
            "- 实现要点见「解法」：`"
            + silu.strip().replace("\n", " ")
            + "`。"
        ]
        for x in extra[:2]:
            t = x.strip().rstrip("。")
            if t:
                lines.append("- " + t + "。")
        return _ensure_md_bullets(lines)

    sents = split_into_sentences(silu)
    # 过滤过短句（除非是明确短语）
    filtered: list[str] = []
    for s in sents:
        s = s.strip()
        if not s:
            continue
        if len(s) < 8 and not s.startswith("枚举"):
            if len(sents) <= 2:
                filtered.append(s)
            continue
        filtered.append(s)

    if not filtered:
        if silu:
            filtered = [silu]
        else:
            return _ensure_md_bullets(infer_bullets_from_java(java))

    bullets = ["- " + s for s in filtered[:5]]

    if len(bullets) < 2 and java and not looks_like_code_line(silu):
        for b in infer_bullets_from_java(java):
            line = "- " + b.rstrip("。") + "。"
            if line not in bullets:
                bullets.append(line)
            if len(bullets) >= 3:
                break

    return _ensure_md_bullets(bullets)[:5]


def process_file(path: pathlib.Path) -> bool:
    text = path.read_text(encoding="utf-8", errors="replace")
    if "## 总结" not in text:
        return False

    m = re.search(r"(?ms)^## 总结\s*\n(.*)\Z", text)
    if not m:
        return False
    body = m.group(1)
    if not is_placeholder_only(body):
        return False

    silu = extract_section(text, "思路")
    java = extract_java_code(text)
    bullets = build_bullets(silu, java)
    new_block = "## 总结\n\n" + "\n".join(bullets) + "\n"
    new_text = text[: m.start()] + new_block
    if new_text != text:
        path.write_text(new_text, encoding="utf-8")
        return True
    return False


SKIP_MANUAL_SUMMARY = {
    "2018. 判断单词是否能放入填字游戏内.md",
    "2019. 解出数学表达式的学生分数.md",
}


def add_summary_if_absent(path: pathlib.Path) -> bool:
    """为缺少「## 总结」章节的文档在文末追加总结。"""
    text = path.read_text(encoding="utf-8", errors="replace")
    if "## 总结" in text:
        return False
    silu = extract_section(text, "思路")
    java = extract_java_code(text)
    bullets = build_bullets(silu, java)
    block = "\n\n## 总结\n\n" + "\n".join(bullets) + "\n"
    path.write_text(text.rstrip() + block, encoding="utf-8")
    return True


def repair_missing_list_markers(path: pathlib.Path) -> bool:
    """修复首次批量生成时遗漏的 Markdown 列表标记 `- ` 的文件。"""
    if path.name in SKIP_MANUAL_SUMMARY:
        return False
    text = path.read_text(encoding="utf-8", errors="replace")
    m = re.search(r"(?ms)^## 总结\s*\n(.*)\Z", text)
    if not m:
        return False
    body = m.group(1)
    raw_lines = [ln.strip() for ln in body.splitlines() if ln.strip()]
    if not raw_lines:
        return False
    if raw_lines[0].startswith("- "):
        return False
    silu = extract_section(text, "思路")
    java = extract_java_code(text)
    bullets = build_bullets(silu, java)
    new_block = "## 总结\n\n" + "\n".join(bullets) + "\n"
    new_text = text[: m.start()] + new_block
    if new_text == text:
        return False
    path.write_text(new_text, encoding="utf-8")
    return True


def main() -> int:
    argv = sys.argv[1:]
    if argv and argv[0] == "--add-missing-summaries":
        n = 0
        for p in sorted(ROOT.glob("*.md")):
            try:
                if add_summary_if_absent(p):
                    n += 1
            except Exception as e:
                print(f"ERR {p}: {e}", file=sys.stderr)
                return 1
        print(f"added missing ## 总结: {n} files under {ROOT}")
        return 0

    if argv and argv[0] == "--repair-list-markers":
        n = 0
        for p in sorted(ROOT.glob("*.md")):
            try:
                if repair_missing_list_markers(p):
                    n += 1
            except Exception as e:
                print(f"ERR {p}: {e}", file=sys.stderr)
                return 1
        print(f"repaired list markers: {n} files under {ROOT}")
        return 0

    n = 0
    for p in sorted(ROOT.glob("*.md")):
        try:
            if process_file(p):
                n += 1
        except Exception as e:
            print(f"ERR {p}: {e}", file=sys.stderr)
            return 1
    print(f"updated: {n} files under {ROOT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
