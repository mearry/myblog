<template>
<div>
  <table>
    <thead>
     <tr>
       <td>标题</td>
       <td>作者</td>
       <td>时间</td>
       <td class="last">操作</td>
     </tr>
    </thead>
    <tbody>
     <tr v-for="item in data">
       <td>{{item.article_name}}</td>
       <td>{{item.editer}}</td>
       <td>{{item.time}}</td>
       <td class="last"><button @click="">修改</button><button @click="">删除</button></td>
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
        this.axios.get('/api/back_article/getArticle').then(function(data){
           that.data=data.data.data;
           console.log(that.data)
        })
    },
    methods:{
      deleteOne(id,enname_one,ind){
        var that=this;
      },
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
     width:20%;
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
     width:20%;
   }
   table tr td input{
     width:50px;
   }
</style>