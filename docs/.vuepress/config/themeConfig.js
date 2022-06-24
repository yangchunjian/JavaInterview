const nav = require('./themeConfig/nav.js');
// const htmlModules = require('./themeConfig/htmlModules.js');


// 主题配置
module.exports = {
  nav,
  logo: '/assets/icon/logo200x100.png',
  sidebar: 'auto', //  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
  // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
  author: {
    name: 'JavaInterview.cn', // 必需
    link: 'https://JavaInterview.cn', // 可选的
  },
  lastUpdated: '上次编辑于',
  // vssueConfig: {
  //     platform: 'github',
  //     owner: 'yangchunjian',
  //     repo: 'JavaInterview',
  //     clientId: '0ff2fd7fd8f8787afd10',
  //     clientSecret: '506208acc8a176516aab50d7347e5cad9db66dcc',
  // },
  //
  // docsDir: 'docs', // 编辑的文件夹
  // editLinks: true, // 启用编辑
  // editLinkText: '编辑',
  //
  // isShowReadTime: true, // 是否展示阅读时间
  // wordsPerMinute: 100, // 每分钟阅读的字数 默认是 300
  // isShowReadCount: true, // 是否开启阅读量统计
  bodyBgImg: [
    // '/img/bg/1.jpg',
    // '/img/bg/2.jpg',
    // '/img/bg/4.jpg',
    '/img/5.jpg',
    // '/img/bg/bg7.jpg',
  ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
  bodyBgImgOpacity: 1, // body背景图透明度，选值 0 ~ 1.0, 默认0.5

  sidebar: [
    {title: '必读', path: '/read/read'},

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
            "/algorithm/leetcode/leetcode-316.去除重复字母",
            "/algorithm/leetcode/leetcode-318.最大单词长度乘积",
            "/algorithm/leetcode/leetcode-321.拼接最大数",
            "/algorithm/leetcode/leetcode-322.零钱兑换",
            "/algorithm/leetcode/leetcode-324.摆动排序 II",
            "/algorithm/leetcode/leetcode-334.递增的三元子序列",
            "/algorithm/leetcode/leetcode-347.前 K 个高频元素",
            "/algorithm/leetcode/leetcode-349.两个数组的交集",
            "/algorithm/leetcode/leetcode-350.两个数组的交集 II",
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
            "/algorithm/leetcode/leetcode-386.字典序排数",
            "/algorithm/leetcode/leetcode-388.文件的最长绝对路径",
            "/algorithm/leetcode/leetcode-390.消除游戏",
            "/algorithm/leetcode/leetcode-395.至少有 K 个重复字符的最长子串",
            "/algorithm/leetcode/leetcode-404.左叶子之和",
            "/algorithm/leetcode/leetcode-421.数组中两个数的最大异或值",
            "/algorithm/leetcode/leetcode-423.从英文中重建数字",
            "/algorithm/leetcode/leetcode-424.替换后的最长重复字符",
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
            "/algorithm/leetcode/leetcode-449.序列化和反序列化二叉搜索树",
            "/algorithm/leetcode/leetcode-451.根据字符出现频率排序",
            "/algorithm/leetcode/leetcode-452.用最少数量的箭引爆气球",
            "/algorithm/leetcode/leetcode-454.四数相加 II",
            "/algorithm/leetcode/leetcode-457.环形数组是否存在循环",
            "/algorithm/leetcode/leetcode-461.汉明距离",
            "/algorithm/leetcode/leetcode-478.在圆内随机生成点",
            "/algorithm/leetcode/leetcode-482.密钥格式化",
            "/algorithm/leetcode/leetcode-485.最大连续 1 的个数",
            "/algorithm/leetcode/leetcode-508.出现次数最多的子树元素和",
            "/algorithm/leetcode/leetcode-572.另一棵树的子树",
            "/algorithm/leetcode/leetcode-559.N叉树的最大深度",
            "/algorithm/leetcode/leetcode-563.二叉树的坡度",
            "/algorithm/leetcode/leetcode-606.根据二叉树创建字符串",
            "/algorithm/leetcode/leetcode-623.在二叉树中增加一行",
            "/algorithm/leetcode/leetcode-655.输出二叉树",
            "/algorithm/leetcode/leetcode-662.二叉树最大宽度",
            "/algorithm/leetcode/leetcode-669.修剪二叉搜索树",
            "/algorithm/leetcode/leetcode-687.最长同值路径",
            "/algorithm/leetcode/leetcode-863.二叉树中所有距离为 K 的结点",
            "/algorithm/leetcode/leetcode-889.根据前序和后序遍历构造二叉树",
            "/algorithm/leetcode/leetcode-951.翻转等价二叉树",
            "/algorithm/leetcode/leetcode-958.二叉树的完全性检验",
            "/algorithm/leetcode/leetcode-968.监控二叉树",
            "/algorithm/leetcode/leetcode-872.叶子相似的树",
            "/algorithm/leetcode/leetcode-987.二叉树的垂序遍历",
            "/algorithm/leetcode/leetcode-988.从叶结点开始的最小字符串",
            "/algorithm/leetcode/leetcode-998.最大二叉树 II",
            "/algorithm/leetcode/leetcode-1022.从根到叶的二进制数之和",
            "/algorithm/leetcode/leetcode-1038.从二叉搜索树到更大和树",
            "/algorithm/leetcode/leetcode-1028.从先序遍历还原二叉树",
            "/algorithm/leetcode/leetcode-1080.根到叶路径上的不足节点",
            "/algorithm/leetcode/leetcode-1104.二叉树寻路",
            "/algorithm/leetcode/leetcode-1110.删点成林",
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
            "/algorithm/leetcode/leetcode-1376.通知所有员工所需的时间",
            "/algorithm/leetcode/leetcode-1380.矩阵中的幸运数",
            "/algorithm/leetcode/leetcode-1448.统计二叉树中好节点的数目",
            "/algorithm/leetcode/leetcode-1530.好叶子节点对的数量",
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
  ],

  // 页脚信息
  footer: {
    createYear: 2019, // 博客创建年份
    copyrightInfo: '<a href="https://JavaInterview.cn" target="_blank">JavaInterview.cn</a>', // 博客版权信息，支持a标签或换行标签</br>
  },
  // 博主信息 (显示在首页侧边栏)
  blogger: {
    // avatar: 'https://www.yangchunjian.com/docbook/imgs/dearlocation.jpeg',
    avatar: '/img/weixin.jpeg',
    name: 'JavaInterview',
    slogan: '『Java面试+Java学习』',
  },
  // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
  extendFrontmatter: {
    author: {
      name: 'JavaInterview.cn', // 必需
      link: 'https://JavaInterview.cn', // 可选的
    }
  },

  // htmlModules // 插入hmtl(广告)模块
}
