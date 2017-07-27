<template>
    <div class="mycarcount">
        <div class="yw-mycarcountlist">
            <table border="1">
                <thead>
                    <tr>
                        <th>项目</th>
                        <th>状态</th>
                        <th>类型/数量</th>
                        <th>单价</th>
                        <th>小计</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(items,index) in zymylists">
                        <td><img :src="items.carimgsrc" /><i>{{items.carname}}</i></td>
                        <td> {{items.carstatus}}</td>
                        <td><button class="yw-mycarountsub" v-on:click="plus(index)">-</button><input type="text" :value="items.carcount"/><button class="yw-mycarountadd" v-on:click="add(index)">+</button></td>
                        <td>￥{{items.carprice}}</td>
                        <td>￥{{items.carprice * items.carcount}}</td>
                        <td v-on:click="detel(index,$event)">删除</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>代金券：</td>
                        <td v-bind="dai()">-￥{{daijinquan}}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>应用总金额</td>
                        <td v-bind="totals()">￥{{total}}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <!---->
            <span>您绑定的账号是：{{phone}}</span>
            <button class="zy-submit" id="zy-submit" v-on:click="zyfukuan">提交订单</button>
        </div>
        <div class="zycountshow">
            <img src='../../img/kong.png' />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                zymylists: [],
                a: 0,
                b: 0,
                total: 0,
                daijinquan: 0,
                phone: localStorage.phone+localStorage.email,
                inputs: [],
                url :""
            }
        },
        methods: {
            plus: function(index) {
                //数量减少
                this.a = this.zymylists[index].carcount - 0;
                this.a -= 1;
                if(this.zymylists[index].carcount - 0 <= 1) {
                    if(confirm("您是否要取消订单？")) {
                        this.zymylists.splice(index, 1);
                        this.zymylists[index].push("");

                    }
                    this.a = 1;
                    this.zymylists[index].carcount = this.a;
                }
                this.zymylists[index].carcount = this.a;
               
            },
            detel: function(index, event) {
                var that = $(event.target);
                //删除订单
                if(confirm("确定要删除此订单吗？")) {
                    this.zymylists.splice(index, 1);
                    $.ajax({
                        type: "get",
                        url: "api/zydelect",
                        dataType: "json",
                        data: {
                            carname: that.siblings("td").children("i").text()
                        },
                        success: function(data) {

                        }
                    });
                }
                if(this.zymylists.length <= 0) {
                    window.location.reload();
                }
            },
            dai: function() { //代金券
                this.daijinquan = this.b;
                for(var i = 0; i < this.zymylists.length; i++) {
                    this.daijinquan += this.zymylists[i].daijinquan;
                }
            },
            add: function(index) {
                //增加数量
                this.a = this.zymylists[index].carcount - 0;
                this.a += 1;
                if (this.a >= 100) {
                	    this.a = 100;
                	    this.zymylists[index].carcount = this.a;
                }
                this.zymylists[index].carcount = this.a;
            },
            totals: function() {
                //总金额
                this.total = 0;
                for(var i = 0; i < this.zymylists.length; i++) {
                    this.total += (this.zymylists[i].carcount) * (this.zymylists[i].carprice);
                }
                this.total = this.total - this.daijinquan;
                localStorage.jine = this.total;
            },
            zyfukuan: function() {   
                debugger;
                var that = this;
                 that.inputs = [];
                 $("table input[type='text']").each(function(){
                     that.inputs.push($(this).val());                     
                 });
                for (var i = 0; i < that.inputs.length; i++) {
                        $.ajax({
                        url: "api/zymai",
                        dataType: "json",
                        type: "get",
                        data: {
                            id: that.zymylists[i].id,
                            carcount: that.inputs[i],
                            carstatus: "已付款"
                        },
                        success: function(data) {                           
                        }
                    })
                }
                                             
              this.$router.push({path:'/paymethods'})  
            }
        },
        mounted() {
            var that = this;
            //判断是否在登录状态
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
                            if(data[i].carstatus == "未付款") {
                                that.zymylists.push(data[i]);
                            }
                        }
                        if(that.zymylists.length <= 0) {
                            $(".yw-mycarcountlist").hide();
                            $(".zycountshow").show();
                        }
                    }
                });
            }
        }
    };
</script>

<style scoped>
    .zycountshow {
        padding-left: 200px;
        display: none;
    }
    /*存放购物车的列表*/
    
    .yw-mycarcountlist table {
        width: 920px;
        text-align: left;
        text-indent: 13px;
        border: 1px #e4e4e4 solid;
    }
    /*设置边框*/
    
    .yw-mycarcountlist table thead tr {
        border: 1px #e4e4e4 solid;
        text-align: center;
        background: #f6f6f6;
    }
    
    .yw-mycarcountlist table tbody tr {
        border: 1px #e4e4e4 dashed;
        background: #fdfeff;
    }
    
    .yw-mycarcountlist table tbody tr td {
        border: none;
        text-align: center;
    }
    /*上下居中*/
    
    .yw-mycarcountlist table tr td,
    .yw-mycarcountlist table tr th {
        padding-top: 13px;
        padding-bottom: 13px;
    }
    /*图片的宽度及对齐方式*/
    
    .yw-mycarcountlist table tbody img {
        width: 60px;
        vertical-align: top;
        margin-right: 5px;
    }
    /*设置改变数量的input框*/
    
    .yw-mycarcountlist table thead tr th:nth-child(1),
    .yw-mycarcountlist table tbody tr td:nth-child(1) {
        text-align: left;
        width: 300px;
    }
    
    .yw-mycarcountlist table tbody input {
        width: 66px;
        height: 32px;
        text-align: center;
    }
    
    .yw-mycarcountlist .yw-mycarountsub,
    .yw-mycarountadd {
        width: 20px;
        margin: 3px;
        background: rgb(255, 255, 255);
        border: 1px solid #cacaca;
    }
    /*提交按钮*/
    
    .zy-submit {
        float: right;
        margin-right: 30px;
        margin-top: 30px;
        width: 100px;
        height: 42px;
        color: white;
        border-radius: 10px;
        border: none;
        background: #3b6bb1;
    }
    
    .yw-mycarcountlist span {
        font-size: 16px;
        margin-top: 40px;
        display: inline-block;
    }
</style>