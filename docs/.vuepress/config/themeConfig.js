const nav = require('./themeConfig/nav.js');
const sidebar = require('./sidebar.js');
const htmlModules = require('./themeConfig/htmlModules.js');


// 主题配置
module.exports = {
  nav,
  logo: '/assets/icon/logo200x100.png',
  hostname: "https://javainterview.cn/",
  sidebar: 'auto', //  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
  // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
  author: {
    name: 'JavaInterview.cn', // 必需
    link: 'https://JavaInterview.cn', // 可选的
  },
  // lang: "zh-CN",
  // lastUpdated: '上次编辑于',
  lastUpdated: false,
  // vssueConfig: {
  //     platform: 'github',
  //     owner: 'yangchunjian',
  //     repo: 'JavaInterview',
  //     clientId: '0ff2fd7fd8f8787afd10',
  //     clientSecret: '506208acc8a176516aab50d7347e5cad9db66dcc',
  // },
  //

  // repo: "https://github.com/yangchunjian/JavaInterview",
  // docsDir: 'docs', // 编辑的文件夹
  // editLinks: true, // 启用编辑
  // docsBranch: 'main', // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
  // editLinkText: '编辑此页',

  // tags: 'Java',

  // 博客配置
  // category: {
  //   // location: 2, // 在导航栏菜单中所占的位置，默认2
  //   text: "JavaInterview", // 默认文案 “分类”
  // },
  // tag: {
  //   // location: 4, // 在导航栏菜单中所占的位置，默认3
  //   text: "Java", // 默认文案 “标签”
  // },
  // blogConfig: {
  //
  // },

  //
  // isShowReadTime: true, // 是否展示阅读时间
  // wordsPerMinute: 100, // 每分钟阅读的字数 默认是 300
  // isShowReadCount: true, // 是否开启阅读量统计
  // bodyBgImg: [
  //   // '/img/bg/1.jpg',
  //   // '/img/bg/2.jpg',
  //   // '/img/bg/4.jpg',
  //   // '/img/5.jpg',
  //   '/img/6.jpeg',
  //   // '/img/bg/bg7.jpg',
  // ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
  // bodyBgImgOpacity: 1, // body背景图透明度，选值 0 ~ 1.0, 默认0.5

  sidebar,

  // 页脚信息
  footer: {
    // 网站成立年份(若填入年份小于当前年份，则显示为 2018-2019 类似的格式)
    since: 2019,
    // 网站作者(关闭请设置为false)
    author: '<a href="https://yangchunjian.com" target="_blank">javainterview</a>',
    createYear: 2019, // 博客创建年份
    copyrightInfo: '<a href="https://JavaInterview.cn" target="_blank">JavaInterview.cn</a>', // 博客版权信息，支持a标签或换行标签</br>
    // 访问量统计功能(不蒜子)
    busuanzi: {
      // 是否启用(关闭请设置为false)
      enable: true
    }
  },
  // 博主信息 (显示在首页侧边栏)
  blogger: {
    // avatar: 'https://www.yangchunjian.com/imgs/dearlocation.jpeg',
    avatar: '/img/me/avatar-min.gif',
    // name: 'JavaInterview',
    slogan: '『Java面试+Java学习』',
  },

  social: {
    // 社交图标，显示于博主信息栏和页脚栏
    // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    icons: [
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/yangchunjian',
      },
      {
        iconClass: 'icon-youjian',
        title: '发邮件',
        link: 'mailto:1091938307@qq.com',
      },
      {
        iconClass: 'icon-rss',
        title: '订阅',
        link: 'https://javainterview.cn/rss.xml',
      },
    ],
  },
  // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
  extendFrontmatter: {
    author: {
      name: 'JavaInterview.cn', // 必需
      link: 'https://JavaInterview.cn', // 可选的
    },
    titleTag: 'Java',
  },
  htmlModules // 插入hmtl(广告)模块
}
