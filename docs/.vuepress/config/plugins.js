// set your global feed options - override in page frontmatter `feed`
const feed_options = {
    canonical_base: 'https://javainterview.cn',
    count: 5000,
};

// 插件配置
module.exports = [
    // rss 配置
    [ 'feed', feed_options ],
    // 动态标题，官网：https://moefyit.github.io/moefy-vuepress/packages/dynamic-title.html
    [
        "dynamic-title",
        {
            showIcon:
                "https://javainterview.cn/assets/icon/logo_title50x50.png",
            showText: "欢迎回~",
            hideIcon:
                "https://javainterview.cn/assets/icon/logo_title50x50.png",
            hideText: "不要走~",
            recoverTime: 2000, //  持续时间
        },
    ],

    //一条线插件
    // ["ribbon-animation", {
    //     size: 90,   // 默认数据
    //     opacity: 0.3,  //  透明度
    //     zIndex: -1,   //  层级
    //     opt: {
    //         // 色带HSL饱和度
    //         colorSaturation: "80%",
    //         // 色带HSL亮度量
    //         colorBrightness: "60%",
    //         // 带状颜色不透明度
    //         colorAlpha: 0.65,
    //         // 在HSL颜色空间中循环显示颜色的速度有多快
    //         colorCycleSpeed: 6,
    //         // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
    //         verticalPosition: "center",
    //         // 到达屏幕另一侧的速度有多快
    //         horizontalSpeed: 200,
    //         // 在任何给定时间，屏幕上会保留多少条带
    //         ribbonCount: 2,
    //         // 添加笔划以及色带填充颜色
    //         strokeSize: 0,
    //         // 通过页面滚动上的因子垂直移动色带
    //         parallaxAmount: -0.5,
    //         // 随着时间的推移，为每个功能区添加动画效果
    //         animateSections: true
    //     },
    //     ribbonShow: false, //  点击彩带  true显示  false为不显示
    //     ribbonAnimationShow: true  // 滑动彩带
    // }],

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
    //pdf预览
    // ['vuepress-plugin-pdfjs'],
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
    // [
    //     'vuepress-plugin-comment',
    //     {
    //         choosen: 'valine',
    //         // options选项中的所有参数，会传给Valine的配置
    //         options: {
    //             el: '#valine-vuepress-comment',
    //             appId: '5buJqOd3oGvBI3ccC5N5tPIN-gzGzoHsz',
    //             appKey: 'OyUWJytBypOoxyxyPMsTCygT'
    //         }
    //     }
    // ],

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
    // [
    //     '@vuepress/last-updated', // "上次更新"时间格式
    //     {
    //         transformer: (timestamp, lang) => {
    //             const dayjs = require('dayjs'); // https://day.js.org/
    //             // return dayjs(timestamp).format('YYYY/MM/DD, HH:mm') //中国时间
    //             var utc = require('dayjs/plugin/utc');
    //             var timezone = require('dayjs/plugin/timezone'); // dependent on utc plugin
    //             dayjs.extend(utc);
    //             dayjs.extend(timezone);
    //             // var nowTime = dayjs(timestamp).format('YYYY-MM-DD HH:mm');
    //             return dayjs(timestamp).tz('Asia/Shanghai').format("YYYY-MM-DD HH:mm");
    //         },
    //     },
    // ],

]
