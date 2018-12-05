var Router = require('koa-router');
var router = new Router({
  prefix: '/api'
});

router.get('/',(ctx, next) => {
  ctx.body = 'api test';
  // console.log(ctx);
  // next();
})

module.exports = router;