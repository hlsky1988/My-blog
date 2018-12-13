const db = require('../mongoDB')

async function titleInit(config) {
  var result = await db.titles.findOne({ path: '/' })
  config.env.title = result.title
  for (let i = 0; i < config.head.meta.length; i++) {
    if (config.head.meta[i].name == 'description') {
      config.head.meta[i].content = result.title
    }
  }
}

async function tagsInit(config) {
  var result = await db.tags.find()
  var tagsArr = []
  for (let i = 0; i < result.length; i++) {
    tagsArr.push(result[i].name)
  }
  config.env.tags = tagsArr
}

async function navtopInit(config) {
  var result = await db.navtops.find()
  config.env.navtop = result
}
async function friendlinkInit(config) {
  var result = await db.friendlinks.find()
  config.env.friendlink = result
}

module.exports = { titleInit, tagsInit, navtopInit, friendlinkInit }
