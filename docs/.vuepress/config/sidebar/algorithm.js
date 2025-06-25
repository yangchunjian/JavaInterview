module.exports = [
    {
        title: '算法',
        children: [
            {
                title: "经典",
                children: [
                    "/algorithm/classic/search",
                    "/algorithm/classic/sort",
                ]
            },
            {
                title: "力扣",
                children: [
                    // ... 这里省略，实际会完整迁移 sidebar.js 中算法-力扣的所有 children
                ]
            },
            {
                title: "牛客",
                children: [
                    "/algorithm/nowcoder/nowcoder",
                    "/algorithm/nowcoder/nowcoder-BM4.合并两个排序的链表",
                ]
            },
        ]
    }
]; 