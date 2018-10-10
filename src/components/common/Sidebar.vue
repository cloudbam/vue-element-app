<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'readme',
                        title: '首页'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: 'readme',
                        title: '客户'
                    },
                      {
                        icon: 'el-icon-setting',
                        index: 'readme',
                        title: '交易'
                    },
                     {
                        icon: 'el-icon-setting',
                        index: 'readme',
                        title: '邮件管理',
                         subs: [
                            {
                                index: 'upload',
                                title: '客户邮件'
                            },
                             {
                                index: 'upload',
                                title: '邮件分类'
                            },
                           
                           
                        ]
                    },
                     

                    {
                        icon: 'el-icon-setting',
                        index: 'readme',
                        title: '报表'
                    },
                     {
                        icon: 'el-icon-setting',
                        index: 'readme',
                        title: '销售订单'
                    },
                     {
                        icon: 'el-icon-setting',
                        index: 'readme',
                        title: '报价'
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'readme',
                        title: '数据分析'
                    },
                    //  {
                    //     icon: 'el-icon-setting',
                    //     index: 'readme',
                    //     title: '发货单'
                    // },
                    {
                        icon: 'el-icon-setting',
                        index: 'userCenter',
                        title: '个人设置',
                        subs: [
                            {
                                index: 'upload',
                                title: '文件上传'
                            },
                            {
                                index: 'modifyUser',
                                title: '修改用户'
                            },
                            {
                                index: 'modifyPassword',
                                title: '修改密码'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
