const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const router = require('../server/router')
const cors = require('koa-cors');  // 跨域处理
const bodyParser = require('koa-bodyparser')
const requestIp = require('request-ip')

const app = new Koa()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

start()
app.listen(port, host)
consola.ready({
  message: `Server listening on http://${host}:${port}`,
  badge: true
})

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // 解决跨域问题
  app.use(cors());
  app.use(bodyParser())
  app.use(router.routes())
  app.use(require('koa-static')(__dirname + '/static'))

  app.use(async (ctx, next) => {
    await next()
    let ip = requestIp.getClientIp(ctx.request);
    // 显示接口请求，不显示资源请求
    if (!/\.([a-z]+$)$/i.test(ctx.url)) {
      // console.log(`${ctx.method} ${ctx.ip} ${ctx.url}\n`)
      console.log(`${ctx.method} ${ip} ${ctx.url}\n`)
    }
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
}
