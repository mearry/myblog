<template>
   <div style="width:700px">
<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <h3>添加文章</h3>
<el-form-item label="标题" prop="article_name">
    <el-input type="text" v-model="ruleForm2.article_name" auto-complete="off"></el-input>
</el-form-item>
<el-form-item label="一级分类">
   <el-select v-model="ruleForm2.oneId" placeholder="请选择" @change="changeOne">
    <el-option
      v-for="item in res1"
      :label="item.enname"
      :value="item.id">
    </el-option>
  </el-select>
</el-form-item>
<el-form-item label="二级分类">
  <el-select v-model="ruleForm2.twoId" placeholder="请选择" >
    <el-option
      v-for="i in twoClass"
      :label="i.enname"
      :value="i.id">
    </el-option>
  </el-select>
</el-form-item>
<el-form-item label="作者" prop="editer">
    <el-input type="text" v-model="ruleForm2.editer" auto-complete="off"></el-input>
</el-form-item>
<el-form-item label="推荐" prop="tuijian">
     <el-radio class="radio" v-model="ruleForm2.recommend" label="1">是</el-radio>
    <el-radio class="radio" v-model="ruleForm2.recommend" label="2">否</el-radio>
</el-form-item>
<el-form-item label="状态" prop="state">
     <el-radio class="radio" v-model="ruleForm2.art_show" label="1">显示</el-radio>
    <el-radio class="radio" v-model="ruleForm2.art_show" label="2">隐藏</el-radio>
</el-form-item>
<el-form-item label="时间" prop="times">
     <el-date-picker
      v-model="timedata"
      type="datetime"
      placeholder="选择日期时间" format="yyyy-MM-dd HH:mm:ss" @change="timeFn">
    </el-date-picker>
</el-form-item>
<el-form-item label="导读" prop="daodu">
    <el-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="ruleForm2.daodu" :autosize='{ minRows: 2, maxRows: 10 }'>
</el-input>
</el-form-item>
<el-form-item label="内容" prop="">
    <UE :defaultMsg=defaultMsg :config=config ref="ue"><button>点击</button></UE>
 </el-form-item>
<el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="getUEContent">获取内容</el-button>
</el-form-item>
</el-form>
  </div>                 
</template>

<script>
import UE from "../../UE"
    export default {
        components:{UE},
       data() {
            return {
                defaultMsg: '',
                config: {
                initialFrameWidth: null,
                initialFrameHeight: 350
                },
                radio: '1',
                radio1: '1',
                timedata:"",
                ruleForm2: {
                    enname_one:"",
                    oneId:"",
                    twoId:"",
                    article_name:"",
                    editer:"",//作者
                    content:"",
                    time:"",
                    daodu:"",
                    recommend:"",
                    art_show:"",
                },
                res1:null,
                res2:null,
                twoClass:[],
                rules2: {
                    article_name: [{
                        required: true,
                        message: '请输入标题',
                        trigger: 'blur'
                    }],
                    editer: [{
                        required: true,
                        message: '请输入作者',
                        trigger: 'blur'
                    }],
                    daodu: [{
                        required: true,
                        message: '请输入导读内容',
                        trigger: 'blur'
                    }]
                }
            };
        },
        methods: {
            submitForm(formName) {
                var that=this;
                console.log(this.ruleForm2.enname_one)
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // alert('submit!');
                       this.axios.post('/api/back_article/addArticle',this.ruleForm2).then(function(data){
                            if(data.data.code=='3011'){
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
            },
            // 成功消息提示
            open2() {
                this.$message({
                    message: '恭喜你，插入数据成功',
                    type: 'success'
                });
            },
            // 失败消息提示
            open4() {
                this.$message.error('不好意思，插入数据失败');
            },
            getUEContent() {
             let content = this.$refs.ue.getUEContent();
             this.ruleForm2.content=content;
           },
           changeOne(){
               this.twoClass=[];
               this.res2.forEach(function(i){
                 if(i.parent_id==this.ruleForm2.oneId){
                    this.twoClass.push(i);
                 }
               }.bind(this))
               this.res1.forEach(function(v){
                 if(v.id==this.ruleForm2.oneId){
                     this.ruleForm2.enname_one=v.enname;
                 }
               }.bind(this))
               this.ruleForm2.twoId="";
           },
           timeFn(){
               this.ruleForm2.time=arguments[0];
               console.log(this.ruleForm2.time)
           }
        },
        mounted(){
            var that=this;
            this.axios.get('/api/back_article/getClass').then(function(data){
               that.res1=data.data.data[0];
               that.res2=data.data.data[1];
            })
    
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    h3 {
        margin: 20px 0 20px 40px
    }
    
    table {
        width: 860px;
        margin-top: 20px;
        border-collapse: collapse;
    }
    
    thead th {
        height: 40px;
        background: #65BCFC;
        color: #fff;
        text-align: left;
        border-bottom: 10px solid #fff;
        padding-left: 50px;
    }
    
    tbody td {
        background: #DBEDFB;
        text-align: center;
        height: 30px;
        text-align: left;
        font-size: 14px;
        padding-left: 50px;
    }
    .content {
        width: 860px;
    }
    
    .button {
        width: 60px;
        height: 25px;
        padding: 0;
        text-align: center;
        line-height: 25px;
        font-size: 14px;
    }
    
    .button span {}
</style>