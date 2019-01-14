# my-blog

> my-blog-vue-ssr

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

[Nuxt.js 中文文档](https://zh.nuxtjs.org/guide/installation).

## 部署说明
- [参考资料](https://segmentfault.com/a/1190000014450967)
- 如需修改端口,在 package.json scripts 中添加 PORT=8080
- build 打包后,将一下文件上传到服务器
```json
.nuxt
static
nuxt.config.js
package.json
```
- npm install 安装依赖
- npm start
### pm2守护
`pm2 start npm --name "blog-ssr" -- run start`

## centos7 部署数据库 及授权连接
https://www.jianshu.com/p/994bc7b19b26


## 关于隐私政策
- 国内的网络环境应该是无所谓的,不过看到有人说还是加上比较好,这方面只会越来越严格,所以找了一个网站的英语版本做参考
- 这个网站也是比较有意思的 [remove.bg](https://www.remove.bg) 上不去请挂梯子
`By using this website, you agree to the use of cookies. Details on how we use cookies can be found in our Privacy Policy`
- [Privacy Policy](https://www.remove.bg/privacy)
