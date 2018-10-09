var  express =require('express'); 
var  indexMode = require('../models');
let router = express.Router()




/**
 * 控制路由
 * **/
router
  .get('/', (req, res, next) => {
    indexMode.getData(function (data) {
      res.json(data)
    })
  })
  // .post('/login',(req,res,next) =>{
  //   var req = req ;
  //   var  name=req.query.username;
  //   var pwd=req.query.password;
  //   console.log("name:", name, "pwd:", pwd);
  // })
  .put('/', (req, res, next) => {
    res.json({
      code:200,
      data: 'put'
    })
  })

module.exports =  router