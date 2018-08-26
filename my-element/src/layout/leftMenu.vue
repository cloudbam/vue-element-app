<!--  -->
<!--状态管理的store进行-->
<!--:collapse="$store.state.menu.isCollapse"-->
<template>
<div class="left">
<el-row class="menu_page">
    <el-col>
        <el-menu 
            mode='vertical'
            theme='dark'
            class="el-menu-vartical-demo"
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

<script>
export default {
  data () {
    return {
        isDropdown:false,
    };
  },
  methods :{
      showDropdown (){
          this.isDropdown=this.$store.state.menu.isCollapse;
      },
      
  }

//   components: {},

//   computed: {},

//   mounted: {},

//   methods: {}
}

</script>
<style  lang='scss' rel='stylesheet/scss'>
.menu_page{
		position: fixed;
		top:71px;
        left:0;
        // width: 200px;
        min-height: 100%; 
        background-color: #324057;
        z-index: 99;
	}
  .fa-margin{
        margin-right:5px;
    }
   .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 180px;
        min-height: 400px;
    }
    .el-menu-vertical-demo{
        width:35px;
    }
    .el-submenu .el-menu-item{
        min-width:180px;
    }
    .el-menu{
        .el-menu-item{
            padding-left:40px !important;
        }
     }
        .hiddenDropdown,
    .hiddenDropname{
        display:none;
    }

 

</style>