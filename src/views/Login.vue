<template>
    <div class="login-container">
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm">
            <h3 class="title">{{ $t("login.title") }}{{ flagString }}</h3>

            <el-form-item prop="account">
                <el-input type="text" v-model="ruleForm2.account" auto-complete="off" :placeholder="$t('login.hintAccount')"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" :placeholder="$t('login.hintPassword')"></el-input>
            </el-form-item>
            <el-form-item prop="captcha">
                <el-row :gutter="20">
                    <el-col :span="10">
                        <el-input v-model="ruleForm2.captcha" auto-complete="off" :placeholder="$t('login.hintCaptcha')" @keyup.enter.native="handleSubmit2">
                        </el-input>
                    </el-col>
                    <el-col :span="5" class="login-captcha">
                        <img :src="captchaPath" @click="getCaptcha()" alt="">
                    </el-col>
                </el-row>
            </el-form-item>

            <el-checkbox v-model="checked"  class="remember" disabled>{{ $t("login.btnRemember") }} </el-checkbox>

            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">{{ $t("login.btnLogin") }}</el-button>
                <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
            </el-form-item>
            <div class="hint">支持浏览器: IE9+、Firefox45+、Safari10.10+、Chrome54+</div>
        </el-form>
    </div>

</template>

<script>
    import md5 from 'js-md5';
    import api from '@/api/api';

    export default {
        data() {
            return {
                audioSrc:'',
                isAudioShow:false,
                flagString: this.GlobalEnvParams.ENV_TITLE,
                logining: false,
                ruleForm2: {
                    account: this.GlobalEnvParams.TEST_USERNAME,
                    checkPass: this.GlobalEnvParams.TEST_PASSWORD,
                    uuid: '',
                    captcha: this.GlobalEnvParams.TEST_CAPRCHA,
                },
                rules2: {
                    account: [
                        { required: true, message: this.$t('login.hintAccountEx'), trigger: 'blur' },
                    ],
                    checkPass: [
                        { required: true, message: this.$t('login.hintPasswordEx'), trigger: 'blur' },
                    ],
                    captcha: [
                        { required: true, message: this.$t('login.hintCaptchaEx'), trigger: 'blur' },
                    ],
                },
                checked: false,
                captchaPath:'',
            };
        },
        mounted() {
            this.getCaptcha();
        },
        methods: {
            // 获取验证码
            getCaptcha () {
                //this.ruleForm2.uuid = util.getUUID();
                //this.captchaPath =  getCaptchaUrl(this.ruleForm2.uuid);
            },

            handleReset2() {
                this.$refs.ruleForm2.resetFields();
            },

            requestLogin(loginParams) {
                this.logining = true;

                api.postUrl("/sys/login", loginParams).then(res => {
                    this.logining = false;
                    if ((res.data)) {
                        sessionStorage.setItem('user', JSON.stringify(res.data));
                        this.$router.push({path: '/index/main'});
                    }
                    this.getCaptcha();
                } ,  () =>{ this.logining = false; });
            },

            handleSubmit2() {
                this.$refs.ruleForm2.validate((valid) => {
                    if (valid) {
                        this.logining = true;
                        let loginParams = {
                            userName: this.ruleForm2.account,
                            userPwd: md5(this.ruleForm2.checkPass),
                            uuid: this.ruleForm2.uuid,
                            captcha: this.ruleForm2.captcha
                        };
                        this.requestLogin(loginParams);
                    } else {
                        return false;
                    }
                });
            }
        },
    }

</script>

<style lang="scss" scoped>
    .login-container {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin: 120px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
        .title {
            margin: 0 auto 40px auto;
            text-align: center;
            color: #505458;
        }
        .hint {
            text-align: center;
            font-size: smaller;
            color: #909399;
        }
        .remember {
            margin-bottom: 20px;
        }
    }
</style>