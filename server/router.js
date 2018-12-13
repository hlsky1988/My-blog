var Router = require('koa-router')
var db = require('./mongoDB')
var router = new Router({
  prefix: '/api'
})

router.get('/', async (ctx, next) => {
  await db.navtops.find(function(err, result) {
    // console.log(err + '\n navtops')
    // console.log(result)
    ctx.body = result
  })
  // ctx.body = 'api test'
  // console.log(ctx);
  // next();
})

module.exports = router
