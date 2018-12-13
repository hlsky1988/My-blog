var { db } = require('./initMDB');
require('./model');

// db.tags.find(function (err, result) {
//   console.log(err + '\n tags');
//   console.log(result)
// })
// db.titles.find({path:'/'},function (err, result) {
//   console.log(err + '\n titles');
//   console.log(result[0].title)
// })
// db.navtops.find(function (err, result) {
//   console.log(err + '\n navtops');
//   console.log(result)
// })
// db.friendlinks.find(function (err, result) {
//   console.log(err + '\n friendlinks');
//   console.log(result)
// })
// db.contents.find(function (err, result) {
//   console.log(err + '\n contents');
//   console.log(result)
// })


module.exports = db