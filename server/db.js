const mongoose = require('mongoose');
/**
 * 处理 mongoose 关于 URL字符串的警告 , 貌似单服务器没什么用
 * site: https://github.com/Automattic/mongoose/issues/6667
 */
const config = {
    autoIndex: false,
    useNewUrlParser: true,
  };
mongoose.connect('mongodb://127.0.0.1:27017/blog',config);
const con = mongoose.connection;
con.on('error', (err)=>console.error('连接数据库失败 ' + err));
con.once('open',()=>{
    console.log('mongoose 成功连接');
})