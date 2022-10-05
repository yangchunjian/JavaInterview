// sidebar
module.exports = [
    {title: '指南', path: '/read/read'},

    {
        title: '总结',// 必要的

        // path: '/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: false, // 不折叠 / 可选的, 默认值是 true,
        // sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
            "/summary/refactor",
            "/summary/framework",
            "/summary/standard",
        ]
    },
    {
        title: '简历',
        children: [
            "/resume/core",
            "/resume/sample",
        ]
    },
    {
        title: 'Java',
        children: [
            {
                title: "Java1.8",
                children: [
                    "/java/java1.8/java1.8_grammar",
                ]
            },
            {
                title: "Java1.9",
                children: [
                    "/java/java1.9/java1.9_grammar",
                ]
            },
            {
                title: "Java1.10",
                children: [
                    "/java/java1.10/java1.10_grammar",
                ]
            },
            {
                title: "Java1.11",
                children: [
                    "/java/java1.11/java1.11_grammar",
                ]
            },

        ]
    },
    {
        title: '面试',
        children: [
            {
                title: "所有",
                children: [
                    "/interview/all/read",
                ]
            },
            {
                title: "核心",
                children: [
                    "/interview/core/read",
                ]
            },
            {
                title: "源码",
                children: [
                    "/interview/code/read",
                ]
            },
            {
                title: "算法",
                children: [
                    "/interview/algorithm/read",
                ]
            },
            {
                title: "高频",
                children: [
                    "/interview/hf/MySQL自身如何处理死锁",
                    "/interview/hf/为什么是先添加队列而不是先创建最大线程",
                    "/interview/hf/数据库常用的锁有哪些",
                    "/interview/hf/生产者和消费者5种实现方式",
                    "/interview/hf/Redis内存管理的基石zmalloc",
                    "/interview/hf/如何动态修改线程池参数",
                    "/interview/hf/流量高峰时的性能瓶颈有哪些以及如何来解决",
                ]
            },

        ]
    },
    {
        title: '源码',
        children: [
            {
                title: "底层",
                children: [
                    "/sourcecode/bottom/native",
                    "/sourcecode/bottom/asm",
                    "/sourcecode/bottom/asm_1",
                ]
            },
            {
                title: "JDK",
                children: [
                    "/sourcecode/jdk/jdk_1",
                    "/sourcecode/jdk/jdk_2",
                    "/sourcecode/jdk/jdk_3",
                    "/sourcecode/jdk/jdk_4",
                    "/sourcecode/jdk/jdk1.8",
                    "/sourcecode/jdk/ConcurrentHashMap",
                    "/sourcecode/jdk/ThreadLocal",
                    "/sourcecode/jdk/Object",
                    "/sourcecode/jdk/Integer",
                    "/sourcecode/jdk/AtomicInteger",
                    "/sourcecode/jdk/LockSupport",
                    "/sourcecode/jdk/LinkedList",
                    "/sourcecode/jdk/Class",
                    "/sourcecode/jdk/File",
                    "/sourcecode/jdk/Throwable",
                    "/sourcecode/jdk/InputStream",
                    "/sourcecode/jdk/ThreadPoolExecutor",
                    "/sourcecode/jdk/BlockingQueue",
                ]
            },
            {
                title: "Netty",
                children: [
                    "/sourcecode/netty/netty_1",
                    "/sourcecode/netty/netty_2",
                    "/sourcecode/netty/netty_3",
                    "/sourcecode/netty/netty_4",
                    "/sourcecode/netty/netty_5",
                    "/sourcecode/netty/netty_6",
                    "/sourcecode/netty/netty_7",
                    "/sourcecode/netty/netty_8",
                    "/sourcecode/netty/netty_9",
                    "/sourcecode/netty/netty_10",
                    "/sourcecode/netty/netty_11",
                    "/sourcecode/netty/netty_12",
                    "/sourcecode/netty/netty_13",
                    "/sourcecode/netty/netty_14",
                ]
            },
            {
                title: "Kafka",
                children: [
                    "/sourcecode/kafka/kafka_1",
                    "/sourcecode/kafka/kafka_2",
                    "/sourcecode/kafka/kafka_3",
                    "/sourcecode/kafka/kafka_4",
                    "/sourcecode/kafka/kafka_5",
                    "/sourcecode/kafka/kafka_6",
                    "/sourcecode/kafka/kafka_7",
                    "/sourcecode/kafka/kafka_8",
                    "/sourcecode/kafka/kafka_9",

                ]
            },
            {
                title: "C/C++",
                children: [
                    "/sourcecode/c/C++语法",
                    "/sourcecode/c/C++代码示例",
                ]
            },

        ]
    },

    {
        title: '技术',
        children: [
            {
                title: "工具",
                children: [
                    "/skill/tool/GoLand配置go工程环境(或idea配置go工程环境)",
                    "/skill/tool/picoCTF平台学习及使用",
                ]
            },
            {
                title: "随笔",
                children: [
                    "/skill/essay/essay",
                ]
            }
        ]
    },
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
                    "/algorithm/leetcode/leetcode",
                    "/algorithm/leetcode/leetcode-19.删除链表的倒数第 N 个结点",
                    "/algorithm/leetcode/leetcode-21.合并两个有序链表",
                    "/algorithm/leetcode/leetcode-23.合并K个升序链表",
                    "/algorithm/leetcode/leetcode-24.两两交换链表中的节点",
                    "/algorithm/leetcode/leetcode-25.K 个一组翻转链表",
                    "/algorithm/leetcode/leetcode-61.旋转链表",
                    "/algorithm/leetcode/leetcode-68.文本左右对齐",
                    "/algorithm/leetcode/leetcode-82.删除排序链表中的重复元素 II",
                    "/algorithm/leetcode/leetcode-83.删除排序链表中的重复元素",
                    "/algorithm/leetcode/leetcode-86.分隔链表",
                    "/algorithm/leetcode/leetcode-87.扰乱字符串",
                    "/algorithm/leetcode/leetcode-92.反转链表 II",
                    "/algorithm/leetcode/leetcode-109.有序链表转换二叉搜索树",
                    "/algorithm/leetcode/leetcode-114.二叉树展开为链表",
                    "/algorithm/leetcode/leetcode-123.买卖股票的最佳时机III",
                    "/algorithm/leetcode/leetcode-126.单词接龙II",
                    "/algorithm/leetcode/leetcode-127.单词接龙",
                    "/algorithm/leetcode/leetcode-134.加油站",
                    "/algorithm/leetcode/leetcode-135.分发糖果",
                    "/algorithm/leetcode/leetcode-138.复制带随机指针的链表",
                    "/algorithm/leetcode/leetcode-140.单词拆分II",
                    "/algorithm/leetcode/leetcode-141.环形链表",
                    "/algorithm/leetcode/leetcode-142.环形链表 II",
                    "/algorithm/leetcode/leetcode-143.重排链表",
                    "/algorithm/leetcode/leetcode-144.二叉树的前序遍历",
                    "/algorithm/leetcode/leetcode-145.二叉树的后序遍历",
                    "/algorithm/leetcode/leetcode-146.LRU 缓存",
                    "/algorithm/leetcode/leetcode-147.对链表进行插入排序",
                    "/algorithm/leetcode/leetcode-148.排序链表",
                    "/algorithm/leetcode/leetcode-149.直线上最多的点数",
                    "/algorithm/leetcode/leetcode-150.逆波兰表达式求值",
                    "/algorithm/leetcode/leetcode-174.地下城游戏",
                    "/algorithm/leetcode/leetcode-188.买卖股票的最佳时机IV",
                    "/algorithm/leetcode/leetcode-207.课程表",
                    "/algorithm/leetcode/leetcode-210.课程表II",
                    "/algorithm/leetcode/leetcode-212.单词搜索II",
                    "/algorithm/leetcode/leetcode-218.天际线问题",
                    "/algorithm/leetcode/leetcode-220.存在重复元素III",
                    "/algorithm/leetcode/leetcode-221.最大正方形",
                    "/algorithm/leetcode/leetcode-223.矩形面积",
                    "/algorithm/leetcode/leetcode-224.基本计算器",
                    "/algorithm/leetcode/leetcode-262.行程和用户",
                    "/algorithm/leetcode/leetcode-273.整数转换英文表示",
                    "/algorithm/leetcode/leetcode-274.H指数",
                    "/algorithm/leetcode/leetcode-275.H指数II",
                    "/algorithm/leetcode/leetcode-279.完全平方数",
                    "/algorithm/leetcode/leetcode-282.给表达式添加运算符",
                    "/algorithm/leetcode/leetcode-284.顶端迭代器",
                    "/algorithm/leetcode/leetcode-287.寻找重复数",
                    "/algorithm/leetcode/leetcode-289.生命游戏",
                    "/algorithm/leetcode/leetcode-290.单词规律",
                    "/algorithm/leetcode/leetcode-292.Nim游戏",
                    "/algorithm/leetcode/leetcode-295.数据流的中位数",
                    "/algorithm/leetcode/leetcode-299.猜数字游戏",
                    "/algorithm/leetcode/leetcode-303.区域和检索 - 数组不可变",
                    "/algorithm/leetcode/leetcode-304.二维区域和检索 - 矩阵不可变",
                    "/algorithm/leetcode/leetcode-306.累加数",
                    "/algorithm/leetcode/leetcode-307.区域和检索 - 数组可修改",
                    "/algorithm/leetcode/leetcode-309.最佳买卖股票时机含冷冻期",
                    "/algorithm/leetcode/leetcode-310.最小高度树",
                    "/algorithm/leetcode/leetcode-312.戳气球",
                    "/algorithm/leetcode/leetcode-313.超级丑数",
                    "/algorithm/leetcode/leetcode-315.计算右侧小于当前元素的个数",
                    "/algorithm/leetcode/leetcode-316.去除重复字母",
                    "/algorithm/leetcode/leetcode-318.最大单词长度乘积",
                    "/algorithm/leetcode/leetcode-321.拼接最大数",
                    "/algorithm/leetcode/leetcode-322.零钱兑换",
                    "/algorithm/leetcode/leetcode-324.摆动排序 II",
                    "/algorithm/leetcode/leetcode-327.区间和的个数",
                    "/algorithm/leetcode/leetcode-329.矩阵中的最长递增路径",
                    "/algorithm/leetcode/leetcode-330.按要求补齐数组",
                    "/algorithm/leetcode/leetcode-332.重新安排行程",
                    "/algorithm/leetcode/leetcode-334.递增的三元子序列",
                    "/algorithm/leetcode/leetcode-335.路径交叉",
                    "/algorithm/leetcode/leetcode-336.回文对",
                    "/algorithm/leetcode/leetcode-338.比特位计数",
                    "/algorithm/leetcode/leetcode-341.扁平化嵌套列表迭代器",
                    "/algorithm/leetcode/leetcode-342.4的幂",
                    "/algorithm/leetcode/leetcode-343.整数拆分",
                    "/algorithm/leetcode/leetcode-345.反转字符串中的元音字母",
                    "/algorithm/leetcode/leetcode-347.前 K 个高频元素",
                    "/algorithm/leetcode/leetcode-349.两个数组的交集",
                    "/algorithm/leetcode/leetcode-350.两个数组的交集 II",
                    "/algorithm/leetcode/leetcode-352.将数据流变为多个不相交区间",
                    "/algorithm/leetcode/leetcode-354.俄罗斯套娃信封问题",
                    "/algorithm/leetcode/leetcode-355.设计推特",
                    "/algorithm/leetcode/leetcode-363.矩形区域不超过 K 的最大数值和",
                    "/algorithm/leetcode/leetcode-365.水壶问题",
                    "/algorithm/leetcode/leetcode-368.最大整除子集",
                    "/algorithm/leetcode/leetcode-371.两整数之和",
                    "/algorithm/leetcode/leetcode-372.超级次方",
                    "/algorithm/leetcode/leetcode-373.查找和最小的 K 对数字",
                    "/algorithm/leetcode/leetcode-374.猜数字大小",
                    "/algorithm/leetcode/leetcode-375.猜数字大小 II",
                    "/algorithm/leetcode/leetcode-376.摆动序列",
                    "/algorithm/leetcode/leetcode-377.组合总和Ⅳ",
                    "/algorithm/leetcode/leetcode-378.有序矩阵中第 K 小的元素",
                    "/algorithm/leetcode/leetcode-380.O(1) 时间插入、删除和获取随机元素",
                    "/algorithm/leetcode/leetcode-381.O(1) 时间插入、删除和获取随机元素 - 允许重复",
                    "/algorithm/leetcode/leetcode-383.赎金信",
                    "/algorithm/leetcode/leetcode-384.打乱数组",
                    "/algorithm/leetcode/leetcode-385.迷你语法分析器",
                    "/algorithm/leetcode/leetcode-386.字典序排数",
                    "/algorithm/leetcode/leetcode-387.字符串中的第一个唯一字符",
                    "/algorithm/leetcode/leetcode-388.文件的最长绝对路径",
                    "/algorithm/leetcode/leetcode-389.找不同",
                    "/algorithm/leetcode/leetcode-390.消除游戏",
                    "/algorithm/leetcode/leetcode-391.完美矩形",
                    "/algorithm/leetcode/leetcode-392.判断子序列",
                    "/algorithm/leetcode/leetcode-393.UTF-8编码验证",
                    "/algorithm/leetcode/leetcode-394.字符串解码",
                    "/algorithm/leetcode/leetcode-395.至少有 K 个重复字符的最长子串",
                    "/algorithm/leetcode/leetcode-396.旋转函数",
                    "/algorithm/leetcode/leetcode-397.整数替换",
                    "/algorithm/leetcode/leetcode-398.随机数索引",
                    "/algorithm/leetcode/leetcode-399.除法求值",
                    "/algorithm/leetcode/leetcode-400.第 N 位数字",
                    "/algorithm/leetcode/leetcode-401.二进制手表",
                    "/algorithm/leetcode/leetcode-402.移掉 K 位数字",
                    "/algorithm/leetcode/leetcode-403.青蛙过河",
                    "/algorithm/leetcode/leetcode-404.左叶子之和",
                    "/algorithm/leetcode/leetcode-405.数字转换为十六进制数",
                    "/algorithm/leetcode/leetcode-406.根据身高重建队列",
                    "/algorithm/leetcode/leetcode-407.接雨水 II",
                    "/algorithm/leetcode/leetcode-410.分割数组的最大值",
                    "/algorithm/leetcode/leetcode-412.Fizz Buzz",
                    "/algorithm/leetcode/leetcode-413.等差数列划分",
                    "/algorithm/leetcode/leetcode-416.分割等和子集",
                    "/algorithm/leetcode/leetcode-417.太平洋大西洋水流问题",
                    "/algorithm/leetcode/leetcode-419.甲板上的战舰",
                    "/algorithm/leetcode/leetcode-420.强密码检验器",
                    "/algorithm/leetcode/leetcode-421.数组中两个数的最大异或值",
                    "/algorithm/leetcode/leetcode-423.从英文中重建数字",
                    "/algorithm/leetcode/leetcode-424.替换后的最长重复字符",
                    "/algorithm/leetcode/leetcode-427.建立四叉树",
                    "/algorithm/leetcode/leetcode-430.扁平化多级双向链表",
                    "/algorithm/leetcode/leetcode-433.最小基因变化",
                    "/algorithm/leetcode/leetcode-434.字符串中的单词数",
                    "/algorithm/leetcode/leetcode-435.无重叠区间",
                    "/algorithm/leetcode/leetcode-436.寻找右区间",
                    "/algorithm/leetcode/leetcode-437.路径总和III",
                    "/algorithm/leetcode/leetcode-438.找到字符串中所有字母异位词",
                    "/algorithm/leetcode/leetcode-440.字典序的第K小数字",
                    "/algorithm/leetcode/leetcode-441.排列硬币",
                    "/algorithm/leetcode/leetcode-442.数组中重复的数据",
                    "/algorithm/leetcode/leetcode-443.压缩字符串",
                    "/algorithm/leetcode/leetcode-445.两数相加II",
                    "/algorithm/leetcode/leetcode-446.等差数列划分 II - 子序列",
                    "/algorithm/leetcode/leetcode-447.回旋镖的数量",
                    "/algorithm/leetcode/leetcode-448.找到所有数组中消失的数字",
                    "/algorithm/leetcode/leetcode-449.序列化和反序列化二叉搜索树",
                    "/algorithm/leetcode/leetcode-451.根据字符出现频率排序",
                    "/algorithm/leetcode/leetcode-452.用最少数量的箭引爆气球",
                    "/algorithm/leetcode/leetcode-453.最小操作次数使数组元素相等",
                    "/algorithm/leetcode/leetcode-454.四数相加 II",
                    "/algorithm/leetcode/leetcode-455.分发饼干",
                    "/algorithm/leetcode/leetcode-456.132模式",
                    "/algorithm/leetcode/leetcode-457.环形数组是否存在循环",
                    "/algorithm/leetcode/leetcode-458.可怜的小猪",
                    "/algorithm/leetcode/leetcode-459.重复的子字符串",
                    "/algorithm/leetcode/leetcode-460.LFU 缓存",
                    "/algorithm/leetcode/leetcode-461.汉明距离",
                    "/algorithm/leetcode/leetcode-462.最少移动次数使数组元素相等 II",
                    "/algorithm/leetcode/leetcode-463.岛屿的周长",
                    "/algorithm/leetcode/leetcode-464.我能赢吗",
                    "/algorithm/leetcode/leetcode-466.统计重复个数",
                    "/algorithm/leetcode/leetcode-467.环绕字符串中唯一的子字符串",
                    "/algorithm/leetcode/leetcode-468.验证IP地址",
                    "/algorithm/leetcode/leetcode-470.用 Rand7() 实现 Rand10()",
                    "/algorithm/leetcode/leetcode-472.连接词",
                    "/algorithm/leetcode/leetcode-473.火柴拼正方形",
                    "/algorithm/leetcode/leetcode-475.供暖器",
                    "/algorithm/leetcode/leetcode-476.数字的补数",
                    "/algorithm/leetcode/leetcode-477.汉明距离总和",
                    "/algorithm/leetcode/leetcode-478.在圆内随机生成点",
                    "/algorithm/leetcode/leetcode-479.最大回文数乘积",
                    "/algorithm/leetcode/leetcode-480.滑动窗口中位数",
                    "/algorithm/leetcode/leetcode-481.神奇字符串",
                    "/algorithm/leetcode/leetcode-482.密钥格式化",
                    "/algorithm/leetcode/leetcode-483.最小好进制",
                    "/algorithm/leetcode/leetcode-485.最大连续 1 的个数",
                    "/algorithm/leetcode/leetcode-486.预测赢家",
                    "/algorithm/leetcode/leetcode-488.祖玛游戏",
                    "/algorithm/leetcode/leetcode-492.构造矩形",
                    "/algorithm/leetcode/leetcode-493.翻转对",
                    "/algorithm/leetcode/leetcode-495.提莫攻击",
                    "/algorithm/leetcode/leetcode-496.下一个更大元素 I",
                    "/algorithm/leetcode/leetcode-497.非重叠矩形中的随机点",
                    "/algorithm/leetcode/leetcode-498.对角线遍历",
                    "/algorithm/leetcode/leetcode-500.键盘行",
                    "/algorithm/leetcode/leetcode-502.IPO",
                    "/algorithm/leetcode/leetcode-503.下一个更大元素 II",
                    "/algorithm/leetcode/leetcode-504.七进制数",
                    "/algorithm/leetcode/leetcode-506.相对名次",
                    "/algorithm/leetcode/leetcode-507.完美数",
                    "/algorithm/leetcode/leetcode-508.出现次数最多的子树元素和",
                    "/algorithm/leetcode/leetcode-509.斐波那契数",
                    "/algorithm/leetcode/leetcode-511.游戏玩法分析 I",
                    "/algorithm/leetcode/leetcode-514.自由之路",
                    "/algorithm/leetcode/leetcode-516.最长回文子序列",
                    "/algorithm/leetcode/leetcode-517.超级洗衣机",
                    "/algorithm/leetcode/leetcode-518.零钱兑换 II",
                    "/algorithm/leetcode/leetcode-519.随机翻转矩阵",
                    "/algorithm/leetcode/leetcode-520.检测大写字母",
                    "/algorithm/leetcode/leetcode-521.最长特殊序列 Ⅰ",
                    "/algorithm/leetcode/leetcode-522.最长特殊序列 II",
                    "/algorithm/leetcode/leetcode-523.连续的子数组和",
                    "/algorithm/leetcode/leetcode-524.通过删除字母匹配到字典里最长单词",
                    "/algorithm/leetcode/leetcode-525.连续数组",
                    "/algorithm/leetcode/leetcode-526.优美的排列",
                    "/algorithm/leetcode/leetcode-528.按权重随机选择",
                    "/algorithm/leetcode/leetcode-529.扫雷游戏",
                    "/algorithm/leetcode/leetcode-532.数组中的 k-diff 数对",
                    "/algorithm/leetcode/leetcode-535.TinyURL 的加密与解密",
                    "/algorithm/leetcode/leetcode-537.复数乘法",
                    "/algorithm/leetcode/leetcode-539.最小时间差",
                    "/algorithm/leetcode/leetcode-540.有序数组中的单一元素",
                    "/algorithm/leetcode/leetcode-541.反转字符串 II",
                    "/algorithm/leetcode/leetcode-542.01矩阵",
                    "/algorithm/leetcode/leetcode-546.移除盒子",
                    "/algorithm/leetcode/leetcode-547.省份数量",
                    "/algorithm/leetcode/leetcode-551.学生出勤记录 I",
                    "/algorithm/leetcode/leetcode-552.学生出勤记录 II",
                    "/algorithm/leetcode/leetcode-553.最优除法",
                    "/algorithm/leetcode/leetcode-554.砖墙",
                    "/algorithm/leetcode/leetcode-556.下一个更大元素 III",
                    "/algorithm/leetcode/leetcode-557.反转字符串中的单词 III",
                    "/algorithm/leetcode/leetcode-560.和为 K 的子数组",
                    "/algorithm/leetcode/leetcode-558.四叉树交集",
                    "/algorithm/leetcode/leetcode-559.N叉树的最大深度",
                    "/algorithm/leetcode/leetcode-561.数组拆分",
                    "/algorithm/leetcode/leetcode-563.二叉树的坡度",
                    "/algorithm/leetcode/leetcode-564.寻找最近的回文数",
                    "/algorithm/leetcode/leetcode-565.数组嵌套",
                    "/algorithm/leetcode/leetcode-566.重塑矩阵",
                    "/algorithm/leetcode/leetcode-567.字符串的排列",
                    "/algorithm/leetcode/leetcode-572.另一棵树的子树",
                    "/algorithm/leetcode/leetcode-575.分糖果",
                    "/algorithm/leetcode/leetcode-576.出界的路径数",
                    "/algorithm/leetcode/leetcode-581.最短无序连续子数组",
                    "/algorithm/leetcode/leetcode-583.两个字符串的删除操作",
                    "/algorithm/leetcode/leetcode-584.寻找用户推荐人",
                    "/algorithm/leetcode/leetcode-586.订单最多的客户",
                    "/algorithm/leetcode/leetcode-587.安装栅栏",
                    "/algorithm/leetcode/leetcode-591.标签验证器",
                    "/algorithm/leetcode/leetcode-592.分数加减运算",
                    "/algorithm/leetcode/leetcode-593.有效的正方形",
                    "/algorithm/leetcode/leetcode-594.最长和谐子序列",
                    "/algorithm/leetcode/leetcode-595.大的国家",
                    "/algorithm/leetcode/leetcode-596.超过5名学生的课",
                    "/algorithm/leetcode/leetcode-598.范围求和 II",
                    "/algorithm/leetcode/leetcode-599.两个列表的最小索引总和",
                    "/algorithm/leetcode/leetcode-605.种花问题",
                    "/algorithm/leetcode/leetcode-606.根据二叉树创建字符串",
                    "/algorithm/leetcode/leetcode-607.销售员",
                    "/algorithm/leetcode/leetcode-608.树节点",
                    "/algorithm/leetcode/leetcode-609.在系统中查找重复文件",
                    "/algorithm/leetcode/leetcode-611.有效三角形的个数",
                    "/algorithm/leetcode/leetcode-620.有趣的电影",
                    "/algorithm/leetcode/leetcode-621.任务调度器",
                    "/algorithm/leetcode/leetcode-622.设计循环队列",
                    "/algorithm/leetcode/leetcode-623.在二叉树中增加一行",
                    "/algorithm/leetcode/leetcode-626.换座位",
                    "/algorithm/leetcode/leetcode-627.变更性别",
                    "/algorithm/leetcode/leetcode-628.三个数的最大乘积",
                    "/algorithm/leetcode/leetcode-629.K个逆序对数组",
                    "/algorithm/leetcode/leetcode-630.课程表 III",
                    "/algorithm/leetcode/leetcode-632.最小区间",
                    "/algorithm/leetcode/leetcode-633.平方数之和",
                    "/algorithm/leetcode/leetcode-636.函数的独占时间",
                    "/algorithm/leetcode/leetcode-637.二叉树的层平均值",
                    "/algorithm/leetcode/leetcode-638.大礼包",
                    "/algorithm/leetcode/leetcode-639.解码方法 II",
                    "/algorithm/leetcode/leetcode-640.求解方程",
                    "/algorithm/leetcode/leetcode-641.设计循环双端队列",
                    "/algorithm/leetcode/leetcode-643.子数组最大平均数 I",
                    "/algorithm/leetcode/leetcode-645.错误的集合",
                    "/algorithm/leetcode/leetcode-646.最长数对链",
                    "/algorithm/leetcode/leetcode-647.回文子串",
                    "/algorithm/leetcode/leetcode-648.单词替换",
                    "/algorithm/leetcode/leetcode-649.Dota2 参议院",
                    "/algorithm/leetcode/leetcode-650.只有两个键的键盘",
                    "/algorithm/leetcode/leetcode-653.两数之和 IV - 输入二叉搜索树",
                    "/algorithm/leetcode/leetcode-655.输出二叉树",
                    "/algorithm/leetcode/leetcode-657.机器人能否返回原点",
                    "/algorithm/leetcode/leetcode-658.找到 K 个最接近的元素",
                    "/algorithm/leetcode/leetcode-659.分割数组为连续子序列",
                    "/algorithm/leetcode/leetcode-661.图片平滑器",
                    "/algorithm/leetcode/leetcode-662.二叉树最大宽度",
                    "/algorithm/leetcode/leetcode-664.奇怪的打印机",
                    "/algorithm/leetcode/leetcode-665.非递减数列",
                    "/algorithm/leetcode/leetcode-667.优美的排列 II",
                    "/algorithm/leetcode/leetcode-668.乘法表中第k小的数",
                    "/algorithm/leetcode/leetcode-669.修剪二叉搜索树",
                    "/algorithm/leetcode/leetcode-670.最大交换",
                    "/algorithm/leetcode/leetcode-672.灯泡开关 Ⅱ",
                    "/algorithm/leetcode/leetcode-673.最长递增子序列的个数",
                    "/algorithm/leetcode/leetcode-674.最长连续递增序列",
                    "/algorithm/leetcode/leetcode-675.为高尔夫比赛砍树",
                    "/algorithm/leetcode/leetcode-677.键值映射",
                    "/algorithm/leetcode/leetcode-678.有效的括号字符串",
                    "/algorithm/leetcode/leetcode-679.24 点游戏",
                    "/algorithm/leetcode/leetcode-680.验证回文串 II",
                    "/algorithm/leetcode/leetcode-682.棒球比赛",
                    "/algorithm/leetcode/leetcode-684.冗余连接",
                    "/algorithm/leetcode/leetcode-685.冗余连接 II",
                    "/algorithm/leetcode/leetcode-686.重复叠加字符串匹配",
                    "/algorithm/leetcode/leetcode-687.最长同值路径",
                    "/algorithm/leetcode/leetcode-688.骑士在棋盘上的概率",
                    "/algorithm/leetcode/leetcode-689.三个无重叠子数组的最大和",
                    "/algorithm/leetcode/leetcode-690.员工的重要性",
                    "/algorithm/leetcode/leetcode-691.贴纸拼词",
                    "/algorithm/leetcode/leetcode-692.前K个高频单词",
                    "/algorithm/leetcode/leetcode-693.交替位二进制数",
                    "/algorithm/leetcode/leetcode-695.岛屿的最大面积",
                    "/algorithm/leetcode/leetcode-696.计数二进制子串",
                    "/algorithm/leetcode/leetcode-697.数组的度",
                    "/algorithm/leetcode/leetcode-698.划分为k个相等的子集",
                    "/algorithm/leetcode/leetcode-699.掉落的方块",
                    "/algorithm/leetcode/leetcode-703.数据流中的第 K 大元素",
                    "/algorithm/leetcode/leetcode-704.二分查找",
                    "/algorithm/leetcode/leetcode-705.设计哈希集合",
                    "/algorithm/leetcode/leetcode-706.设计哈希映射",
                    "/algorithm/leetcode/leetcode-707.设计链表",
                    "/algorithm/leetcode/leetcode-709.转换成小写字母",
                    "/algorithm/leetcode/leetcode-710.黑名单中的随机数",
                    "/algorithm/leetcode/leetcode-712.两个字符串的最小ASCII删除和",
                    "/algorithm/leetcode/leetcode-713.乘积小于 K 的子数组",
                    "/algorithm/leetcode/leetcode-714.买卖股票的最佳时机含手续费",
                    "/algorithm/leetcode/leetcode-715.Range 模块",
                    "/algorithm/leetcode/leetcode-717.1 比特与 2 比特字符",
                    "/algorithm/leetcode/leetcode-718.最长重复子数组",
                    "/algorithm/leetcode/leetcode-719.找出第 K 小的数对距离",
                    "/algorithm/leetcode/leetcode-720.词典中最长的单词",
                    "/algorithm/leetcode/leetcode-721.账户合并",
                    "/algorithm/leetcode/leetcode-722.删除注释",
                    "/algorithm/leetcode/leetcode-724.寻找数组的中心下标",
                    "/algorithm/leetcode/leetcode-725.分隔链表",
                    "/algorithm/leetcode/leetcode-726.原子的数量",
                    "/algorithm/leetcode/leetcode-728.自除数",
                    "/algorithm/leetcode/leetcode-729.我的日程安排表 I",
                    "/algorithm/leetcode/leetcode-730.统计不同回文子序列",
                    "/algorithm/leetcode/leetcode-731.我的日程安排表 II",
                    "/algorithm/leetcode/leetcode-732.我的日程安排表 III",
                    "/algorithm/leetcode/leetcode-733.图像渲染",
                    "/algorithm/leetcode/leetcode-735.行星碰撞",
                    "/algorithm/leetcode/leetcode-736.Lisp 语法解析",
                    "/algorithm/leetcode/leetcode-739.每日温度",
                    "/algorithm/leetcode/leetcode-740.删除并获得点数",
                    "/algorithm/leetcode/leetcode-752.打开转盘锁",
                    "/algorithm/leetcode/leetcode-753.破解保险箱",
                    "/algorithm/leetcode/leetcode-756.金字塔转换矩阵",
                    "/algorithm/leetcode/leetcode-757.设置交集大小至少为2",
                    "/algorithm/leetcode/leetcode-761.特殊的二进制序列",
                    "/algorithm/leetcode/leetcode-762.二进制表示中质数个计算置位",
                    "/algorithm/leetcode/leetcode-817.链表组件",
                    "/algorithm/leetcode/leetcode-834.树中距离之和",
                    "/algorithm/leetcode/leetcode-863.二叉树中所有距离为 K 的结点",
                    "/algorithm/leetcode/leetcode-865.具有所有最深节点的最小子树",
                    "/algorithm/leetcode/leetcode-872.叶子相似的树",
                    "/algorithm/leetcode/leetcode-889.根据前序和后序遍历构造二叉树",
                    "/algorithm/leetcode/leetcode-915.分割数组",
                    "/algorithm/leetcode/leetcode-918.环形子数组的最大和",
                    "/algorithm/leetcode/leetcode-919.完全二叉树插入器",
                    "/algorithm/leetcode/leetcode-951.翻转等价二叉树",
                    "/algorithm/leetcode/leetcode-958.二叉树的完全性检验",
                    "/algorithm/leetcode/leetcode-968.监控二叉树",
                    "/algorithm/leetcode/leetcode-987.二叉树的垂序遍历",
                    "/algorithm/leetcode/leetcode-988.从叶结点开始的最小字符串",
                    "/algorithm/leetcode/leetcode-998.最大二叉树 II",
                    "/algorithm/leetcode/leetcode-1022.从根到叶的二进制数之和",
                    "/algorithm/leetcode/leetcode-1038.从二叉搜索树到更大和树",
                    "/algorithm/leetcode/leetcode-1028.从先序遍历还原二叉树",
                    "/algorithm/leetcode/leetcode-1080.根到叶路径上的不足节点",
                    "/algorithm/leetcode/leetcode-1104.二叉树寻路",
                    "/algorithm/leetcode/leetcode-1110.删点成林",
                    "/algorithm/leetcode/leetcode-1123.最深叶节点的最近公共祖先",
                    "/algorithm/leetcode/leetcode-1145.二叉树着色游戏",
                    "/algorithm/leetcode/leetcode-1161.最大层内元素和",
                    "/algorithm/leetcode/leetcode-1186.删除一次得到子数组最大和",
                    "/algorithm/leetcode/leetcode-1206.设计跳表",
                    "/algorithm/leetcode/leetcode-1261.在受污染的二叉树中查找元素",
                    "/algorithm/leetcode/leetcode-1302.层数最深叶子节点的和",
                    "/algorithm/leetcode/leetcode-1305.两棵二叉搜索树中的所有元素",
                    "/algorithm/leetcode/leetcode-1315.祖父节点值为偶数的节点和",
                    "/algorithm/leetcode/leetcode-1339.分裂二叉树的最大乘积",
                    "/algorithm/leetcode/leetcode-1361.验证二叉树",
                    "/algorithm/leetcode/leetcode-1362.最接近的因数",
                    "/algorithm/leetcode/leetcode-1367.二叉树中的列表",
                    "/algorithm/leetcode/leetcode-1372.二叉树中的最长交错路径",
                    "/algorithm/leetcode/leetcode-1373.二叉搜索子树的最大键值和",
                    "/algorithm/leetcode/leetcode-1376.通知所有员工所需的时间",
                    "/algorithm/leetcode/leetcode-1377.T 秒后青蛙的位置",
                    "/algorithm/leetcode/leetcode-1379.找出克隆二叉树中的相同节点",
                    "/algorithm/leetcode/leetcode-1380.矩阵中的幸运数",
                    "/algorithm/leetcode/leetcode-1443.收集树上所有苹果的最少时间",
                    "/algorithm/leetcode/leetcode-1448.统计二叉树中好节点的数目",
                    "/algorithm/leetcode/leetcode-1530.好叶子节点对的数量",
                    "/algorithm/leetcode/leetcode-1569.将子数组重新排序得到同一个二叉查找树的方案数",
                    "/algorithm/leetcode/leetcode-1609.奇偶树",
                    "/algorithm/leetcode/leetcode-1670.设计前中后队列",
                    "/algorithm/leetcode/leetcode-1922.统计好数字的数目",
                    "/algorithm/leetcode/leetcode-2058.找出临界点之间的最小和最大距离",
                    "/algorithm/leetcode/leetcode-2181.合并零之间的节点",
                    "/algorithm/leetcode/leetcode-2289.使数组按非递减顺序排列",
                    "/algorithm/leetcode/leetcode-2326.螺旋矩阵 IV",
                    "/algorithm/leetcode/leetcode-面试题LRU 缓存",
                ]
            },
            {
                title: "牛客",
                children: [
                    "/algorithm/nowcoder/nowcoder",
                    "/algorithm/nowcoder/nowcoder-BM4.合并两个排序的链表",
                ]
            },
            {
                title: "设计模式",
                children: [
                    "/algorithm/designpattern/adapter",
                    "/algorithm/designpattern/strategy",
                    "/algorithm/designpattern/observer",
                ]
            },

        ]
    },
    {
        title: '运维',
        children: [
            "/operation/command",
            "/operation/deploy",
        ]
    },
    {
        title: '测试',
        children: [
            "/test/smoke",
        ]
    },
    {
        title: '数据库',
        children: [
            "/database/mysql/mysql",
            "/database/redis/redis",
            "/database/elasticsearch/elasticsearch",
        ]
    },
    {
        title: '中间件',
        children: [
            {
                title: "消息队列",
                children: [
                    "/middleware/mq/kafka/kafka",
                    "/middleware/mq/rocket/rocket",
                ]
            },
            {
                title: "配置中心",
                children: [
                    "/middleware/config/apollo/apollo",
                    "/middleware/config/disconf/disconf",
                ]

            },

            {
                title: "定时任务",
                children: [
                    "/middleware/time/xxljob/xxljob",
                ]

            },
            {
                title: "Spring",
                children: [
                    "/middleware/spring/springmvc/springmvc",
                    "/middleware/spring/springboot/springboot",
                    "/middleware/spring/springcloud/springcloud",
                ]

            },

        ]
    }
]