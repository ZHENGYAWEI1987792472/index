<template>
    <div class="myfamily1children5">
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
                            <p>{{item.carstatus}}</p>
                        </td>
                        <td>
                            <p><i><button>去评价</button></i></p>
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
                zymylists: [],
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
                            if(data[i].carstatus == "待评价") {
                                that.zykong.push(data[i]);
                            }
                        }
                        if(that.zykong.length <= 0) {
                            $(".yw-allorderlist").hide();
                            $(".myfamily1children5").html("<p>您已经评价完了</p>");
                        }
                    }
                });
            }
        }

    }
</script>

<style>
    .myfamily1children5>p {
        margin-left: 30px;
        font-size: 18px;
    }
</style>