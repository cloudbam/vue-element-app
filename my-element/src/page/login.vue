<template>
<div id="login_page">
  
  <div class="page">
    	<section class="form_contianer" v-show="showLogin">
    <el-main>
 <el-form ref="loginForm"  :rules="rules" :model="loginForm" label-width="80px" class="loginForm">

   <!--账号-->  
  <el-form-item label="账号" prop="username">
     <span class="fa-tips"><i class="fa fa-user"></i></span>
    <el-input placeholder="用户名" v-model="loginForm.username"></el-input>
  </el-form-item>

  <!--密码-->
   <el-form-item label="密码" prop="password">
      <span class="fa-tips"><i class="fa fa-lock"></i></span>
    <el-input placeholder="密码" v-model="loginForm.password"></el-input>
  </el-form-item>

  <el-form-item class="but">
    <el-button type="primary" @click="onSubmit('loginForm')">登录</el-button>
    <el-button type="primary" @click="onRegistered()">注册</el-button>
  </el-form-item>
  <div class="tiparea">
						<p class="wxtip">温馨提示：</p>
						<p class="tip">未登录过的新用户，自动注册</p>
						<p class="tip">注册过的用户可凭账号密码登录</p>
					</div>
</el-form>
    </el-main>
    	</section>
</div>

  </div>
</template>

<script>

	import * as mUtils from '../utils/mUtils.js'

  export default {
    data() {
      return {
       loginForm: {
					username: '',
					password: ''
        },
        rules:{
          uesername:[
              {required:true,message:'请输入用户名',  trigger:'blur'},
              {min:2,max:8,message:'长度在2到8个字母', trigger:'blur'}
          ],
          password:[
            {required:true,message:'请输入密码',trigger:'blur'}
          ]
        },
        showLogin:false,
        ip:'',
        
      }
    },
    //生命周期的mouted  在页面初始化的时候
    mounted() {
      this.showLogin=true;
      // this.getip();  //在页面初始化的时候，就去获取公网ip
    },

    // 生命周期 computed
    computed:{

    },
    methods: {
      
      //显示信息
      showMessage(type,message){
        this.$message({
          type:type,
          message:message
        });
      },
 

      //保存用户信息到缓存
       saveUserInfo(){
        const  userinfo ={
               username:this.loginForm.username,
               password:this.loginForm.password
        }
        console.log(userinfo.username,userinfo.password);
        
        mUtils.setStore('userinfo',userinfo)
       },


       //登录按键触发事件
      onSubmit(loginForm) {
        console.log('submit!');
      /**
       * 测试localstronge 缓存
      */
            this.saveUserInfo();



        this.$refs[loginForm].validate((valid) => {
          if(valid){
             alert('submit!');
            //用户登录的接口
            let userinfo =this.loginForm;
            let data = {
              ip:this.ip,
              url:''
            }
            let userData =Object.assign(userinfo ,data);

            /***
             * sxios 登录验证暂时未运行
            */

            // axios({
            //   type:'get',
            //   path:'/api/user/login',
            //   data:userData,
            //   fn:data=>{
            //     console.log(data);
            //     if(data.status ==1){
            //       this.saveUserInfo() //存入缓存 ，用于于显示用户名
            //       	// this.generateMenuPushIndex() //模拟动态生成菜单并定位到index
            //     //  this.$store.dispatch('initleftMenu');  //设置左边菜单始终未展开状态
            //     }else {
            //       this.$message.error('登录失败请重试')
            //     }
                
            //   }
            // })
          } else {
            this.$notify.error({
              title:'错误',
              message:'请输入正确的用户名密码',
              offset:100
            });
            return false;
          }
        })
      }
    }
  }
</script>

<style  lang="scss" rel="stylesheet/scss" >
  .page{
    // background-color: aqua;
      position:relative;
      left: 45rem;
      top:18.75rem;
      height: 300px;
      width: 300px; 
  }



	.form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
  }
  .loginForm {

    .but{
      position:absolute;
      left: 1.25rem;
    }
  }
  .tiparea{
    text-align:left;
    margin-top:80px;
    margin-left: 40px; 
		font-size: 6px;
		color: #4cbb15;
		.tip{
			margin-left: 54px;
		}
	}
  
  

</style>



