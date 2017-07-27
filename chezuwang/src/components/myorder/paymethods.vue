<template>
    <div class="paymethods">
        <div class="zy-mycar-pay">
            <div class="yw-mycar-top-right">
                <span><em><i></i><i></i><router-link to="/lookcarlist">1.查看购物车</router-link></em><em><i></i><i></i><router-link to="/paymethods">2.选择支付方式</router-link></em><em><i></i>3.购买成功</em></span>
                <!--<i>现在<router-link to="/register">登录</router-link>，您的购物车的商品奖被永久保存</i>-->
            </div>
            <div class="yw-mycar-pay-deatil">
                <p class="yw-p">项目名称及数量：</p>
                <ul>
                    <li>立水桥4s店1张，赠送食品优惠券，节假日通用</li>
                    <li>团购成功后送一个大众甲壳虫+观后镜+清洗液+一年保养，去商家消费</li>
                </ul>
                <i>商品类型：花园店*1</i>
                <p class="yw-p"> 接受美团券密码的手机号：</p>
                <span>{{phone}},凭车族券密码去商家消费。</span>
                <h4>应付金额 <i>￥{{data}}</i></h4>

            </div>
            <div class="yw-mycarpaymethods">
                <span>&and;&nbsp;网上银行支付</span> <br />
                <ul>
                    <li><input type="radio" /><img src="../../img/fangshi1.png" /><i>其它付款方式▼</i></li>
                </ul>
            </div>
            <h4>支付 <i>￥{{data}}</i></h4>
            <!--<router-link to="/paysuccess">-->
            <button class="zy-submit" v-on:click="pay">
                去付款</button>
            <!--</router-link>-->
        </div>
        <div class="yw-mycar-kefu">
            <div class="zy-mycar-pay-right">
                <p>车族客服</p>
                <span class="iconfont">&#xe8c3;4006-630-636            	
            </span><br />
                <em>工作时间：每日9：00-21：00</em>
            </div>
            <div class="yw-tool">
                <p>小提示</p>
                <p>为什么使用过的订单仍然显示为“未使用？</p>
                <strong>
                订单的使用状态更新可能会延迟，订单的真实使用转台以实际消费情况为准，敬请谅解
            </strong>
                <p>那种订单可以评价？</p>
                <ul>
                    <li>只有已消费过的订单才可以评价，评价可获赠积分</li>
                    <li>如果团购项目为优惠码，支付成功即可评价（建议消费后在评价）</li>
                </ul>
            </div>
        </div>
        <router-view></router-view>
        <div class="gq-cover">
            <div class="gq-ball">
                <div class="gq-ballTop">
                </div>
                <div class="gq-ballPay">
                    <span>!</span>
                    <strong>请您耐心等待付款。</strong>
                    <p>付款完成前请不要关闭此窗口。</p>
                    <p>请确认您的付款金额{{data}}</p>
                    <em>剩余时间还有 {{time}}s</em>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                phone: localStorage.phone,
                data: 0,
                time: 10,
                url: ""
            }
        },
        methods: {
            pay: function() {
                var that = this;
                  debugger;
                var jishiqi = setInterval(function() {
                    $(".gq-cover").show();
                    that.time--;
                    if(that.time <= 0) {
                        that.time = 0;
                        $(".gq-cover").hide();
                        clearInterval(jishiqi);
                        that.$router.push({path: '/paysuccess'});
                    }
                }, 1000);
                
                
                
                
                
                  
                //              that.url = "/paysuccess"; 
                //              window.location.reload();

            }
        },
        mounted() {
            this.data = localStorage.jine;
        }

    };
</script>

