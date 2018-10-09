// var jwt    =require('jsonwebtoken');


// /**
//  * 登录接口不需要验证 直接next 
//  * 判断 method类型 并且是包含path 
//  * **/
    
//     var unLogin= {
//       get: [
//         '/index',
//         '/user'
//       ],
//       post: [
//         '/login'
//       ],
//       put: [],
//       delete: [],
//     }

// /**
//  * 验证 api 的 token
//  * ***/

//  function token (req,res,next){
     
//     //api的类型
//     let method = req.method.toLowerCase();
//     console.log(method);
    
//     //pai的路径
//     let path =req.path
//     console.log(path);
    
       
//     if(unLogin[method] && unLogin[method].indexOf(path) !== -1){
//         console.log("login不需要验证token");
//           next()
//     }

//     //获取返回数据的头部
//     const token = req.header.authorization
//     console.log(token);
//     //没有token值，直接返回401
//     if(token) {
//       return res.json({
//         code:401,
//         msg:'you need login :there is no token'
//       })
//     }

//     //有token 验证
//     jwt.verify(token, 'liu', (err,decoded) => {
//       console.log('有token的api这边已经开始验证了');
//           if(err) {
//             return res.json({
//               code:401,
//               msg:err.msg
//             })
//           }else {
//             //将携带的信息赋值给相关路由 例如 user
//             req.user = decoded
//             return next();
//           }
      
//     })
//    }


//    module.exports =  token ;
 