<template>
<div>
  <table v-for="(item,ind) in data">
    <thead>
     <tr>
       <td>一级类名:{{item.onedata.cnname}}</td>
       <td>标识:{{item.onedata.enname}}</td>
       <td>文章数量:0</td>
       <td class="last"><button  @click="amentTwo(item.onedata,'one')">修改</button><button @click="deleteOne(item.onedata.id,item.onedata.enname,ind)">删除</button></td>
     </tr>
    </thead>
    <tbody>
     <tr v-for="(i,index) in item.twodata">
       <td>二级类名:<span>{{i.cnname}}</span></td>
       <td>标识:<span>{{i.enname}}</span></td>
       <td>文章数量:{{i.article_num}}</td>
       <td class="last"><button @click="amentTwo(i,'two')">修改</button><button  @click="deletes(item.onedata.id,i.id,item.onedata.enname,index,ind)">删除</button></td>
     </tr>
    </tbody>
  </table>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        data:null,
        flag:false,
      }
    },
    mounted(){
       var that=this
        this.axios.get('/api/back_class/class_list').then(function(data){
           that.data=data.data.data;
        })
    },
    methods:{
      deletes(oneId,twoId,enname,ind,index){
        var that=this;
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          cancelButtonText: '取消',
          confirmButtonText: '确定'
        }).then(() => {
          that.axios.post('/api/back_class/delete_two',{enname_one:enname,oneId:oneId,twoId:twoId}).then(function(){
            that.$message({
             type: 'success',
             message: '删除成功!'
            });
             that.data[index].twodata.splice(ind,1)
          })
        }).catch(() => {
          that.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      deleteOne(id,enname_one,ind){
        var that=this;
        this.axios.post('/api/back_class/delete_one',{enname_one:enname_one,id:id}).then(function(data){
          if(data.data.code=="1071"){
             that.$message({
               type:"success",
               message:data.data.msg
             })
             that.data.splice(ind,1)
          }else{
             that.$message({
               type:"error",
               message:data.data.msg
             })
          }
        })
      },
      amentTwo(data,type){
       this.$router.push({
         name:"amentOne",
         params:{
           data:data,
           type:type
         }
       })
      }
    }
   
  }
</script>
<style lang="" scoped>
*{
  box-sizing:border-box;
}
   table{
     width:100%;
     border:1px solid #ccc;
     border-collapse: collapse;
     margin:20px;
   }
   table thead{
     width:100%;
     height:50px;
     line-height:50px;
     background:lightblue;
     border:1px solid #ccc;
   }
   table thead tr td{
     width:25%;
     padding-left:25px;
   }
  table  tr .last button{
     height:35px;
     width:60px;
     outline:none;
     margin-left:10px
   }
   table tbody tr{
     height:50px;
     border-bottom:1px solid #ccc;
   }
   table tbody tr td{
     padding-left:25px;
     width:25%;
   }
   table tr td input{
     width:50px;
   }
</style>