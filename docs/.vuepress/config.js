module.exports = {
    title: 'Java面试',
    description: 'java，面试，春建，杨春建，后端，JavaInterview，interview，技术',
    theme: 'reco',
    base: '/',
    head: [
        ['link', { rel: 'icon', href: '../media/pictures/logo.png' }] // 需要被注入到当前页面的 HTML <head> 中的标签
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
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    {title: "重构", path: "/summary/refactor", collapsable: false},
                    {title: "规范", path: "/summary/standard", collapsable: false},
                ]
            },
            {
                title: '简历',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    {title: "简历", path: "/resume/resume", collapsable: false},
                ]
            },
            {
                title: 'Java',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    {title: "语法", path: "/java/grammar", collapsable: false},
                ]
            },
            {
                title: '源码',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    {title: "JDK1.8包结构", path: "/sourcecode/jdk1.8", collapsable: false},
                    {title: "ConcurrentHashMap", path: "/sourcecode/ConcurrentHashMap", collapsable: false},
                    {title: "ThreadLocal", path: "/sourcecode/ThreadLocal", collapsable: false},
                    {title: "Object", path: "/sourcecode/Object", collapsable: false},
                    {title: "Integer", path: "/sourcecode/Integer", collapsable: false},
                ]
            },
            {
                title: '算法',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    {title: "查找", path: "/algorithm/search", collapsable: false},
                    {title: "排序", path: "/algorithm/sort", collapsable: false},
                    // {title: "算法工程", path: "../javainterview-algorithm/README", collapsable: false},
                ]
            },
            {
                title: '数据库',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    {title: "MySQL", path: "/database/mysql/mysql", collapsable: false},
                    {title: "Redis", path: "/database/redis/redis", collapsable: false},
                    {title: "Elasticsearch", path: "/database/elasticsearch/elasticsearch", collapsable: false},
                ]
            }, ,
            {
                title: '中间件',
                path: '/',
                collapsable: false,
                children: [
                    {title: "消息队列", path: "/middleware/mq", collapsable: false},
                        // children: [
                        //     {title: "Kafka", path: "/kafka", collapsable: false},
                        //     {title: "Rocket", path: "/rocket", collapsable: false},
                        // ]

                    {title: "配置中心", path: "/middleware/config", collapsable: false},
                        // children: [
                        //     {title: "Apollo", path: "/apollo", collapsable: false},
                        // ]


                ]
            },
            {
                title: '作者',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    {title: "简介", path: "/author/author", collapsable: false},
                ]
            }
        ]
    }
}