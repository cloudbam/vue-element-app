<!-- leftmenu -->
<template>
<div class=" left-menu">
<el-row class="tac">
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>

      </el-menu-item>
  <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <span slot="title">用户列表</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">信息列表</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>邮件管理</span>
        </template>
        <el-menu-item-group >
          <el-menu-item index="4-1">个人信息</el-menu-item>
          <el-menu-item index="4-2">修改信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
        <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>资金管理</span>
        </template>
        <el-menu-item-group >
          <el-menu-item index="5-1">资金流水</el-menu-item>
          <el-menu-item index="5-2">支付单据</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
        <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>投资管理</span>
        </template>
        <el-menu-item-group >
          <el-menu-item index="6-1">省份投资</el-menu-item>
          <el-menu-item index="6-2">区域投资</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

        <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>外贸文章</span>
        </template>
        <el-menu-item-group >
          <el-menu-item index="7-1">发布文章</el-menu-item>
          <el-menu-item index="7-2">编辑文章</el-menu-item>
             <el-menu-item index="7-3">查看文章</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

        <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>财务数据</span>
        </template>
        <el-menu-item-group  class="_group">
          <el-menu-item index="8-1">投资分布</el-menu-item>
          <el-menu-item index="8-2">项目分布</el-menu-item>
           <el-menu-item index="8-3">收支统计</el-menu-item>
        </el-menu-item-group>
     
      </el-submenu>
     
    </el-menu>
  </el-col>
</el-row>
</div>
</template>
<style>
.left.menu{
    
}
  .el-menu-vertical-demo:not(.el-menu--collapse) {
   position: relative;
   top:63px;
   left: -20px;
    width: 200px;
    float: left;
    min-height:650px;

  }
 .el-menu-vertical-demo > el-menu-item-group {
      max-width: 50px;
  }
 ._group el-menu-item {
       min-width: 50px;
  }
  
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>




























// <!--  -->
// <!--状态管理的store进行-->
// <!--:collapse="$store.state.menu.isCollapse"-->
<!--
<template>
<div class="left">
<el-row class="menu_page">
    <el-col>
        <el-menu 
            mode='vertical'
            theme='dark'
            class="el-menu-v
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            artical-demo"
            :default-active="$route.path"
            :collapse="$store.state.menu.isCollapse"
             background-color="#324057"
             text-color="#fff"
             active-text-color="#42b983">
             <template v-for="(item, index) in $store.state.menu.items" 
                          v-if='item.hidden !== true'>
                <el-submenu v-if="item.chilren && !item.noDropDown >0"   :index="item.path">
                  <template slot="title">
                      <i :class="'fa fa-margin' +item.icon"></i>
                      <span slot="title">{{item.name}}</span>
                  </template>
                 
                  <router-link v-for="(citem,cindex) in item.children" :to="citem.path"  :key="citem.path">
                  <el-menu-item 
                      :index='citem.path'>
                      <span slot="title">{{citem.name}}</span>
                  </el-menu-item>
                 </router-link>
                 </el-submenu>
                 
                 <router-link :to="item.path">
                   <el-submenu class="dropItem" v-if="item.children && item.noDropdown && item.children.length > 0"  :index="item.path">
                   <template slot="title">
                     <i :class="'fa fa-margin '+item.icon"  @mouseover="showDropdown"></i>
                     <span :class="{'hiddenDropname':$store.state.menu.isDropname}"  slot="title">{{item.name}}</span> 
                   </template>

                   <router-link :to="item.path">
                       <el-menu-item
                            :index='item.children[0].path'
                            :class="{'hiddenDropdown':! $store.state.menu.isDropname}">
                          <span slot="tilte">{{item.children[0].name}}</span>
                       </el-menu-item>
                   </router-link>
                   </el-submenu>
                 </router-link>
             </template>     
        </el-menu>
    </el-col>
    </el-row>                                                                       
    </div>
</template>

<script>-->
// export default {
//   data () {
//     return {
//         isDropdown:false,
//     };
//   },
//   methods :{
//       showDropdown (){
//           this.isDropdown=this.$store.state.menu.isCollapse;
//       },
      
//   }

// //   components: {},

// //   computed: {},

// //   mounted: {},

// //   methods: {}
// }

// </script>
// <style  lang='scss' rel='stylesheet/scss'>
// .menu_page{
// 		position: fixed;
// 		top:71px;
//         left:0;
//         // width: 200px;
//         min-height: 100%; 
//         background-color: #324057;
//         z-index: 99;
// 	}
//   .fa-margin{
//         margin-right:5px;
//     }
//    .el-menu-vertical-demo:not(.el-menu--collapse) {
//         width: 180px;
//         min-height: 400px;
//     }
//     .el-menu-vertical-demo{
//         width:35px;
//     }
//     .el-submenu .el-menu-item{
//         min-width:180px;
//     }
//     .el-menu{
//         .el-menu-item{
//             padding-left:40px !important;
//         }
//      }
//         .hiddenDropdown,
//     .hiddenDropname{
//         display:none;
//     }

 

// </style>