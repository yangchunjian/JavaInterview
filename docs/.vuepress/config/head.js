// head
module.exports = [

  [
    'script', {}, `
        (function() {
             if (location.href.indexOf('docbox') > -1) {
                   location.href = 'https://yangchunjian.com'
           }
        })();
        `
  ],
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/assets/icon/logo_title50x50.png' }], //favicons，资源放在public文件夹
  // ['link', { rel: 'stylesheet', href: 'https://unpkg.com/mssui@0.1.13/lib/theme-chalk/index.css' }],
  [
    'meta',
    {
      name: 'keywords',
      content: 'java,面试,春建,杨春建,后端,JavaInterview,interview,技术,后端博客,个人技术博客,后端,后端开发,后端框架,web前端,后端面试题,技术文档,学习,面试,Spring,Kafka,MySQL,MQ,Redis,Elasticsearch,git,github,markdown',
    },
  ],
  ['meta', {name: 'referrer', content: 'no-referrer-when-downgrade'}], // 不蒜子统计
  ['meta', {name: 'baidu-site-verification', content: 'code-dbbt0zdlBh'}],// 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  // [
  //   'script',
  //   {
  //     'data-ad-client': 'ca-pub-7828333725993554',
  //     async: 'async',
  //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
  //   },
  // ], // 网站关联Google AdSense 与 html格式广告支持
  // ['script', { src: 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.min.js' }],
  // ['script', { src: 'https://unpkg.com/mssui@0.1.17/lib/index.js' }]
  ['script', {}, `
            var _hmt = _hmt || [];
            (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?03cb08758bea6323509b897a0e0442df";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);

            })();
  `],
  //重定向
  // [
  //   'script', {}, `
  //       (function() {
	//          if (location.href.indexOf('yangchunjian.com') > -1 || location.href.indexOf('yangchunjian.com') > -1) {
  //          		location.href = 'https://yangchunjian.com'
  //          }
  //       })();
  //       `
  // ]

]
