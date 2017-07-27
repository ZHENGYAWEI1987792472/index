<template>
    <div class="yw-mycarfamily4">
        <div class="yw-mycarfamilyorderlist4">
            <p>您当前的车族余额：<i>￥{{yue}}</i><button class="yw-chongzhi" id="yw-chongzhi">充值</button><button class="yw-chongzhi">提现</button></p>
            <ul>
                <li id="yw-mycarlist1bg">全部</li>
                <li>进行中团购</li>
                <li>已结束</li>
            </ul>
            <hr />
            <div class="yw-balance-show">
                <p>你还没有消费记录</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                yue: []
            }
        },
        mounted() {
            var that = this;
            $.ajax({
                url: "api/zyfindyue",
                type: "get",
                dataType: "json",
                data: {
                    phone: localStorage.phone,
                    email: localStorage.email
                },
                success: function(data) {
                    that.yue = data[0].lmoney;
                }
            })

        }
    }
</script>

<style>
    .yw-mycarfamilyorderlist4 p {
        margin-left: 30px;
        margin-top: 30px;
        font-size: 14px;
        margin-bottom: 20px;
    }
    
    .yw-mycarfamilyorderlist4 p i {
        font-size: 22px;
        color: red;
    }
    
    .yw-chongzhi {
        width: 60px;
        height: 30px;
        border: 1px solid #d6d6d6;
        background: linear-gradient(#f6f6f6, #e8e8e8);
        border-radius: 5px;
        margin-left: 14px;
    }
    
    #yw-chongzhi {
        border: 1px solid #264787;
        background: #3b6bb1;
    }
    /***************/
    
    .yw-mycarfamilyorderlist4 {
        margin-top: 30px;
    }
    
    .yw-mycarfamilyorderlist4 ul {
        overflow: hidden;
        margin-left: 30px;
        color: #1978cf;
    }
    
    .yw-mycarfamilyorderlist4 ul li {
        float: left;
        width: 40px;
        height: 20px;
        margin-right: 20px;
        text-align: center;
        line-height: 20px;
    }
    
    #yw-mycarlist1bg {
        background: #5a97d4;
        color: white;
    }
    
    hr {
        margin: 10px 30px;
        height: 0px;
        border: 0.1px solid #dcdcdc;
    }
    /*局录取*/    
    .yw-balance-show {
        font-size: 14px;
        color: #535455;
    }
</style>