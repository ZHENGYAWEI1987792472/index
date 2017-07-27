<template>
    <div class="yw-mycarfamily6">
        <div class="yw-mycarfamilyorderlist6">
            <div class="yw-mycarvoucher">
                想或得更多代金券？<i>用车族积分兑换</i>
            </div>
            <p>您还有使用过代金券</p>
            <ul>
                <li v-for="item in zymylists"><img :src="item.carimgsrc" alt="" /><em>{{item.carname}}</em>代金券金额&nbsp;&nbsp;{{item.daijinquan}}</li>
            </ul>
            <div class="myfamily1children6">

            </div>
            <p>下载<i>车族手机版</i>，更多获券机会</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                zymylists: []
            }
        },
        mounted() {
            var that = this;
            if(localStorage.getItem("phone") || localStorage.getItem("email")) {
                $.ajax({
                    type: "get",
                    url: "api/zylookcar",
                    dataType: "json",
                    data: {
                        phone: localStorage.phone,
                        email: localStorage.email
                    },
                    success: function(data) {
                        that.zymylists = data;
                        if(that.zymylists.length <= 0) {
                            $(".yw-allorderlist").hide();
                            $(".myfamily1children6").html("<p>暂时没有商品，请去页面选择</p>");
                        }
                    }
                });
            }
        }

    }
</script>

<style>
    .yw-mycarvoucher {
        height: 38px;
        width: 645px;
        padding-left: 15px;
        background: #fffbf2;
        line-height: 38px;
        margin-left: 30px;
        margin-top: 20px;
        border: 1px solid #f7e2b5
    }
    
    .yw-mycarfamilyorderlist6 i {
        color: #1978cf;
    }
    
    .yw-mycarfamilyorderlist6>p:nth-child(2) {
        margin-top: 25px;
    }
    
    .yw-mycarfamilyorderlist6>p {
        margin-top: 10px;
        font-size: 14px;
        margin-left: 30px;
    }
    
    .yw-mycarfamilyorderlist6 ul {
        margin-left: 30px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    
    .yw-mycarfamilyorderlist6 ul img {
        width: 120px;
        vertical-align: middle;
        margin-right: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    
    .yw-mycarfamilyorderlist6 ul em {
        margin-right: 10px;
    }
</style>