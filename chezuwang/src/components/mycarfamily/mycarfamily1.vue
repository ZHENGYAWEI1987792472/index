<template>
    <div class="yw-mycarfamily1">
        <div class="yw-mycarfamilyorderlist1">
            <ul>
                <li class="yw-mycarlist1bg" v-on:click="tab($event)">
                    <router-link to="/zyquanbu">全部 </router-link>
                </li>
                <li v-on:click="tab($event)">
                    <router-link to="/zyweishiyong">未使用</router-link>
                </li>
                <li v-on:click="tab($event)">
                    <router-link to="/zyyiguoqi">已过期</router-link>
                </li>
                <li v-on:click="tab($event)">
                    <router-link to="/zyyituikuan">已付款</router-link>
                </li>
                <li v-on:click="tab($event)">
                    <router-link to="/zydaipinjia">待评价</router-link>
                </li>
            </ul>
            <hr />
            <router-view></router-view>
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
    .yw-mycarfamilyorderlist1 {
        margin-top: 30px;
    }
    
    .yw-mycarfamilyorderlist1 ul {
        overflow: hidden;
        margin-left: 30px;
        color: #1978cf;
    }
    
    .yw-mycarfamilyorderlist1 ul li {
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
</style>