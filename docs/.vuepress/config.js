const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
    theme: 'vdoing', // 使用依赖包主题
    // theme: require.resolve('../../theme-vdoing'), // 使用本地主题
    title: "JavaInterview",
    description: 'java,面试,春建,杨春建,后端,JavaInterview,interview,技术',
    //base: '/JavaInterview/', // 格式：'/<仓库名>/'， 默认'/'
    markdown: {
        lineNumbers: true, // 代码行号
    },

    head,
    plugins,
    themeConfig,
}
