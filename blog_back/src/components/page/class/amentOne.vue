<template>
<div class="amentOne">
   <el-form :model="ruleForm2"  ref="ruleForm2" label-width="100px" class="demo-ruleForm">
  <el-form-item label="中文名字" prop="pass">
    <el-input type="text" v-model="ruleForm.cnname_one" auto-complete="off" class="ins"></el-input>
  </el-form-item>
  <el-form-item label="英文名字" prop="checkPass">
    <el-input type="text" v-model="ruleForm.enname_one" auto-complete="off"  class="ins"></el-input>
  </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2',ruleForm2)">提交</el-button>
     </el-form-item>
  
</el-form>
</div>
</template>
<script>
    export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入中文名称'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入英文名称'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error(''));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
         enname_one:"",
         cnname_one:"",
         oldenname_one:"",
         oldenname_two:""
        },
         url:"",
         ruleForm2: {
          pass:"",
          checkPass:""
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        var that=this;
        var sendData={
          enname_two:"",
          cnname_two:"",
          oldenname_two:""
        }
        if(this.$route.params=="one"){
          sendData=this.ruleForm;
        }else{
          sendData.enname_two=this.ruleForm.enname_one
          sendData.cnname_two=this.ruleForm.cnname_one
          sendData.oldenname_two=this.ruleForm.oldenname_two;
        }
        console.log(sendData)
        this.$refs[formName].validate((valid) => {
          if (valid) {
           this.axios.post(this.url,sendData).then(function(data){
             if(data.data.code=="1062" || data.data.code=="1052"){
               that.$message({
                 type:"success",
                 message:data.data.msg
               })
             }else{
               that.$message({
                 type:"error",
                 message:data.data.msg
               })
             }
           })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    created(){
      if(this.$route.params.type=="one"){
        this.ruleForm.oldenname_one=this.$route.params.data.cnname; 
        this.ruleForm.enname_one=this.$route.params.data.enname;
        this.ruleForm.cnname_one=this.$route.params.data.cnname;
        this.url="/api/back_class/amend_class_one"
      }else{
       this.ruleForm.cnname_one=this.$route.params.data.cnname;
       this.ruleForm.enname_one=this.$route.params.data.enname;
       this.ruleForm.oldenname_two=this.$route.params.data.cnname;
       this.url="/api/back_class/amend_class_two"
      }
    }
  }
</script>
<style lang="">
     .amentOne{
         padding:20px 0 20px 20px;
     }
     .ins{
         width:200px;
     }
</style>