var mysql = require('mysql'); //调用MySQL模块

//创建一个connection
var connection = mysql.createConnection({
    host: 'localhost', //主机
    user: 'root', //MySQL认证用户名
    password: '',
    port: '',
    database: 'tenseven'
});

//创建一个connection
connection.connect(function(err) {
    if(err) {
        console.log('[query] - :' + err);
        return;
    }
    console.log('[connection connect]  succeed!');

});


查询数据库
//var  sql = 'SELECT * FROM user';
////查
//var res = "";
//connection.query(sql,function (err, result) {
//      if(err){
//        console.log('[SELECT ERROR] - ',err.message);
//        return;
//      }
//      res = result;
//      return res;
//     console.log('--------------------------SELECT----------------------------');
//     console.log(result);
//     console.log('------------------------------------------------------------\n\n');  
//});
// 
//connection.end();