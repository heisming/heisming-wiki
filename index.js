const wiki = require('./docs/0.wiki');
const language = require('./docs/1.编程语言');
const frame = require('./docs/2.热门框架');

const sidebar = [
  wiki,
  language,
  frame
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
