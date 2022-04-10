module.exports = {
    title: 'Java面试',
    description: 'java，面试，春建，杨春建，后端，JavaInterview，interview，技术',
    theme: 'reco',
    base: '/JavaInterview/',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: '作者',
                items: [
                    { text: 'CSDN', link: 'https://yangchunjian.blog.csdn.net' },
                    { text: '文档箱', link: 'https://yangchunjian.com' },
                    { text: '微信号', link: 'https://www.yangchunjian.com/docbook/imgs/dearlocation.jpeg' },
                    { text: '公众号', link: 'https://www.yangchunjian.com/docbook/imgs/qrcode_for_gh_8756901e5b12_344.jpg' }
                ]
            }
        ],
        sidebar: [
            {
                title: '总结',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "基础", path: "/summary/base"},
                ]
            },
            {
                title: '简历',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "基础", path: "/resume/base"},
                ]
            },
            {
                title: 'Java',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "基础", path: "/java/base"},
                ]
            },
            {
                title: '算法',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "基础", path: "/algorithm/base"},
                ]
            },
            {
                title: '数据库',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "基础", path: "/database/base"},
                ]
            },
            {
                title: '作者',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "基础", path: "/author/base"},
                ]
            }
        ]
    }
}