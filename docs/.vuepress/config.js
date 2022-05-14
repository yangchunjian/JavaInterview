module.exports = {
    title: 'JavaInterview',
    description: 'java,面试,春建,杨春建,后端,JavaInterview,interview,技术',
    // theme: 'reco',
    theme: 'vdoing',
    base: '/',
    head: [
        ['link', {rel: 'icon', href: '/assets/icon/logo_title50x50.png'}], // 需要被注入到当前页面的 HTML <head> 中的标签
        [
            'meta',
            {
                name: 'keywords',
                content: 'java,面试,春建,杨春建,后端,JavaInterview,interview,技术,后端博客,个人技术博客,后端,后端开发,后端框架,web前端,后端面试题,技术文档,学习,面试,Spring,Kafka,MySQL,MQ,Redis,Elasticsearch,git,github,markdown',
            },
        ],
        ['meta', {name: 'baidu-site-verification', content: 'code-dbbt0zdlBh'}], // 百度统计的站长验证（你可以去掉）

    ],
    plugins: [
        [
            'copyright',
            {
                authorName: 'JavaInterview.cn', // 选中的文字将无法被复制
                minLength: 20, // 如果长度超过  30 个字符
            },
        ],
        [
            'reading-progress',
            {},
        ],
        [
            'vuepress-plugin-comment',
            {
                choosen: 'valine',
                // options选项中的所有参数，会传给Valine的配置
                options: {
                    el: '#valine-vuepress-comment',
                    appId: '5buJqOd3oGvBI3ccC5N5tPIN-gzGzoHsz',
                    appKey: 'OyUWJytBypOoxyxyPMsTCygT'
                }
            }
        ],

        //全文搜索
        ['fulltext-search'],
        //代码复制
        ['vuepress-plugin-code-copy', {
            // align: "top",
            successText: "已复制！"
        }],
        //百度自动推送
        [
            'vuepress-plugin-baidu-autopush'
        ],
        //百度统计
        ['vuepress-plugin-baidu-tongji', {
            hm: '03cb08758bea6323509b897a0e0442df'
        }],
        [
            'sitemap', {
            hostname: 'https://javainterview.cn'
        }
        ]

    ],

    themeConfig: {
        logo: '/assets/icon/logo200x100.png',
        sidebar: 'auto', //  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
        // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
        author: {
            name: 'JavaInterview.cn', // 必需
            link: 'https://JavaInterview.cn', // 可选的
        },
        /*tags:   {
         name : 'Java'
         },*/
        /*docsDir: 'docs', // 编辑的文件夹
         editLinks: true, // 启用编辑
         editLinkText: '编辑此页',*/

        lastUpdated: '上次编辑于',
        // vssueConfig: {
        //     platform: 'github',
        //     owner: 'yangchunjian',
        //     repo: 'JavaInterview',
        //     clientId: '0ff2fd7fd8f8787afd10',
        //     clientSecret: '506208acc8a176516aab50d7347e5cad9db66dcc',
        // },
        //

        nav: [
            {text: '首页', link: '/'},
            {text: '目录', link: '/categories/'},
            {text: '标签', link: '/tags/'},
            {text: '归档', link: '/archives/'},
            {
                text: '作者',
                items: [
                    {text: 'CSDN', link: 'https://yangchunjian.blog.csdn.net'},
                    {text: '文档箱', link: 'https://yangchunjian.com'},
                    {text: '微信号', link: 'https://www.yangchunjian.com/docbook/imgs/dearlocation.jpeg'},
                    {text: '公众号', link: 'https://www.yangchunjian.com/docbook/imgs/qrcode_for_gh_8756901e5b12_344.jpg'}
                ]
            }
        ],
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
            /*{
                title: 'Interview',
                children: [
                    {
                        title: "所有",
                        children: [
                            "/interview/all/readme",
                        ]
                    },
                    {
                        title: "核心",
                        children: [
                            "/interview/core/readme",
                        ]
                    },
                    {
                        title: "源码",
                        children: [
                            "/interview/code/readme",
                        ]
                    },
                    {
                        title: "算法",
                        children: [
                            "/interview/algorithm/readme",
                        ]
                    },

                ]
            },*/
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
                            "/algorithm/leetcode/leetcode-316.去除重复字母",
                            "/algorithm/leetcode/leetcode-404.左叶子之和",
                            "/algorithm/leetcode/leetcode-423.从英文中重建数字",
                            "/algorithm/leetcode/leetcode-437.路径总和III",
                            "/algorithm/leetcode/leetcode-449.序列化和反序列化二叉搜索树",
                            "/algorithm/leetcode/leetcode-572.另一棵树的子树",
                            "/algorithm/leetcode/leetcode-559.N叉树的最大深度",
                            "/algorithm/leetcode/leetcode-563.二叉树的坡度",
                            "/algorithm/leetcode/leetcode-623.在二叉树中增加一行",
                            "/algorithm/leetcode/leetcode-687.最长同值路径",
                            "/algorithm/leetcode/leetcode-863.二叉树中所有距离为 K 的结点",
                            "/algorithm/leetcode/leetcode-889.根据前序和后序遍历构造二叉树",
                            "/algorithm/leetcode/leetcode-951.翻转等价二叉树",
                            "/algorithm/leetcode/leetcode-958.二叉树的完全性检验",
                            "/algorithm/leetcode/leetcode-968.监控二叉树",
                            "/algorithm/leetcode/leetcode-872.叶子相似的树",
                            "/algorithm/leetcode/leetcode-987.二叉树的垂序遍历",
                            "/algorithm/leetcode/leetcode-988.从叶结点开始的最小字符串",
                            "/algorithm/leetcode/leetcode-1038.从二叉搜索树到更大和树",
                            "/algorithm/leetcode/leetcode-1028.从先序遍历还原二叉树",
                            "/algorithm/leetcode/leetcode-1104.二叉树寻路",
                            "/algorithm/leetcode/leetcode-1110.删点成林",
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
            /*,
             tags: {
             line: 'Java', // 必需
             }*/

        },
    }
}