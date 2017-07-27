<template>
    <div class="myfamily1children1">

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
                    <tr v-for="item in zymylists">
                        <td><img :src="item.carimgsrc" /><span>{{item.carname}}</span></td>
                        <td>{{item.carcount}}</td>
                        <td>￥{{item.carprice}}</td>
                        <td>
                            <p>{{item.carstatus}} </p><i>订单详情</i></td>
                        <td><button>付款</button>
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
                            $(".myfamily1children1").html("<p>暂时没有商品，请去页面选择</p>");
                        }
                    }
                });
            }
        }

    }
</script>

<style>
    .myfamily1children1>p {
        margin-left: 30px;
        font-size: 18px;
    }
    /*列表*/
    
    .yw-allorderlist table {
        width: 660px;
        margin-left: 30px;
        border: 1px solid #e5e5e5;
    }
    
    .yw-allorderlist table thead {
        font-size: 14px;
        line-height: 35px;
    }
    
    .yw-allorderlist table tbody {
        font-size: 12px;
    }
    
    .yw-allorderlist table thead tr {
        border: 1px solid #e5e5e5;
    }
    
    .yw-allorderlist table tbody img {
        vertical-align: middle;
        margin-right: 12px;
        width: 80px;
        height: 50px;
    }
    
    .yw-allorderlist table tbody td {
        padding: 12px;
        text-align: center;
    }
    
    .yw-allorderlist table tbody tr {
        border: 1px dashed #e5e5e5;
        color: #646464;
    }
    
    .yw-allorderlist table tbody tr>td:nth-child(1) {
        width: 290px;
    }
    
    .yw-allorderlist table tbody tr>td:nth-child(1) span {
        width: 190px;
        height: 40px;
        display: inline-block;
        text-align: left;
    }
    
    .yw-allorderlist table tbody button {
        background: #5a97d4;
        color: white;
        width: 35px;
        height: 20px;
    }
    
    .yw-allorderlist table tbody i {
        color: #1978cf;
    }
</style>