<style scoped>
    /*重置样式*/
    /*购物车顶部的右半部分*/
    
    .paymethods {
        width: 980px;
        padding-bottom: 40px;
        color: black;
        margin: 10px auto;
        overflow: hidden;
    }
    
    .zy-mycar-pay {
        padding-top: 30px;
        padding-left: 30px;
        background: white;
        width: 665px;
        overflow: hidden;
        float: left;
        padding-bottom: 80px;
        border: 1px solid #c5c5c5;
    }
    
    .zy-mycar-pay .yw-mycar-top-right {
        width: 635px;
        height: 60px;
        color: black;
        display: inline-block;
    }
    /*流程条*/
    
    .zy-mycar-pay .yw-mycar-top-right span {
        background: #ececec;
        width: 100%;
        height: 32px;
        display: inline-block;
        font-size: 14px;
    }
    
    .zy-mycar-pay .yw-mycar-top-right span em {
        width: 200px;
        height: 32px;
        display: inline-block;
        line-height: 32px;
        text-align: center;
    }
    /*1.查看购物车*/
    
    .zy-mycar-pay .yw-mycar-top-right span em:nth-child(1) {
        margin-right: 16px;
    }
    
    .zy-mycar-pay .yw-mycar-top-right span em:nth-child(1) i:nth-child(1),
    .zy-mycar-pay .yw-mycar-top-right span em:nth-child(2) i:nth-child(1) {
        display: inline-block;
        border-width: 16px;
        border-style: solid;
        border-color: transparent transparent transparent white;
        float: right;
        margin-right: -35px;
    }
    
    .zy-mycar-pay .yw-mycar-top-right span em:nth-child(1) i:nth-child(2) {
        border-color: transparent transparent transparent #ececec;
    }
    
    .zy-mycar-pay .yw-mycar-top-right span em:nth-child(1) i:nth-child(2),
    .zy-mycar-pay .yw-mycar-top-right span em:nth-child(2) i:nth-child(2) {
        display: inline-block;
        border-width: 16px;
        border-style: solid;
        float: right;
        margin-right: -32px;
    }
    /*2.支付方式*/
    
    .zy-mycar-pay .yw-mycar-top-right span em:nth-child(2) {
        background: #3b6bb1;
        color: white;
        margin-right: 16px;
    }
    
    .zy-mycar-pay .yw-mycar-top-right span em:nth-child(2) i:nth-child(2) {
        border-color: transparent transparent transparent #3b6bb1;
    }
    /*左边栏*/
    
    .zy-mycar-pay-right {
        width: 240px;
        height: 100px;
        background: white;
        float: right;
        display: inline-block;
    }
    /*优惠信息*/
    
    .yw-mycar-pay-deatil ul {
        margin-left: 30px;
        font-size: 12px;
    }
    
    .yw-mycar-pay-deatil ul li {
        list-style: square;
    }
    
    .yw-mycar-pay-deatil>i {
        margin-left: 30px;
        color: #87888a;
        margin-bottom: 15px;
        display: block;
    }
    
    .yw-mycar-pay-deatil .yw-p {
        font-weight: bold;
        color: #535455;
    }
    
    .yw-mycar-pay-deatil>span {
        color: #87888a;
    }
    
    .yw-mycar-pay-deatil h4 {
        margin-top: 25px;
        margin-bottom: 17px;
    }
    
    .yw-mycar-pay-deatil h4 i,
    .zy-mycar-pay h4 i {
        color: red;
    }
    /*支付方式*/
    
    .yw-mycarpaymethods {
        width: 613px;
        background: #f7f7f7;
        padding-top: 20px;
        padding-left: 22px;
        padding-bottom: 15px;
    }
    
    .yw-mycarpaymethods ul {
        margin-bottom: 10px;
        margin-top: 10px;
    }
    
    .yw-mycarpaymethods ul li img {
        width: 150px;
        height: 35px;
        vertical-align: middle;
        margin-right: 20px;
    }
    
    .yw-mycarpaymethods ul li i {
        color: #3d76d6;
    }
    /*支付金额*/
    
    .zy-mycar-pay>h4 {
        float: right;
        margin-right: 60px;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    /*支付按钮*/
    
    .zy-mycar-pay .zy-submit {
        float: right;
        position: relative;
        right: -70px;
        top: 50px;
        width: 100px;
        height: 42px;
        color: white;
        border-radius: 10px;
        border: none;
        background: #3b6bb1;
    }
    /*车族客服*/
    
    .zy-mycar-pay-right {
        padding-left: 15px;
        padding-top: 20px;
        border: 1px solid #c5c5c5;
    }
    
    .zy-mycar-pay-right p {
        font-size: 14px;
    }
    
    .zy-mycar-pay-right span {
        font-size: 25px;
        color: #3d76d6;
    }
    
    .zy-mycar-pay-right em {
        color: #6e6c6c;
    }
    /*小提示*/
    
    .yw-tool {
        width: 225px;
        float: right;
        background: white;
        padding-left: 15px;
        margin-top: 11px;
        padding-top: 10px;
        padding-right: 15px;
        padding-bottom: 20px;
        border: 1px solid #c5c5c5;
    }
    
    .yw-tool p {
        color: #535455;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 14px;
    }
    
    .yw-tool strong,
    .yw-tool ul li {
        color: #6e6c6c;
        font-size: 12px;
        font-weight: normal;
    }
    
    .yw-tool ul {
        margin-left: 15px;
    }
    
    .yw-tool ul li {
        list-style: square;
    }
    
    .gq-cover {
        width: 100%;
        height: 100%;
        /*background-color: rgba(0, 0, 0, 0.2);*/
        padding-top: 100px;
        display: none;
        position: absolute;
        top: 200px;
        left:0;
    }
    
    .gq-ball {
        margin: auto;
        width: 320px;
        height: 285px;
        background-color: #fff;
        box-shadow: 0 0 5px 5px #a5a5a5;
    }
    
    .gq-ballTop {
        position: relative;
        height: 33px;
        background-color: #213f7b;
    }
    
    .gq-ballTop button {
        position: absolute;
        right: 4px;
        bottom: 0;
        width: 29px;
        height: 29px;
        outline: none;
        font-size: 24px;
    }
    
    .gq-ballPay {
        padding: 22px;
    }
    
    .gq-ballPay span {
        display: inline-block;
        width: 57px;
        height: 57px;
        border-radius: 50%;
        background-color: #b5daf6;
        text-align: center;
        line-height: 50px;
        color: #005ba1;
        font-size: 40px;
        font-weight: bolder;
        margin-right: 25px;
        margin-bottom: 25px;
    }
    
    .gq-ballPay strong {
        display: inline-block;
        width: 160px;
        height: 40px;
    }
    
    .gq-ballPay p {
        font-size: 14px;
        line-height: 24px;
    }
    
    .gq-ballPay button {
        width: 114px;
        height: 35px;
        background-color: #315aac;
        color: #fff;
        /*outline: none;*/
        border: none;
        margin: 15px 15px 15px 0;
    }
    
    .gq-ballPay a {
        color: #0aa0df;
        text-decoration: none;
    }
</style>