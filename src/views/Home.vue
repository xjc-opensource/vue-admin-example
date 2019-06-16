<template>
    <section>
        <el-row class="container">
            <el-col  :span="24" class="header">
                <el-col :span="10" class="logo"  :collapse="collapsed" :class="collapsed?'logo-collapse-width':'logo-width'">
                    {{collapsed?'':sysName}}
                </el-col>
                <el-col :span="10">
                    <div class="tools" @click.prevent="collapse">
                        <i class="fa fa-align-justify"></i>
                    </div>
                </el-col>

                <el-col :span="4" class="userinfo">
                    <el-dropdown trigger="hover">
                        <span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
                        <el-dropdown-menu slot="dropdown">
                            <!--
                            <el-dropdown-item>我的消息</el-dropdown-item>
                            <el-dropdown-item>设置</el-dropdown-item>
                            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                            -->
                            <el-dropdown-item @click.native="showModifiesPassword">修改密码</el-dropdown-item>
                            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-col>
            <el-col :span="24" class="main">
                <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
                    <SearchMenu :span="24" :collapse="collapsed" :class="collapsed?'SearchMenu-hide':'SearchMenu-show'" :menuList="this.nodes"></SearchMenu>
                        <!--导航菜单-->
                    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
                             unique-opened router :collapse="collapsed" >
                        <!--<template v-for="(item,index) in nodes" >-->
                            <!--<el-submenu :index="index+''" v-if="item.children">-->
                                <!--<template slot="title"><i :class="item.iconCls"></i><span slot="title">{{item.name}}</span></template>-->
                                <!--<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">{{child.name}}</el-menu-item>-->
                            <!--</el-submenu>-->
                        <!--</template>-->
                        <MenuTree :nodes="this.nodes"></MenuTree>
                    </el-menu>
                </aside>
                <section class="content-container">
                    
                    <div class="grid-content bg-purple-light">
                        <el-col v-if="$route.name!='main'"  :span="24" class="breadcrumb-container">
                            <strong class="title">{{$route.name}} 
                                <el-button type="text" size="mini" icon="el-icon-d-arrow-left" style="margin-left: 20px;" @click="goBack">返回</el-button>
                            </strong>
                            <el-breadcrumb separator="/" class="breadcrumb-inner">
                                <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                                    {{ item.name }}
                                </el-breadcrumb-item>
                            </el-breadcrumb>
                        </el-col>
                        <el-col :span="24" class="content-wrapper">
                            <transition name="fade" mode="out-in">
                                <router-view></router-view>
                            </transition>
                        </el-col>
                    </div>
                </section>
            </el-col>
        </el-row>

    </section>
</template>

<script>
    import api from '../api/api';
    import MenuTree from './MenuTree';
    import SearchMenu from "../components/SearchMenu";
    import DemoMenu from '../demo/demoMenu';
    import avatarImg from '../assets/user.png';

    export default {
        components: {
            MenuTree,
            SearchMenu
        },
        computed: {
        },
        watch: {
        },
        data() {
            return {
                //nodes: this.$router.options.routes,
                nodes: [],
                sysName:'后台管理',
                collapsed:false,
                sysUserName: '',
                sysUserAvatar: avatarImg,
                loading: false,
            }
        },
        created() {
            let data = JSON.parse(sessionStorage.getItem('menuList'));
            this.nodes.push({"id":185,"parentId":0,"name":"main","path":"/index/main","type":1,"menuType":null,"iconCls":"el-icon-star-on","status":1,"menuStatus":null,"isSelectButton":null,"children":null});
            if (null != data) {
                this.nodes.push(...data);
            }

            if (true === this.GlobalEnvParams.DEMO_MENU) {
                this.nodes.push(...DemoMenu);
            }
        },
        methods: {
            goBack() {
                window.history.go(-1);
            },
            showModifiesPassword: function () {
            },
            handleopen() {
                //console.log('handleopen');
            },
            handleclose() {
                //console.log('handleclose');
            },
            handleselect: function () {
            },
            //退出登录
            logout: function () {
                var _this = this;
                this.$confirm('确认退出吗?', '提示', {
                    //type: 'warning'
                }).then(() => {
                    let userParams = sessionStorage.getItem('user');
                    if (userParams) {
                        userParams = JSON.parse(userParams);
                        let reqObj = {};
                        reqObj.userId = userParams.userId;
                        reqObj.token = userParams.token;
                        api.postUrl("/sys/logout", reqObj).then(() => {
                            sessionStorage.removeItem('user');
                            sessionStorage.removeItem('roleList');
                            sessionStorage.removeItem('dataRoleList');
                            sessionStorage.removeItem('menuList');
                            _this.$router.push('/login');
                        }, () => {
                            this.$message({type: 'error', message: '退出登录失败'
                            });
                        })
                    }
                });
            },
            //折叠导航栏
            collapse:function(){
                this.collapsed=!this.collapsed;
            },
            showMenu(i,status){
                this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
            }
        },
        mounted() {
            let user = sessionStorage.getItem('user');
            if (user) {
                user = JSON.parse(user);
                this.sysUserName = user.userName || '';
                this.sysUserAvatar = user.avatar || avatarImg;
            }
        }
    }

