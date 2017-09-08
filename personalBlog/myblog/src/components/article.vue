<template>
  <div class="article">
      <div class="head clear">
        <h1><b>技术文章</b></h1>
        <ul>
            <li>你现在的位置是：</li>
            <li>技术文章</li>
        </ul>
         </div>
        <div class="content_article clear">
            <div class="article_left">
               <ul>
                   <li v-for="(item,index) in filter">
                     <h2>{{item.article_name}}</h2>
                     <p v-html="item.content"></p>
                     <span>{{item.time}}</span>
                     <div>0{{index+1}}</div>
                   </li>
               </ul>
            </div>
            <div class="article_right">
               <ul>
                   <li v-for="item in 5"><img src="../../static/images/07.jpg" alt=""></li>
               </ul>
            </div>
            <div class="page">
           
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="fn"
                    :page-sizes="[5,10, 15, 20]"
                    :page-size="page"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="nums.length">
                    </el-pagination>
             </div>
        </div>
     
  </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
    export default{
        data() {
            return {
                num:5,
                page:0,
                arr:null,
                current:1,
                nums:[]
            };
        },
        beforeCreate(){
         this.axios.get('/api/front_article/getArticleAll').then(function(data){
            this.$store.dispatch('click',data.data.data)
            this.nums= this.$store.state.data
          }.bind(this))  
         },
         methods: {
            handleSizeChange(val) {
            },
             fn(val){
                this.current=val;
                this.arr=this.nums.slice((this.current-1)*this.num,this.current*this.num);
             }
            },
         computed:{
             filter(){
                 this.arr=this.nums.slice((this.current-1)*this.num,this.current*this.num);
                 return this.arr
             }
            
         },  
    }
</script>
<style lang="" scoped>
*{
    box-sizing:border-box;
}
.article{
     width:1000px;
     margin:0 auto;
     border:1px solid #ccc;
}
.clear{
     content:"";
     overflow:hidden;
     clear:both;
}
.head{
    width:95%;
    margin:20px 20px 0px 20px;
    border-bottom:2px solid #000;
    padding-bottom:10px;
}
.head h1{
   float:left;
   color:#171717;
   font-size:14px;
}
.head ul{
    float:right;
}
.head ul li{
   display:inline-block;
}
.content_article{
    clear:both;
}
.content_article .article_left{
     width:60%;
     margin: 20px 0 0 40px;  
     float:left;
}
.content_article .article_right{
     width:25%;
     margin-right:40px;
     float:right;
}
.content_article .article_left ul li{
    width:100%;
    border-bottom:1px solid #ccc;
    padding:20px 20px 20px 80px;
    margin-bottom:10px;
    position:relative;
}
.content_article .article_left ul li h2{
    width:100%;
    height:30px;
    line-height:30px;
    background:#ccc;
    font-size:16px;
    padding-left:15px;
}
.content_article .article_left ul li p{
    line-height:25px;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding-right:15px;
}
.content_article .article_left ul li span{
    width:100%;
    display:inline-block;
    text-align:right;
    margin-top:10px;
}
.content_article .article_left ul li div{
    position:absolute;
    left:0px;
    top:40px;
    font-size:40px;
    color:#aeaeae;
}
.content_article .article_right ul li{
    width:100%;
    height:140px;
    overflow:hidden;
    background:#ccc;
    text-align:center;
    margin-top:15px;
}
.content_article .article_right ul li img{
    width:80%;
    height:100%;
    transition:all 0.5s;
    display:inline-block;
}
.content_article .article_right ul li img:hover{
    width:90%;
    height:110%;
}
.content_article .page{
    clear:both;
    width:100%;
    text-align:center;
    padding:20px 0;
}
</style>