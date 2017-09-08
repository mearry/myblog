<template>
<div>
<div class="drop">
  
   <el-select v-model="ruleForm2.oneId" placeholder="请选择">
    <el-option
      v-for="item in res"
      :key="item.id"
      :label="item.enname"
      :value="item.id">
    </el-option>
  </el-select>
</div>

  
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
    <h3>二级类名设置</h3>
    <el-form-item label="中文类名" prop="cn"  class="ins">
            <el-input type="text" v-model="ruleForm2.cnname_two" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="英文类名" prop="entwo"  class="ins">
            <el-input v-model.number="ruleForm2.enname_two"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
     </el-form>

   
</div>
</template>

<script>
    export default {
       data() {
            var en = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入英文标识'));
                } else {
                    console.log(this.ruleForm2.enname_one)
                    if (/^[A-Za-z]+$/.test(this.ruleForm2.enname_one)) {
                        callback();
                    } else {
                        callback(new Error('请输入英文'));
                    }
                }
            };
            var entwo = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入英文标识'));
                } else {
                    console.log(this.ruleForm2.enname_two)
                    if (/^[A-Za-z]+$/.test(this.ruleForm2.enname_two)) {
                        callback();
                    } else {
                        callback(new Error('请输入英文'));
                    }
                }
            };
            return {
                 ruleForm2: {
                    oneId:"",
                    enname_two: "",
                    cnname_two: "",
                },
                rules2: {
                    cn: [{
                        validator: "",
                        trigger: 'blur'
                    }],
                    entwo: [{
                        validator: entwo,
                        trigger: 'blur'
                    }]
                },
                res:null
            }
        },
        mounted(){
            var that=this;
            this.axios.get('/api/back_class/select_one_class').then(function(data){
               that.res=data.data.data
            })
            console.log(this.value)
        },
        methods: {
         handleCommand(command) {
            this.ruleForm2.oneId=command;
         },
         submitForm(formName) {
                var that=this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                      that.axios.post('/api/back_class/add_two_class',this.ruleForm2).then(function(data){
                        that.$message(data.data.msg); 
                      })
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    h3 {
        margin: 100px 0 20px 40px;
        font-size:20px;
    }
    .drop{
        margin:20px 0 20px 40px;
    }
     .ins{
        width:300px;
    }
</style>