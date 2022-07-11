const wiki = require('./docs/0.wiki');
const language = require('./docs/1.编程语言');
const frame = require('./docs/2.热门框架');
const serverCommunication = require('./docs/3.服务通信');
const OSSLicense = require('./docs/4.一些标准');
const _2d = require('./docs/5.2D图形');
const _3d = require('./docs/6.3D图形');
const softSkill = require('./docs/7.软技能')
const design = require('./docs/8.编程思想')
const nodejs = require('./docs/9.Node.js')
const codeStyle = require('./docs/10.代码规范')
const javascriptAlgorithms = require('./docs/11.数据算法')
const interview = require('./docs/13.面试宝典')
const performanceOptimization = require('./docs/14.性能优化')
const book = require('./docs/15.还有书籍')
const npm = require('./docs/16.库')

const sidebar = [
  wiki,
  language,
  frame,
  serverCommunication,
  OSSLicense,
  _2d,
  _3d,
  softSkill,
  design,
  nodejs,
  codeStyle,
  javascriptAlgorithms,
  interview,
  performanceOptimization,
  book,
  npm
];

const tail = path => {
  if (path.endsWith('/')) return `(${path + 'README.md'})`;
  if (path.endsWith('.md')) return `(${path})`;
  return `(${path + '.md'})`;
};

const recursion = (level, list, result) => {
  for (const item of list) {
    const content = [...new Array(level).keys()].map(i => '  ').join('') + `- ${item.path ? '[' + item.title + ']' + tail(item.path) : item.title}`;
    result.push(content);
    if (item.children?.length) recursion(level + 1, item.children, result);
  }
};

const result = [];
recursion(0, sidebar, result);

const fs = require('fs');
fs.writeFile('./docs/_sidebar.md', result.join('\n'), error => {
  if (error) return console.log('菜单栏文件生成失败,原因是' + error.message);
  console.log('菜单栏文件生成成功！');
});
