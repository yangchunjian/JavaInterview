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
                    "/sourcecode/c/c++",
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
                    "/skill/tool/goproject",
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
                    "/algorithm/leetcode/leetcode-68.文本左右对齐",
                    "/algorithm/leetcode/leetcode-87.扰乱字符串",
                    "/algorithm/leetcode/leetcode-123.买卖股票的最佳时机III",
                    "/algorithm/leetcode/leetcode-126.单词接龙II",
                    "/algorithm/leetcode/leetcode-127.单词接龙",
                    "/algorithm/leetcode/leetcode-134.加油站",
                    "/algorithm/leetcode/leetcode-135.分发糖果",
                    "/algorithm/leetcode/leetcode-140.单词拆分II",
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
                    "/algorithm/leetcode/leetcode-343.整数拆分",
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
                    "/algorithm/leetcode/leetcode-402.移掉 K 位数字",
                    "/algorithm/leetcode/leetcode-403.青蛙过河",
                    "/algorithm/leetcode/leetcode-404.左叶子之和",
                    "/algorithm/leetcode/leetcode-406.根据身高重建队列",
                    "/algorithm/leetcode/leetcode-407.接雨水 II",
                    "/algorithm/leetcode/leetcode-410.分割数组的最大值",
                    "/algorithm/leetcode/leetcode-413.等差数列划分",
                    "/algorithm/leetcode/leetcode-416.分割等和子集",
                    "/algorithm/leetcode/leetcode-417.太平洋大西洋水流问题",
                    "/algorithm/leetcode/leetcode-419.甲板上的战舰",
                    "/algorithm/leetcode/leetcode-420.强密码检验器",
                    "/algorithm/leetcode/leetcode-421.数组中两个数的最大异或值",
                    "/algorithm/leetcode/leetcode-423.从英文中重建数字",
                    "/algorithm/leetcode/leetcode-424.替换后的最长重复字符",
                    "/algorithm/leetcode/leetcode-427.建立四叉树",
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
                    "/algorithm/leetcode/leetcode-447.回旋镖的数量",
                    "/algorithm/leetcode/leetcode-449.序列化和反序列化二叉搜索树",
                    "/algorithm/leetcode/leetcode-451.根据字符出现频率排序",
                    "/algorithm/leetcode/leetcode-452.用最少数量的箭引爆气球",
                    "/algorithm/leetcode/leetcode-454.四数相加 II",
                    "/algorithm/leetcode/leetcode-456.132模式",
                    "/algorithm/leetcode/leetcode-457.环形数组是否存在循环",
                    "/algorithm/leetcode/leetcode-461.汉明距离",
                    "/algorithm/leetcode/leetcode-462.最少移动次数使数组元素相等 II",
                    "/algorithm/leetcode/leetcode-464.我能赢吗",
                    "/algorithm/leetcode/leetcode-468.验证IP地址",
                    "/algorithm/leetcode/leetcode-470.用 Rand7() 实现 Rand10()",
                    "/algorithm/leetcode/leetcode-472.连接词",
                    "/algorithm/leetcode/leetcode-473.火柴拼正方形",
                    "/algorithm/leetcode/leetcode-475.供暖器",
                    "/algorithm/leetcode/leetcode-477.汉明距离总和",
                    "/algorithm/leetcode/leetcode-478.在圆内随机生成点",
                    "/algorithm/leetcode/leetcode-480.滑动窗口中位数",
                    "/algorithm/leetcode/leetcode-481.神奇字符串",
                    "/algorithm/leetcode/leetcode-482.密钥格式化",
                    "/algorithm/leetcode/leetcode-485.最大连续 1 的个数",
                    "/algorithm/leetcode/leetcode-497.非重叠矩形中的随机点",
                    "/algorithm/leetcode/leetcode-502.IPO",
                    "/algorithm/leetcode/leetcode-503.下一个更大元素 II",
                    "/algorithm/leetcode/leetcode-508.出现次数最多的子树元素和",
                    "/algorithm/leetcode/leetcode-514.自由之路",
                    "/algorithm/leetcode/leetcode-516.最长回文子序列",
                    "/algorithm/leetcode/leetcode-518.零钱兑换 II",
                    "/algorithm/leetcode/leetcode-525.连续数组",
                    "/algorithm/leetcode/leetcode-526.优美的排列",
                    "/algorithm/leetcode/leetcode-572.另一棵树的子树",
                    "/algorithm/leetcode/leetcode-559.N叉树的最大深度",
                    "/algorithm/leetcode/leetcode-563.二叉树的坡度",
                    "/algorithm/leetcode/leetcode-567.字符串的排列",
                    "/algorithm/leetcode/leetcode-576.出界的路径数",
                    "/algorithm/leetcode/leetcode-606.根据二叉树创建字符串",
                    "/algorithm/leetcode/leetcode-623.在二叉树中增加一行",
                    "/algorithm/leetcode/leetcode-655.输出二叉树",
                    "/algorithm/leetcode/leetcode-662.二叉树最大宽度",
                    "/algorithm/leetcode/leetcode-669.修剪二叉搜索树",
                    "/algorithm/leetcode/leetcode-687.最长同值路径",
                    "/algorithm/leetcode/leetcode-715.Range 模块",
                    "/algorithm/leetcode/leetcode-752.打开转盘锁",
                    "/algorithm/leetcode/leetcode-753.破解保险箱",
                    "/algorithm/leetcode/leetcode-863.二叉树中所有距离为 K 的结点",
                    "/algorithm/leetcode/leetcode-865.具有所有最深节点的最小子树",
                    "/algorithm/leetcode/leetcode-889.根据前序和后序遍历构造二叉树",
                    "/algorithm/leetcode/leetcode-919.完全二叉树插入器",
                    "/algorithm/leetcode/leetcode-951.翻转等价二叉树",
                    "/algorithm/leetcode/leetcode-958.二叉树的完全性检验",
                    "/algorithm/leetcode/leetcode-968.监控二叉树",
                    "/algorithm/leetcode/leetcode-872.叶子相似的树",
                    "/algorithm/leetcode/leetcode-919.完全二叉树插入器",
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