<template>
    <div class="myfamily1children4">
        <div class="yw-allorderlist">
            <table>
                <thead>
                    <tr>
                        <th>团购项目</th>
                        <th>数量</th>
                        <th>金额</th>
                        <th>订单状态</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in zykong">
                        <td><img :src="item.carimgsrc" /><span>{{item.carname}}</span></td>
                        <td>{{item.carcount}}</td>
                        <td>￥{{item.carprice}}</td>
                        <td>
                            <p>{{item.carstatus}} </p><i>订单详情</i></td>
                        <td><button>待收货</button>
                            <p><i>删除订单</i></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                zymylists1: [],
                zykong: []
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
                        for(var i = 0; i < data.length; i++) {
                            if(data[i].carstatus == "已付款") {
                                that.zykong.push(data[i]);
                            }
                        }
                        if(that.zykong.length <= 0) {
                            $(".yw-allorderlist").hide();
                            $(".myfamily1children4").html("<p>暂时没有数据</p>");
                        }
                    }
                });
            }
        }
    }
</script>

<style>
    .myfamily1children4>p {
        margin-left: 30px;
        font-size: 18px;
    }
</style>