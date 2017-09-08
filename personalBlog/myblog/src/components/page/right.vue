<template>
     <div class="right r">
            <div class="right_one">
                <h1><span>关注我</span></h1>
                <ul>
                    <li><img src="../../../static/images/gz01.png" alt="">
                       <p>我的电话</p> 
                    </li>
                    <li><img src="../../../static/images/gz02.png" alt="">
                        <p>我的邮箱</p>
                    </li>
                    <li><img src="../../../static/images/gz03.png" alt="">
                        <p>我的QQ</p>
                    </li>
                    <li><img src="../../../static/images/gz04.png" alt="">
                        <p>个人奖项</p>
                    </li>
                </ul>
             </div>
              <div class="right_two">
                <h1><span>最新推荐</span></h1>
                <dl v-for="item in 7">
                    <dt><img src="../../../static/images/01.jpg"></dt>
                    <dd>
                        <p>住在手机里的朋友</p>
                        <p><span>手机配件</span><b>2015-02-15</b></p>
                    </dd>
                </dl>
             </div>
              <div class="right_three">
                <h1><span>图文推荐</span></h1>
                
                <ul>
                    <li>【心路历程】请不要在设计这条路上徘徊啦</li>
                    <li>【IP要突破2000+了</li>
                    <li>【帝国cms首页、自定义页面如何实现分页</li>
                    <li>【已评选】给我模板PSD源文件，我给你设计HTML！</li>
                    <li>【郑重申明】本站只提供静态模板下载！</li>
                    <li>【郑重申明】本站只提供静态模板下载！</li>
                    <li>【郑重申明】本站只提供静态模板下载！</li>
                    <li>【郑重申明】本站只提供静态模板下载！</li>
                    <li>【郑重申明】本站只提供静态模板下载！</li>
                    <li>【郑重申明】本站只提供静态模板下载！</li>
                    <li>【郑重申明】本站只提供静态模板下载！</li>
                    <li>【郑重申明】本站只提供静态模板下载！</li>
                </ul>
                <p><img src="../../../static/images/06.jpg" alt=""></p>
             </div>
     </div>
</template>
<script>
    
</script>
<style lang="">
.right{
     width:378px;
     float:left;
     display:inline-block;
 }
.right .right_one h1{
     margin-top:20px;
     width:100%;
     height:44px;
     line-height:44px;
     background:url(../../../static/images/rtitbg.png) 50px no-repeat;
     color:#fff;
 } 
 .right h1 span{
      margin-left:100px;
      font-size:16px;
}
.right_one ul{
    margin-left:80px;
    margin-top:10px;
}
.right_one ul li{
    float:left;
    margin-right:10px;
}
.right_one ul li:hover{
    opacity:0.6;
}
.right_one ul li p{
    width:60px;
    text-align:center;
    margin-top:10px;
}
.right .right_two{
    clear:both;
    padding-top:30px;
}
.right .right_two h1{
     width:100%;
     height:44px;
     line-height:44px;
     background:url(../../../static/images/rtitbg.png) 50px no-repeat;
     color:#fff;
 } 
 .right_two h1 span{
      margin-left:100px;
      font-size:16px;
}
.right .right_two dl{
    height:auto;
    padding-bottom:17px;
    margin:15px 20px 0 50px;
}
.right .right_two dl dt img{
    width:70px;
    float:left;
    margin-right:15px;
}
.right .right_two dl dd p{
    padding-top:8px;
}
.right .right_two dl:hover{
    background:#fff;
}
.right .right_two dl dd p span{
  background:url(../../../static/images/lanmbq.png) left center no-repeat;
  padding-left:20px;
}
.right .right_two dl dd p b{
  margin-left:10px;
  background:url(../../../static/images/datepng.png) left center no-repeat;
   padding-left:20px;
}
.right .right_three{
    clear:both;
    padding-top:30px;
}
.right .right_three h1{
     width:100%;
     height:44px;
     line-height:44px;
     background:url(../../../static/images/rtitbg.png) 50px no-repeat;
     color:#fff;
 } 
 .right_three h1 span{
      margin-left:100px;
      font-size:16px;
}
.right .right_three ul{
    margin-left:50px;
}
.right .right_three ul li{
    background:url(../../../static/images/libg.jpg) left center no-repeat;
    padding:5px 0;
}
.right .right_three p{
    margin-left:50px;
    margin-top:15px;
}

</style>