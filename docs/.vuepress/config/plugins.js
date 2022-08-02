// 插件配置
module.exports = [
  //一条线插件
  [
    'ribbon',
    {
      size: 90, // width of the ribbon, default: 90
      opacity: 0.8, // opacity of the ribbon, default: 0.3
      zIndex: -1, // z-index property of the background, default: -1
    },
  ],
  // 本地插件
  // [require('../plugins/read')], // 阅读时间插件
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
  // ['@vuepress/medium-zoom'],//图片缩放
  // 阅读时间插件
  ['vuepress-plugin-reading-time'],
  //   [
  //   "reading-time1",
  //   {
  //     // your options
  //   },
  // ],
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
  ],
  //分享
  ['social-share', {
    networks: ['qq', 'weibo', 'douban', 'wechat', 'email'],
    email: '1091938307@qq.com',
    fallbackImage: 'https://javainterview.cn/assets/icon/logo200x100.png',
    autoQuote: true,
    isPlain: false,
    icon: 'https://javainterview.cn/assets/icon/logo200x100.png',
  }],
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],

]
