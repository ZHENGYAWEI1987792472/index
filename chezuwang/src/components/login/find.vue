<template>
    <div class="find">
        <div id="find">
            <div class="gq-top">
                <h2>找回密码</h2>
                <h2>重设密码</h2>
            </div>
            <div class="gq-find">
                <div class="gq-phone-find">
                    <div class="gq-findPassword">
                        <label>手机号：</label>
                        <input type="text" placeholder="手机号/用户名/邮箱" />
                    </div>
                    <div class="gq-set">
                        <div class="gq-psw">
                            <label>创建密码: </label>
                            <input type="password" />
                        </div>

                        <div class="gq-psw1">
                            <label>确认密码: </label>
                            <input type="password" />

                        </div>
                    </div>
                    <div class="gq-code">
                        <label>验证码：</label>
                        <input class="gq-putCode" type="text" />
                        <input id="gq-findCode" disabled="disabled" v-model='code' />
                        <a v-on:click="createCode">看不清楚? 换一张</a>
                    </div>
                    <button class="gq-find-register" v-on:click="gqfindregister">登录</button>
                    <button class="gq-search" v-on:click="zyfindpwd"><router-link to="/zyreg">重设密码</router-link></button>
                </div>
                <div class="gq-findWin">
                    <p>操作已成功!请到
                        <a></a>,查询来自车族网的邮件，点击邮件中的链接重设您的密码</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    var code;
    export default {
        data() {
            return {
                code: code
            }
        },
        beforeCreate() {
            //创建验证码
            code = "";
            name = "";
            var codeLength = 4;
            var checkCode = document.getElementById("gq-checkCode");
            var codeChart = new Array(2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
            for(var i = 0; i < codeLength; i++) {
                var codeIndex = Math.floor(Math.random() * 34);
                code += codeChart[codeIndex];
            }
            if(checkCode) {
                checkCode.className = "code";
                checkCode.value = code;
            }

        },
        methods: {
              //验证手机号
            gqfindregister: function() {
                var str = $(".gq-findPassword input").val();
                var ret = /^1[34578]\d{9}$/;
                var ret1 = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
                var gqCode = $(".gq-putCode").val().toUpperCase();
                if(ret.test(str) && gqCode == code) {
                    $(".gq-set").show();
                    $(".gq-top h2").eq(1).show();
                    $(".gq-top h2").eq(0).hide();
                    $(".gq-search").show();
                    $(".gq-find-register").hide();
                } else if(ret1.test(str) && gqCode == code) {
                    $(".gq-phone-find").hide();
                    $(".gq-findWin").show();                   
                } else {
                    alert("请输入正确信息");
                };
                var hash = {
                    'qq.com': 'http://mail.qq.com',
                    'gmail.com': 'http://mail.google.com',
                    'sina.com': 'http://mail.sina.com.cn',
                    '163.com': 'http://mail.163.com',
                    '126.com': 'http://mail.126.com',
                    'yeah.net': 'http://www.yeah.net/',
                    'sohu.com': 'http://mail.sohu.com/',
                    'tom.com': 'http://mail.tom.com/',
                    'sogou.com': 'http://mail.sogou.com/',
                    '139.com': 'http://mail.10086.cn/',
                    'hotmail.com': 'http://www.hotmail.com',
                    'live.com': 'http://login.live.com/',
                    'live.cn': 'http://login.live.cn/',
                    'live.com.cn': 'http://login.live.com.cn',
                    '189.com': 'http://webmail16.189.cn/webmail/',
                    'yahoo.com.cn': 'http://mail.cn.yahoo.com/',
                    'yahoo.cn': 'http://mail.cn.yahoo.com/',
                    'eyou.com': 'http://www.eyou.com/',
                    '21cn.com': 'http://mail.21cn.com/',
                    '188.com': 'http://www.188.com/',
                    'foxmail.com': 'http://www.foxmail.com',
                    'outlook.com': 'http://www.outlook.com'
                }

                var _mail = $(".gq-findPassword input").val().split('@')[1]; //获取邮箱域
                for(var j in hash) {
                    if(j == _mail) {
                        $(".gq-findWin a").text(str);
                        $(".gq-findWin a").show().attr("href", hash[_mail]); //替换登陆链接
                    }
                }

            },
            createCode: function() { 
                code = "";
                name = "";
                var codeLength = 4;
                var checkCode = document.getElementById("gq-findCode");
                var codeChart = new Array(2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
                for(var i = 0; i < codeLength; i++) {
                    var codeIndex = Math.floor(Math.random() * 34);
                    code += codeChart[codeIndex];
                }
                if(checkCode) {
                    checkCode.className = "code";
                    checkCode.value = code;
                }
            },
            zyfindpwd: function() {
                //找回密码
                $(".gq-search").click(function() {
                    var ret = /^[A-z0-9]{6,32}/;
                    var str = $(".gq-psw input").val();
                    var str1 = $(".gq-psw1 input").val();
                    var gqCode = $(".gq-putCode").val().toUpperCase();
                    if(ret.test(str)) {
                        if(str == str1) {
                            if(gqCode == code) {
                                $.ajax({
                                    type: "get",
                                    url: "api/zyfind",
                                    dataType: "json",
                                    data: {
                                        phone: $(".gq-findPassword input").val(),
                                        pwd: $(".gq-psw input").val()
                                    },
                                    success: function(data) {
                                        if(data) {
                                            alert("修改成功，请登录！！")
                                        }
                                    }
                                });
                            } else {
                                alert("验证码错误");
                            }
                        } else {
                            alert("请重新确认密码");
                        }
                    } else {
                        alert("密码格式错误");
                    }
                })

            }
        }
    }
</script>

<style>
    #find {
        width: 725px;
        height: 384px;
        border: 1px solid #c5c5c5;
        margin: 0 auto;
    }
    
    h2 {
        padding-left: 25px;
        font-size: 27px;
        border-bottom: 1px solid #c5c5c5;
        margin-bottom: 0;
    }
    
    .gq-top h2:last-child {
        display: none;
    }
    
    .gq-find {
        width: 100%;
        height: 288px;
        padding-top: 35px;
    }
    
    .gq-set {
        display: none;
    }
    
    .gq-findWin {
        display: none;
    }
    
    label {
        width: 124px;
        display: inline-block;
        text-align: right;
    }
    
    input {
        width: 245px;
        height: 22px;
        margin-bottom: 20px;
    }
    
    .gq-code input {
        width: 115px;
    }
    
    #gq-findCode,
    #gq-findPswCode {
        outline: none;
        border: none;
        width: 63px;
        height: 32px;
        background-color: rgb(153, 153, 153);
        text-decoration: underline;
        color: #fff;
        text-align: center;
        line-height: 32px;
        font-size: 16px;
        letter-spacing: 3px;
    }
    
    .gq-find-register,
    .gq-search {
        font-size: 14px;
        width: 75px;
        height: 30px;
        background-color: #2870B2;
        color: #fff;
        margin-left: 125px;
    }
    
    .gq-search {
        display: none;
    }
    
    .gq-findWin {
        width: 486px;
        font-size: 16px;
        line-height: 27px;
        padding: 12px 82px;
        background-color: #ffffeb;
        border: 1px solid #e5e4d5;
        margin: 0 auto;
    }
</style>