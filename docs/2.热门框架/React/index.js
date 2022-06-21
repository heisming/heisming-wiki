const reactRouter = require('./router')
const store = require('./store')

module.exports = {
  title: 'React',
  path: '/2.热门框架/React/',
  children: [
    {
      title: 'React-questions',
      path: '/2.热门框架/React-questions.md',
    },
    reactRouter,
    store,
  ]
}