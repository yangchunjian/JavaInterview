module.exports = {
    title: 'Java面试',
    description: 'java，面试，春建，杨春建，后端，JavaInterview，interview，技术',
    theme: 'reco',
    base: '/',
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}] // 需要被注入到当前页面的 HTML <head> 中的标签
    ],
    themeConfig: {
        themeConfig: {
            subSidebar: 'auto'
        },
        vssueConfig: {
            platform: 'github',
            owner: 'yangchunjian',
            repo: 'JavaInterview',
            clientId: '0ff2fd7fd8f8787afd10',
            clientSecret: '506208acc8a176516aab50d7347e5cad9db66dcc',
        },
        nav: [
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
            {text: '首页', path: '/'},

            {
                title: '总结',// 必要的

                // path: '/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                // collapsable: false, // 不折叠 / 可选的, 默认值是 true,
                // sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    "/summary/refactor",
                    "/summary/standard",
                ]
            },
            {
                title: '简历',
                children: [
                    "/resume/resume",
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
                ]
            },
            {
                title: '算法',
                children: [
                    "/algorithm/search",
                    "/algorithm/sort",
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
                            "/middleware/spring/springboot/springboot",
                            "/middleware/spring/springcloud/springcloud",
                        ]

                    },

                ]
            },
            {
                title: '作者',
                // path: '/',
                // collapsable: false, // 不折叠
                children: [
                    "/author/author",
                ]
            }
        ]
    }
}