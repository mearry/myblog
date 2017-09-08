<template>
      <div class="wrap">
    <div class="head">
            <div class="top"></div>
              <div class="headbottom">
                <div class="fl">
                  个人博客模板古典系列之——江南墨卷
                </div>
                <div class="fr">
                  <p><input type="text" placeholder="请输入关键字"><button>搜索</button></p>
                </div>
              </div>
              <nav>
              <p v-for="item in "></p>
                  <el-menu mode="horizontal" class="bg el-menu-demo">
                  <el-menu-item index="1" class="border"><router-link to="/">网站首页</router-link></el-menu-item>
                  <el-menu-item index="1" class="border"><router-link to="/article">技术文章</router-link></el-menu-item>
                  <el-menu-item index="1" class="border">给我留言</el-menu-item>
                  </el-menu>
              </nav>
           </div>
           
            <router-view>
            
            </router-view>
            
          <div class="foot">
            <div class="footContent">
              <p>All Rights Reserved 版权所有:<a href="#">邓长江个人博客</a><span> 备案号：蜀ICP备00000000号</span></p>
            </div>
          </div>
    </div>
</template>
<script>

import {mapActions,mapState} from "vuex"
    export default{
         data() {
             return {
               
            };
        },
        computed:{
          
        },
       
    }
</script>
<style lang=""scoped>
     *{
    box-sizing:border-box;
}
body{
      background:url(../../static/images/bg.jpg) repeat;
  }
.wrap{
      background:url(../../static/images/footside.jpg) bottom center  no-repeat; 
      position:relative;
  }
.wrap .head{
    width:100%;
    background:url(../../static/images/yuanshan.jpg) right bottom no-repeat;
}
.wrap .head .top{
    width:100%;
    height:28px;
    background:url(../../static/images/topbg.jpg) repeat-x;
}
.wrap .head .headbottom{
    width:1000px;
    margin:0 auto;
}
.wrap .head .headbottom .fl{
    padding:50px 0 20px 20px;
    font-size:26px;
    float:left;
    color:#333;
    font-weight:bold;
}
 .wrap .head .headbottom .fr{
    float:right;
    padding:50px 0 20px 20px;
}
.wrap .head .headbottom .fr p input{
   width:158px;
   height:26px;
   padding-left:5px;
   background-color:#e5e5e5;
   border:1px solid #ccc;
}
.wrap .head .headbottom .fr p button{
     width:50px;
     height:28px;
     color:#fff;
     outline:none;
     border-radius:3px;
     line-height:28px;
     border:none;
     background:#333;
     margin-left:8px;
}
.wrap .head nav{
    clear:both;
    width:1000px;
    margin:0 auto;
    height:64px;
    margin-bottom:15px;
    background:url(../../static/images/navbg.png) no-repeat;
}
.wrap .head nav .border{
    color:#fff;
    font-size:14px;
}
.wrap .head nav .border:hover{
      background:none;
      border:none;
}
.wrap .head nav .bor{
    background:#ccc;
    color:#fff;
    font-size:14px;
    letter-spacing:2px;
}
.wrap .head nav .bor:hover{
    background:#333;
}
.wrap .head nav .bg .active:hover .el-submenu__title{
   border:none;
   background:none;
}
.head nav .bg .active .el-submenu__title i{
   opacity:0;
}
.wrap .head nav .bg .active .el-submenu__title{
    color:#fff;
}
.wrap .head nav .bg{
    background:none;
    margin-left:30px;
}
.wrap .head nav .bg .active ul{
    width:110px;
    margin-top:-15px;
    background:rgba(0,0,0,.3);
    border:none;
    overflow:hidden;
}
.wrap .head nav .bg .active ul li{
     width:110px;
     background:rgba(0,0,0,.5)
 }
.wrap .head nav .bg .active ul li:hover{
    background:rgba(0,0,0,1)
 }
.wrap  .main .scroll{
     width:1034px;
     height:14px;
     margin:0 auto;
 }
 .clear{
     content:"";
     overflow:hidden;
     clear:both;
 }
 .wrap .main{
     width:100%;
 }
 .container{
     width:1000px;
     margin:0 auto;
     background:#e5e5e5;
     border-left:#d2d2d2 1px solid; 
     border-right:#d2d2d2 1px solid; 
 }
.wrap .foot{
    width:100%;
    height:64px;
    line-height:64px;
    background:url(../../static/images/footerbg.png) repeat-x;
    font-size:14px;
    margin-top:40px;  
}
.wrap .foot .footContent{
    width:1000px;
    margin:0 auto;
    color:#ccc;
}
.wrap.foot .footContent p{
  display:inline-block;
  float:left;
}
.wrap .foot .footContent p a{
    color:#000;
    margin:0 5px;
}
.wrap .foot .footContent h2{
  display:inline-block;
  float:right;
}
</style>