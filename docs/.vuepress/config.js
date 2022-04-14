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
            {text: '首页', link: '/'},
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
            {
                title: '总结',
                path: '/summary/',
                collapsable: true, // 不折叠
                children: [
                    "/summary/refactor",
                    "/summary/standard",
                ]
            },
            {
                title: '简历',
                path: '/resume/',
                collapsable: true, // 不折叠
                children: [
                    "/resume/resume",
                ]
            },
            {
                title: 'Java',
                path: '/java/',
                collapsable: true, // 不折叠
                children: [
                    '/java/grammar',
                ]
            },
            {
                title: '源码',
                path: '/sourcecode/',
                collapsable: true, // 不折叠
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
                path: '/algorithm/',
                collapsable: true, // 不折叠
                children: [
                    "/algorithm/search",
                    "/algorithm/sort",
                ]
            },
            {
                title: '数据库',
                path: '/database/',
                collapsable: true, // 不折叠
                children: [
                    "/database/mysql/mysql",
                    "/database/redis/redis",
                    "/database/elasticsearch/elasticsearch",
                ]
            },
            {
                title: '中间件',
                path: '/middleware/',
                collapsable: true,
                children: [
                    {
                        title: "消息队列", path: "/middleware/mq/", collapsable: true,
                        children: [
                            "/middleware/mq/kafka/kafka",
                            "/middleware/mq/rocket/rocket",
                        ]
                    },
                    {
                        title: "配置中心", path: "/middleware/config/", collapsable: false,
                        children: [
                            "/middleware/config/apollo/apollo",
                            "/middleware/config/disconf/disconf"
                        ]

                    },
                ]
            },
            {
                title: '作者',
                path: '/author/',
                collapsable: true, // 不折叠
                children: [
                    "/author/author",
                ]
            }
        ]
    }
}