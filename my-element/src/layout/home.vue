<!--  -->
<template>
  <div class="home">
    <!--头部-->
   <head-nav></head-nav>
   <!--content-->
   <div class="left-fixed-right-auto">
   <left-menu></left-menu>
  
   </div>
     
  </div>
</template>

<script>

 import HeadNav from './headNav.vue';
 import LeftMenu from './leftMenu.vue';
export default {

   components:{
            HeadNav,
            LeftMenu
        },
  data () {
    return {
    };
  },

}

</script>
<style >
.left-fixed-right-auto{
  

}
</style>