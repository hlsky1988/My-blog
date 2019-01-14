const { ctx } = require('koa')
const db = require('../../mongoDB')

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
  ctx.body = { code: 200, result, total ,pageSize:pageSize.pageSize }
}

exports.content = async (ctx) => {
  // console.log(ctx.query.id);
  let content = await db.contents.findOne({ _id: ctx.query.id })
  content.browse = content.browse + 1
  content.save()
  ctx.body = content
}