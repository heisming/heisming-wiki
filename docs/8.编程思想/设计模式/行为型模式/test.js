const readline = require('readline')
const fs = require('fs')
const rl = readline.createInterface({
  input: fs.createReadStream('./README.md')
})
// 文件有多少行
let lineNum = 0
rl.on('line', function(line) {
  lineNum++
})
rl.on('close', function() {
  console.log('lineNum', lineNum)
})