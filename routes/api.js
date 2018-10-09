var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var retoken = require('../routes/retoken');
var models = require('../db/db');
var mysql = require('mysql');
var $sql = require('../db/sqlMap');

/**
 * 所有路由都要进行头部判断 代理跨域 
 */
 router.all('*', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Request-Headers:content-type,xfilecategory,xfilename,xfilesize");
  res.header("X-Powered-By",' 3.2.1')
  if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
  else  next();
 })

/**
 * 创建数据库并连接数据库
 */
var conn = mysql.createConnection(models.mysql);
conn.connect();
console.log("connect to mysql is success");



var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
      res.send('err');
  } else {
      console.log(ret);
      res.send(ret);
  }
}
/**
 * 
 * @param {*} str 
 */
var dateStr = function (str) {
  return new Date(str.slice(0, 7));
}

/**
 * 注册接口
 * 路由判断 增加用户接口
 */
router.post('/addUser', (req, res) => {
  var sql = $sql.user.add;
  var params = req.body;
  console.log(params);
  console.log(params.birth);
  conn.query(sql, [params.name, params.account, params.pass, params.checkPass,
    params.email, params.phone, params.card, dateStr(params.birth), params.sex
  ], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});



/**
 * 登录接口
 * 路由判断 查找用户接口
 */
router.post('/login', (req, res) => {
  var sql_name = $sql.user.select_name;
  var params = req.body;
  var keywords = JSON.parse(Object.keys(params)[0]);

  //查询数据库username
  conn.query(sql_name, [keywords.name], function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log("result:", result);
    /**
     * 账户不存在
     */
    if (result[0] === undefined) {
      console.log("-1");

      return res.json({
        data: -1

      }) //查询不出username，data 返回-1
    } else {

      /**
       * 判断登录密码
       */
      let result_password = result[0].password;
      let keywords_passeord = keywords.password;
      // console.log("result.password:", result[0].password);
      // console.log("keywords.password:", keywords.password);
      if (result_password == keywords_passeord) {
        console.log("2");
        return res.json({
          code: 200,
          data: 200
        })

      } else {
        /**
         * 密码错误
         */
        console.log("0");
        return res.json({
          data: 0
        })
      }
    }


    //   conn.query(sql_password, [keywords.password], function(err, result) {
    //         if(err){
    //           console.log(err);
    //         }

    //         /**
    //          * 密码错误
    //         */
    //         if(result[0] === undefined){
    //           return res.json({
    //             data: 0
    //            })  //查询不出password，data 返回0
    //         }else{
    //           console.log("result:",result);
    //           return res.json({
    //             code: 200,
    //             data: 200
    //            })
    //         }      
    // })

    //  if(result !== undefined){

    //     console.log("result:",result);
    //     return res.json({
    //       code: 200,
    //       data: 200
    //      })
    //   } else if(result[0] ===undefined){
    //     res.send('-1')   //查询不出username，data 返回-1
    //   }
    //   console.log("result:",result);

    //   if (result[0] === undefined) {
    //       res.send('-1')   //查询不出username，data 返回-1
    //   } else {

    //       var resultArray = result[0];
    //       console.log(resultArray);
    //       console.log(keywords);
    //       // if(resultArray.password === keywords.password) {
    // jsonWrite(res, result);


    //       // } else {
    //       //     res.send('0')   //username
    //       // }
    // }

  })
});


/**
 * 获取接口
 * 获取用户信息接口
 */
router.get('/getUser', (req, res) => {
  var sql_name = $sql.user.select_name;
  // var sql_password = $sql.user.select_password;
  var params = req.body;
  console.log(params);
  if (params.name) {
    sql_name += "where username ='" + params.name + "'";
  }
  conn.query(sql_name, params.name, function (err, result) {
    if (err) {
      console.log(err);
    }
    // console.log(result);
    if (result[0] === undefined) {
      res.send('-1') //查询不出username，data 返回-1
    } else {
      jsonWrite(res, result);
    }
  })
})


/**
 * 修改用户数据接口
 * 更新用户信息接口
 */
router.post('/updateUser', (req, res) => {
  var sql_update = $sql.user.update_user;
  var params = req.body;
  console.log(params);
  if (params.id) {
    sql_update += " email = '" + params.email +
      "',phone = '" + params.phone +
      "',card = '" + params.card +
      "',birth = '" + params.birth +
      "',sex = '" + params.sex +
      "' where id ='" + params.id + "'";
  }
  conn.query(sql_update, params.id, function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log(result);
    if (result.affectedRows === undefined) {
      res.send('更新失败，请联系管理员') //查询不出username，data 返回-1
    } else {
      res.send('ok');
    }
  })
});

/**
 * 更改密码接口
 */
router.post('/modifyPassword', (req, res) => {
  var sql_modify = $sql.user.update_user;
  var params = req.body;
  console.log(params);
  if (params.username) {
    sql_modify += " password = '" + params.pass +
      "',repeatPass = '" + params.checkPass +
      "' where username ='" + params.username + "'";
  }
  conn.query(sql_modify, params.username, function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log(result);
    if (result.affectedRows === undefined) {
      res.send('修改密码失败，请联系管理员') //查询不出username，data 返回-1
    } else {
      res.send('ok');
    }
  })
});


module.exports = router;


//   //添加token验证
//   router.use(retoken);

// //实现注册
// router.use('/registered',(req,res,next) => {

// })


//   //实现登录
// router.use('/login', (req, res, next) => {


//   var req = req ;
//   var  name=req.body.username;
//   var pwd=req.body.password;
//   console.log("name:", name, "pwd:", pwd);

//  var select_mysql =function(callback){ 
//     //查询数据库中用户名和账户是否相等
//      var selectSQL = "select * from user where username = '"+name+"' and password = '"+pwd+"'";
//    var  mysql_result ;
//     connection.query(selectSQL, (err,rs) =>{
//       if(err){

//       throw err;

//        }else{
//        mysql_result = 1;
//          console.log("mysql_result");
//          console.log(mysql_result);

//        }
//        } )
//        if(result===1){




//         }

// return mysql_result ;

//  }

//    var result = select_mysql();
//   console.log(result);

//    //设置个人信息
//    const userToken = {
//     name: '1',
//     loginAt: +new Date
//    }
//     //签发token 指定过期时间2h
//     const token = jwt.sign(userToken, 'liu', { expiresIn: '2h' });
//     console.log(token);
//     console.log('OK');
//   res.json({
//       code: 200,
//       data: token
//      })

// })

// router.use('/index', (req, res, next) => {
//     res.json({
//         code: 200,
//         data: 'henhao'
//     })
// })
// //路由


// router.use('/user',indexController)