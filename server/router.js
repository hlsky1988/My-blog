var Router = require('koa-router')
var router = new Router({
  prefix: '/api'
})

var controller = require('./controller/api')

router.get('/init', controller.init)
router.get('/list', controller.list)
router.get('/content', controller.content)



module.exports = router
