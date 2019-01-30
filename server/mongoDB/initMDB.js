const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const { Schema, model } = require('mongoose')
var db = {}
/**
 * 处理 mongoose 关于 URL字符串的警告 , 貌似单服务器没什么用
 * site: https://github.com/Automattic/mongoose/issues/6667
 */
const config = {
  // autoIndex: false,
  useNewUrlParser: true
}

// mongoose.connect( 'mongodb://localhost:27017/blog', config )
let db_host = process.env.NODE_ENV == "development" ? 'aming660.cn' : 'localhost'
let db_user = 'hlsky1988'
let db_passw = 'sldunkesam1988'
let db_port = 27017
let db_name = 'blog'

let db_url = `mongodb://${db_user}:${db_passw}@${db_host}:${db_port}/${db_name}?authSource=admin`
mongoose.connect(db_url, config)
mongoose.connection.on('error', err => console.error('连接数据库失败 ' + err))
mongoose.connection.once('open', () => { console.log('mongoose 成功连接') })

/**
 * @name fn creatModel ( str,ob )
 * @param { 数据库集合名,必须带 s } str 
 * @param { Schema配置对象 } ob
 */
function creatModel(str, ob) {
  const schema = new Schema(ob)
  // db[str] = model(collectionsName(str), schema)
  db[str] = model(str, schema)
}

// function collectionsName(str) {
//   var tmp = str.replace(/s$/, '')
//   return tmp
// }

module.exports = { db,creatModel }