var { creatModel } = require('./initMDB')
/**
 * @name fn creatModel ( str,ob )
 * @param { 数据库集合名,必须带 s } str
 * @param { Schema配置对象 } ob
 */

creatModel('tags', {
  name: String,
  type: Number,
  path: String
})

creatModel('titles', { title: String, path: String })

creatModel('navtops', {
  name: String,
  link: String
})

creatModel('friendlinks', {
  name: String,
  link: String
})

creatModel('contents', {
  type: String,
  title: String,
  date: {
    type: Number,
    default: Date.now
  },
  tags: Array,
  browse: Number,
  markdown: String,
  html: String,
  brief: String
})

creatModel('page', {
  pageSize: Number
})

creatModel('icps', { icp:String })
