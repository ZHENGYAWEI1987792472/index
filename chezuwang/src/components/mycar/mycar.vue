<template>
    <div class="mycar">
        <!--购物车-->
        <div class="yw-mycar-top">
            <div class="yw-mycar-top-left">
                <i class="iconfont yz-iconfontcar">&#xf0148;</i>
                <span><em>我的购物车</em><em><i></i><i>1/20</i></em></span>
            </div>
            <div class="yw-mycar-top-right">
                <span><em><i></i><i></i><router-link to="/lookcarlist">1.查看购物车</router-link></em><em><i></i><i></i>2.选择支付方式</em><em><i></i>3.购买成功</em></span>
                <i>现在<router-link to="/register">登录</router-link>，您的购物车的商品奖被永久保存</i>
            </div>
            <mycarcount></mycarcount>
        </div>
        <div class="yw-mycar-bottom">

        </div>
    </div>
</template>

<script>
    import mycarcount from "./mycarcount.vue";

    export default {
        components: {
            mycarcount: mycarcount
        }
    };
</script>

<style>
    /*我的购物车*/
    
    .mycar {
        background: white;
        margin: 10px auto;
        padding-bottom: 80px;
        color: black;
        width: 980px;
    }
    
    .yw-mycar-top {
        margin-left: 30px;
        overflow: hidden;
    }
    /*我的购物车，顶部左半部分*/
    
    .yw-mycar-top-left .yz-iconfontcar {
        font-size: 60px;
    }
    
    .yw-mycar-top-left {
        display: inline;
    }
    
    .yw-mycar-top-left span {
        width: 130px;
        height: 50px;
        display: inline-block;
        margin-left: 15px;
    }
    /*显示我的购物车*/
    
    .yw-mycar-top-left span em:nth-child(1) {
        font-size: 20px;
        letter-spacing: 5px;
        font-weight: bold;
    }
    /*添加购物车的进度条*/
    
    .yw-mycar-top-left span i:nth-child(1) {
        width: 90px;
        height: 8px;
        display: inline-block;
        border: 2px solid #3071b9;
    }
    /*购物车顶部的右半部分*/
    
    .yw-mycar-top .yw-mycar-top-right {
        width: 635px;
        height: 60px;
        float: right;
        margin-top: 30px;
        margin-right: 30px;
        color: black;
    }
    /*流程条*/
    
    .yw-mycar-top .yw-mycar-top-right span {
        background: #ececec;
        width: 100%;
        height: 32px;
        display: inline-block;
        font-size: 14px;
    }
    
    .yw-mycar-top .yw-mycar-top-right span em {
        width: 200px;
        height: 32px;
        display: inline-block;
        line-height: 32px;
        text-align: center;
    }
    /*1.查看购物车*/
    
    .yw-mycar-top .yw-mycar-top-right span em:nth-child(1) {
        background: #3b6bb1;
        color: white;
        margin-right: 16px;
    }
    
    .yw-mycar-top .yw-mycar-top-right span em:nth-child(1) i:nth-child(1),
    .yw-mycar-top .yw-mycar-top-right span em:nth-child(2) i:nth-child(1) {
        display: inline-block;
        border-width: 16px;
        border-style: solid;
        border-color: transparent transparent transparent white;
        float: right;
        margin-right: -35px;
    }
    
    .yw-mycar-top .yw-mycar-top-right span em:nth-child(1) i:nth-child(2) {
        border-color: transparent transparent transparent #3b6bb1;
    }
    
    .yw-mycar-top .yw-mycar-top-right span em:nth-child(1) i:nth-child(2),
    .yw-mycar-top .yw-mycar-top-right span em:nth-child(2) i:nth-child(2) {
        display: inline-block;
        border-width: 16px;
        border-style: solid;
        float: right;
        margin-right: -32px;
    }
    /*2.支付方式*/
    
    .yw-mycar-top .yw-mycar-top-right span em:nth-child(2) {
        margin-right: 16px;
    }
    
    .yw-mycar-top .yw-mycar-top-right span em:nth-child(2) i:nth-child(2) {
        border-color: transparent transparent transparent #ececec;
    }
    
    .yw-mycar-top .yw-mycar-top-right>i {
        font-size: 12px;
        font-weight: 150;
    }
</style>