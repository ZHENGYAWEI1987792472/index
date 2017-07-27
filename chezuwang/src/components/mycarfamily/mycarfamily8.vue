<template>
    <div class="yw-mycarfamily8">
        <div class="yw-mycarfamilyorderlist8">
            <ul>
                <li class="yw-mycarlist1bg" v-on:click="tab($event)">
                    <router-link to="/ywbasemess">基本信息</router-link>
                </li>
                <li v-on:click="tab($event)">
                    <router-link to="/ywemailmess">邮件订阅</router-link>
                </li>
                <li v-on:click="tab($event)">
                    <router-link to="/yweaddresmess">收货地址</router-link>
                </li>
            </ul>
            <hr />
            <div class="yw-account-show">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            tab: function(event) {
                var that = $(event.target).parent("li");
                that.addClass("yw-mycarlist1bg").siblings().removeClass();
            }

        }

    }
</script>

<style>
    .yw-mycarfamilyorderlist8 {
        margin-top: 30px;
    }
    
    .yw-mycarfamilyorderlist8>ul {
        overflow: hidden;
        margin-left: 30px;
        color: #1978cf;
    }
    
    .yw-mycarfamilyorderlist8>ul li {
        float: left;
        width: 60px;
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
    /*基本信息*/
</style>