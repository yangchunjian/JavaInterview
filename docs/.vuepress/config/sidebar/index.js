const java = require('./java');
const interview = require('./interview');
const algorithm = require('./algorithm');

module.exports = [
    {title: '指南', path: '/read/read'},
    {title: '简历', children: ["/resume/core", "/resume/sample"]},
    ...java,
    ...interview,
    // 其他大类可继续拆分
    ...algorithm,
    // 其他未分类的 sidebar 配置可继续补充
]; 