const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const router = require('../server/router')
// var cors = require('koa-cors');  // 跨域处理
const {
  titleInit,
  tagsInit,
  navtopInit,
  friendlinkInit
} = require('./controller/blogInit')

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

Promise.all([
  titleInit(config),
  tagsInit(config),
  navtopInit(config),
  friendlinkInit(config)
]).then(function() {
  // console.log(config.env)
  console.log('blog 数据初始化完成...')
  start()
})

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(router.routes())
  // 解决跨域问题
  // app.use(cors());

  app.use(async (ctx, next) => {
    await next()
    // console.log(`${ctx.method} ${ctx.url}`);
  })

  app.use(async (ctx, next) => {
    // await next()
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
