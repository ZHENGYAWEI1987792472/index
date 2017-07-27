<template>
    <div class="family">
        <div class="yw-mycarfamily">
            <div class="yw-mycarfamilyorder">
                <ul class="yw-mycarfamilyul">
                    <li class="zy-mycarfamily" v-on:click="move($event)">
                        <router-link to="/yworder">我的订单</router-link>
                    </li>
                    <li v-on:click="move($event)">
                        <router-link to="/ywappraise">我的评价</router-link>
                    </li>
                    <li v-on:click="move($event)">
                        <router-link to="/ywgroup">我的收藏</router-link>
                    </li>
                    <li v-on:click="move($event)">
                        <router-link to="/ywbalance">车族余额</router-link>
                    </li>
                    <li v-on:click="move($event)">
                        <router-link to="/ywchongzhi">充值/提现</router-link>
                    </li>
                    <li v-on:click="move($event)">
                        <router-link to="/ywvoucher">代金券</router-link>
                    </li>
                    <li v-on:click="move($event)">
                        <router-link to="/ywjifen">我的积分</router-link>
                    </li>
                    <li v-on:click="move($event)">
                        <router-link to="/ywaccount">账户设置</router-link>
                    </li>
                </ul>
                <div class="yw-mycarfamilyorderlist">
                    <router-view></router-view>
                </div>
            </div>

            <div class="yw-mycarfamilyorderleft">
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

        </div>

    </div>
</template>

<script>
    export default {
        methods: {
            move: function(event) {
                var that = $(event.target).parent("li");
                that.addClass("zy-mycarfamily").siblings().removeClass();
            }
        }

    };
</script>

<style>
    .family {
        width: 980px;
        margin: 10px auto;
        overflow: hidden;
    }
    
    .yw-mycarfamily {
        width: 980px;
    }
    
    .yw-mycarfamilyorder {
        float: left;
    }
    
    .yw-mycarfamilyul {
        overflow: hidden;
        position: relative;
        top: 1.5px;
    }
    
    .yw-mycarfamilyul li {
        float: left;
        color: #1978cf;
        display: inline-block;
        width: 80px;
        height: 35px;
        border: 1px solid #c5c5c5;
        border-bottom: none;
        margin-right: 5px;
        font-size: 14px;
        text-align: center;
        line-height: 35px;
        border-radius: 5px 5px 0 0;
        background: #fafafa;
    }
    
    .yw-mycarfamilyul .zy-mycarfamily {
        color: black;
        background: white;
        padding-bottom: 2px;
    }
    /*状态*/
    
    .yw-mycarfamilyorderlist {
        border: 1px #c5c5c5 solid;
        background: white;
        width: 720px;
        height: 450px;
        padding-bottom: 100px;
    }
    /*客服*/
    
    .yw-mycarfamilyorderleft {
        width: 240px;
        height: 100px;
        background: white;
        float: right;
        display: inline-block;
        margin-left: 10px;
    }
    
    .zy-mycar-pay-right {
        padding-left: 15px;
        padding-top: 20px;
        padding-bottom: 20px;
        border: 1px solid #c5c5c5;
        background: white;
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
        width: 208px;
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
</style>