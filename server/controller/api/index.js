const { ctx } = require('koa')
const db = require('../../mongoDB')
const requestIp = require('request-ip')
const crypto = require('crypto');
const axios = require('axios')


exports.init = async (ctx) => {
  let navtops, friendlinks, tagArr, titleO, title, tags,icps,icp
  Promise.all([
    navtops = await db.navtops.find(),
    friendlinks = await db.friendlinks.find(),
    tagArr = await db.tags.find(),
    titleO = await db.titles.findOne({ path: '/' }),
    icps = await db.icps.findOne({ _id: '5c514bfefc3ec336487cf232' })
  ]).then(() => {
    title = titleO.title
    icp = icps.icp
    tags = []
    for (let i = 0; i < tagArr.length; i++) {
      let tmp = {}
      tmp.name = tagArr[i].name
      tmp.type = i % 5
      tmp.path = tagArr[i].path
      tags.push(tmp)
    }
    ctx.body = { title, tags, navtops, friendlinks, icp }
  })
}
exports.list = async (ctx) => {
  let param = {
    "type": "$type",
    "title": "$title",
    "date": "$date",
    "tags": "$tags",
    "browse": "$browse",
    "brief": "$brief"
  };
  let query
  let tags = await db.tags.findOne({ name: ctx.query.type })
  if (!tags) {
    query = ctx.query.type ? {type:ctx.query.type}:{}
  } else {
    query = {tags:ctx.query.type}
  }
  let page = ctx.query.page ? ctx.query.page : 1
  let pageSize = await db.page.findOne({ _id: '5c35a29b2af4d7b7766c5b72' });
  let result = await db.contents.find(query, param).limit(pageSize.pageSize).skip((page - 1) * pageSize.pageSize).sort({ date: -1 });
  let total = await db.contents.countDocuments(query);
  ctx.body = { result, total ,pageSize:pageSize.pageSize }
}
exports.content = async (ctx) => {
  let content = await db.contents.findOne({ _id: ctx.query.id })
  content.browse = content.browse + 1
  content.save()
  ctx.body = content
}
exports.verCode = async function(ctx) {
  console.log(ctx.request.body);
  let name = ctx.request.body.name
  let user = await db.user.findOne({ name })
  if (!user) {
    ctx.body = {
      code: 401,
      message:'用户名输入错误'
    }
    return
  }
  let time = new Date().getTime()
  if (time-user.time < 1000*60*5) {
    ctx.body = {
      code: 401,
      message:`验证码已发送，有效期剩余：${Math.floor(300-(time - user.time)/1000)}秒`
    }
    return
  }
  let ip = requestIp.getClientIp(ctx.request); 
  let md5 = crypto.createHash('md5');
  let md5Str = md5.update(`${time}:${name}`).digest('hex');
  let verCode = md5Str.slice(0,8)
  user.verCode = verCode
  user.time = time
  user.ip = ip
  user.token = md5Str
  user.save()

  let url = encodeURI(`${user.push}?text=登录验证&desp= - 登录验证码:${verCode} \n - 5分钟内有效`)
  // axios.get(url)
  console.log(`验证码推送成功: 当前验证码为 ${verCode}`);
  ctx.body = { code: 200, verCode }
}
exports.login = async function(ctx) {
  
  ctx.body = { code: 200 }
}