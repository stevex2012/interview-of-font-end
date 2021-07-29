const fs = require('fs')
const path = require('path')
const dirList = [
  'html',
  'css',
  'BOM',
  'DOM',
  'js',
  'es6',
  'react',
  'webpack',
  'vite',
  'node',
  'less',
  'codestyle/eslint/pretter',
  'browser（浏览器）',
  '组件库',
  '脚手架（cli）',
  'ci/cd',
  'hmr/tree shaking',
  '算法',
  '设计模式',
  '网络协议（http/tcp）',
  '前端性能优化（强/协商缓冲）',
  '前端模块历史',
]

function createDirs(list){
  if(Array.isArray(list)){
    list.forEach(dirName => {
      fs.mkdir(path.resolve(__dirname, `/${dirName}`), (err) => {
        if(err){
          console.log('fail: create dir error', err)
        }
      })
      // .then()
      // .catch( => console.log('fail: create dir error', err))
    })
  }
}
// createDirs(dirList)

fs.mkdir(`/a/`, (err) => {
  if(err) throw err
})


