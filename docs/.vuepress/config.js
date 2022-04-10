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
                title: 'mysql',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "前言", path: "/mysql/brief"},
                ]
            },

            {
                title: '关于我',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "公众号", path: "/about/brief"},
                ]
            }
        ]
    }
}