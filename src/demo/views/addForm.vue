<template>
    <section>
        <el-form :model="addForm" :rules="rules" label-width="80px" ref="addForm">
           <el-form-item label="姓名" prop="name">
               <el-input v-model="addForm.name" auto-complete="off"></el-input>
           </el-form-item>
           <el-form-item label="性别"   >
               <el-radio-group v-model="addForm.sex">
                   <el-radio class="radio" :label="1">男</el-radio>
                   <el-radio class="radio" :label="0">女</el-radio>
               </el-radio-group>
           </el-form-item>
           <el-form-item label="年龄">
               <el-input-number v-model="addForm.age" :min="0" :max="200"></el-input-number>
           </el-form-item>
           <el-form-item label="生日">
               <el-date-picker type="date" placeholder="选择日期" v-model="addForm.birth"></el-date-picker>
           </el-form-item>
           <el-form-item label="地址">
               <el-input type="textarea" v-model="addForm.addr"></el-input>
           </el-form-item>
           </el-form>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                //新增界面数据
                addForm: {
                    name: '',
                    sex: -1,
                    age: 0,
                    date: '',
                    addr: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' },
                        { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
                    ]
                }

            }
        },
        methods: {
            submit(){
               this.$refs["addForm"].validate((valid) => {
                    if (valid) {
                        //调用关闭弹窗的方法
                        this.$root.eventHub.$emit('close', 'hehe');
                        alert("调取了提交的方法");
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });

            }

        },
        created(){
            //绑定提交事件
            this.$root.eventHub.$on('submit', ()=>{
                this.submit();
            } )
        },
        mounted() {
        }
    }

</script>

<style scoped>

</style>