<template>
    <div class="yw-mycarfamily2">
        <div class="yw-mycarfamilyorderlist2">
            <ul>
                <li class="yw-mycarlist1bg" v-on:click="tab($event)"><router-link to="/zyping">待评价</router-link></li>
                <li v-on:click="tab($event)"><router-link to="/zyyipping">已评价</router-link></li>
            </ul>
            <hr />
             <router-view></router-view>
            <!--<div class="yw-appraise-show">
                <p>你目前还没有可评价的订单</p>
            </div>-->
        </div>
    </div>
</template>

<script>
         export default {
        methods : {
            tab :function(event){
                  var that = $(event.target).parent("li");
                   that.addClass("yw-mycarlist1bg").siblings().removeClass();
            }
            
        }
        
    }
</script>

<style>
     .yw-mycarfamilyorderlist2 {
        margin-top: 30px;
    }
    
    .yw-mycarfamilyorderlist2 ul {
        overflow: hidden;
        margin-left: 30px;
        color: #1978cf;
    }
    
    .yw-mycarfamilyorderlist2 ul li {
        float: left;
        width: 50px;
        height: 20px;
        margin-right: 20px;
        text-align: center;
        line-height: 20px;
    }
        .yw-mycarlist1bg {
        background: #5a97d4;
        color: white;
    }
    
    hr {
        margin: 10px 30px;
        height: 0px;
        border: 0.1px solid #dcdcdc;
    }
    /*评论展示区*/
   .yw-appraise-show {
       margin-left: 30px;
       font-size: 14px;
       color: #535455;
   }
</style>