</script>

<style scoped lang="scss">
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 230px;
        min-height: 100%;
    }
    .container {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        .header {
            position: relative;
            height: 60px;
            line-height: 60px;
            background: $--color-primary;
            color:#fff;
            .userinfo {
                text-align: right;
                padding-right: 35px;
                float: right;
                .userinfo-inner {
                    cursor: pointer;
                    color:#fff;
                    img {
                        width: 40px;
                        height: 40px;
                        border-radius: 20px;
                        margin: 10px 0 10px 10px;
                        float: right;
                    }
                }
            }

            .logo {
                width:230px;
                height:60px;
                font-size: 22px;
                padding-left:20px;
                padding-right:20px;
                border-color: rgba(238,241,146,0.3);
                border-right-width: 1px;
                border-right-style: solid;
                img {
                    width: 40px;
                    float: left;
                    margin: 10px 10px 10px 18px;
                }
                .txt {
                    color:#fff;
                }
            }
            .logo-width{
                width:230px;
            }
            .logo-collapse-width{
                width:65px
            }
            .tools{
                padding: 0 23px;
                width:14px;
                height: 60px;
                line-height: 60px;
                cursor: pointer;
            }
        }
        .main {
            display: flex;
            // background: #324057;
            position: absolute;
            top: 60px;
            bottom: 0;
            overflow: hidden;
            aside {
                flex:0 0 230px;
                width: 230px;
                overflow-y: auto;
                overflow-x: hidden;


                // position: absolute;
                // top: 0px;
                // bottom: 0px;
                .el-menu{
                    height: 100%;
                }

                .collapsed{

                    width:60px;
                    .item{
                        position: relative;
                    }
                    .submenu{
                        position:absolute;
                        top:0;
                        left:60px;
                        z-index:99999;
                        height:auto;
                        display:none;
                    }

                }
            }

            .menu-collapsed{
                flex:0 0 65px;
                width: 65px;
                margin-top: 0;
            }
            .menu-expanded{
                flex:0 0 231px;
                width: 231px;
                margin-top: 60px;
            }

            .content-container {
                // background: #f1f2f7;
                flex:1;
                // position: absolute;
                // right: 0px;
                // top: 0px;
                // bottom: 0px;
                // left: 230px;
                overflow-y: scroll;
                padding: 20px;
                .breadcrumb-container {
                    //margin-bottom: 15px;
                    .title {
                        width: 200px;
                        float: left;
                        color: #475669;
                    }
                    .breadcrumb-inner {
                        float: right;
                    }
                }
                .content-wrapper {
                    background-color: #fff;
                    box-sizing: border-box;
                }
            }
        }
    }
    .SearchMenu-hide {
        display: none;
    }
    .SearchMenu-show {
        display: block;
    }
</style>