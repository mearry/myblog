<template>
        <div class="main">
            <div class="scroll">
            <img src="../../static/images/mainendbg.jpg" alt="">
           </div>
            <div class="container clear">
                <contentleft></contentleft>
                <contentright></contentright>
            </div>
           <div class="scroll">
            <img src="../../static/images/mainendbg.jpg" alt="">
           </div>
        </div>
</template>
<script>
    import lefts from './page/left'
    import rights from './page/right'
    export default{
        data(){
            return{

            }
        },
        components:{
          "contentleft":lefts,
          "contentright":rights
        }
    }
</script>
<style lang="">
    .page{
        text-align:center;
        padding-bottom:10px;
    }
</style>