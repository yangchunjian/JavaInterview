module.exports = {
    title: 'Java面试',
    description: 'java，面试，春建，杨春建，后端，JavaInterview，interview，技术',
    // theme: 'reco',
    theme: 'vdoing',
    base: '/',
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}] // 需要被注入到当前页面的 HTML <head> 中的标签
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
        //代码复制
        ['vuepress-plugin-code-copy', {
            align: "top",
            successText: "已复制！"
        }]

    ],

    themeConfig: {
        sidebar: 'auto', //  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
        // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
        author: {
            name: 'JavaInterview.cn', // 必需
            link: 'http://JavaInterview.cn', // 可选的
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

        nav: [
            {text: '首页', link: '/'},
            {text: '目录', link: '/categories/'},
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
                    "/java/grammar",
                ]
            },
            {
                title: '源码',
                children: [
                    "/sourcecode/jdk1.8",
                    "/sourcecode/ConcurrentHashMap",
                    "/sourcecode/ThreadLocal",
                    "/sourcecode/Object",
                    "/sourcecode/Integer",
                    "/sourcecode/AtomicInteger",
                    "/sourcecode/LockSupport",
                    "/sourcecode/LinkedList",
                    "/sourcecode/Class",
                    "/sourcecode/File",
                ]
            },
            {
                title: '算法',
                children: [
                    "/algorithm/search",
                    "/algorithm/sort",
                    {
                        title: "力扣",
                        children: [
                            "/algorithm/leetcode/leetcode",
                            "/algorithm/leetcode/leetcode-572. 另一棵树的子树",
                        ]
                    },
                    "/algorithm/nowcoder",
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
            copyrightInfo: '<a href="http://JavaInterview.cn" target="_blank">JavaInterview.cn</a>', // 博客版权信息，支持a标签或换行标签</br>
        },
        // 博主信息 (显示在首页侧边栏)
        blogger: {
            // avatar: 'https://www.yangchunjian.com/docbook/imgs/dearlocation.jpeg',
            avatar: '/weixin.jpeg',
            name: 'JavaInterview',
            slogan: '『Java面试+Java学习』',
        },
        // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
        extendFrontmatter: {
            author: {
                name: 'JavaInterview.cn', // 必需
                link: 'http://JavaInterview.cn', // 可选的
            }
            /*,
            tags: {
                line: 'Java', // 必需
            }*/

        },
    }
}