<template> 
     <div class="left l">
             <div class="one" v-for="item in filter">
              <h2>【心路历程】请不要在设计这条路上徘徊啦</h2>
              <dl>
                  <dt><img src="../../../static/images/img_1.jpg" alt=""></dt>
                  <dd>
                    <p v-html="item.content"></p>
                    <h5><span>阅读全文</span></h5>
                  </dd>
              </dl>
              <h1><p class="dateview"><span>2017-07-13</span><span>作者：</span><span>个人博客：[<a href="/jstt/bj/">心得笔记</a>]</span></p></h1>
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
</template>
<script>
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
<style lang="">
 .left{
     width:620px;
     float:left;
     padding-left:20px; 
     padding-right:10px;
     display:inline-block;
 }
 .left .one h2{
      margin:20px 0 10px 0;
      font-size:16px;
  }
.left .one dl dt{
      float:left;
      margin-right:20px;
  }
   .left .one dl dt img{
    border:1px solid #fff;
    padding:6px;
}
 .left .one dl dd p{
    line-height:23px;
    font-size:14px;
}
 .left .one dl dd h5{
    width:100%;
    text-align:right;
    margin-top:20px;
    padding-right:20px;
}
 .left .one dl dd h5 span{
    padding:5px 10px;
    color:#fff;
    background:#333;
}
 .left .one h1{
    clear:left;
    padding-top:15px;
}
 .left .one h1 p{
    width:100%;
    background:#fff;
    height:30px;
    line-height:30px;
    padding-left:25px; 
    margin-bottom:20px;
}
</style>