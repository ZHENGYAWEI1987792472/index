<template>
    <div class="headers">
        <div class="yj-nav">
            <!--/*收藏订阅帮助*/-->
            <div class="yj-nav-top">

                <a href="">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-wenhao"></use>
                    </svg> 帮助</a>
                <a href="">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-icon-p_xinfeng"></use>
                    </svg> 订阅</a>
                <a href="">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xing"></use>
                    </svg> 收藏</a>

            </div>
            <!--/*遮盖层div*/-->
            <div class="yj-nav-bottom">
                <!--/*导航展示图片  logo 城市 搜索 联系电话*/-->
                <div class="yj-nav-body">
                    <!--/*导航展示图片*/-->
                    <div class="yj-nav-img">
                        <img src="../../image/nav-img.png" />
                        <img src="../../image/nav-rmove.png" />
                    </div>
                    <!--/*导航内容框*/-->
                    <div class="yj-body-cont">
                        <!--/*导航  logo*/-->
                        <img src="../../image/logo.png" alt="" />
                        <!--/*导航 城市*/-->
                        <div class="yj-cont-site">
                            <p><strong>北京</strong></p>
                            <span>[切换城市]</span>
                            <div class="yj-site-city">
                                <h3><a href="javascript:void(0)">城市切换</a><img src="../../image/nav-rmove.png" alt="" /></h3>

                                <h4><em>核心城市</em>        
                           <a href="javascript:void(0)">北京</a>
                           <a href="javascript:void(0)">天津</a>
                           <a href="javascript:void(0)">上海</a></h4>
                            </div>
                        </div>

                        <!--/*导航 搜索*/-->
                        <div class="yj-cont-input">
                            <!--/*导航 搜索商品服务类型*/-->
                            <div class="yj-input-top">
                                <ul>
                                    <li>
                                        <a href="">贴膜</a>
                                    </li>
                                    <li>
                                        <a href="">镀膜</a>
                                    </li>
                                    <li>
                                        <a href="">庆红</a>
                                    </li>
                                    <li>
                                        <a href="">封釉</a>
                                    </li>
                                    <li>
                                        <a href="">爱义行</a>
                                    </li>
                                    <li>
                                        <a href="">3M</a>
                                    </li>
                                </ul>
                            </div>
                            <!--/*导航 搜索框*/-->
                            <div class="yj-input-bottom">
                                <input type="text" v-model="msgs"/>
                                <em><svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-luyin"></use>
</svg></em>
                                <!--/*导航 搜索按钮*/-->
                                <button v-on:click="cha"><router-link to="/zyseach">搜索</router-link></button>
                            </div>

                        </div>
                        <!--/*导航联系电话*/-->
                        <div class="yj-cont-phone">
                            <h3 class="h3">4006-630-636</h3>
                            <i>每日9:00-21:00</i>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!--/*导航条*/-->

        <div class="yj-list">
            <!--/*首页 服务 团购*/-->
            <div class="yj-list-cont">
                <router-link to="/zyhome">
                    <a class="color">首页</a>
                </router-link>
                <router-link to="/zyseach">服务  </router-link>
                <router-link to="/zygroupbuy">团购</router-link>
                <!--/*个人 购物车 最近浏览*/-->
                <div class="yj-list-message">
                    <ul>
                        <li class="zyhide">
                            <router-link to="/zylogon">注册</router-link>
                        </li>
                        <li class="zyhide">
                            <router-link to="/zyregister">登录</router-link>
                        </li>
                        <li id="zytuochu" @click="removeLocalitem">
                            <router-link to="/">退出</router-link>
                        </li>
                        <li id="zymycar">
                            <router-link to='/zymycount'>HI! <i>000</i></router-link>
                        </li>
                        <li>
                            <router-link to="/zyliulan"> 最近浏览
                            </router-link>
                        </li>
                        <li class="yj-pay gouwuche" >
                            <a class="iconfont" id="gouwuche">                                
                                &#xf0148; &nbsp;购物车
                            </a>
                            <div class="yj-message-pay">
                                <button id="zy">
                                    <router-link v-bind:to="url" >查看我的购物车</router-link>
                                    <!--查看我的购物车-->
                                </button>
                            </div>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    ///lookcar
    var url;
    export default {
        data() {
            return {
                url: "",
               msgs : 0
              
            }
        },
        methods: {
            removeLocalitem() {
                if(confirm("您确定要退出吗？")) {
                    localStorage.removeItem("phone");
                    localStorage.removeItem("email");
                    $(".zyhide").show();
                    $("#zytuochu").hide();
                    $("#zymycar").hide();
                }
                window.location.reload();
            },
            cha() {
                this.msgs = localStorage.msg = $(".yj-input-bottom input").val()
            }
        },
        mounted() {
            $("#zy").attr("disabled", true);
            var that = this;
            that.url = "/";
            if(localStorage.getItem("phone") || localStorage.getItem("email")) {
                $("#zy").attr("disabled", false);
                that.url = "/lookcar";
            }
        }
    };
</script>

<style>
    body {
        background: #FBFBFB;
    }
    
    #zymycar {
        display: none;
    }
    
    #zytuochu {
        display: none;
        cursor: pointer;
    }
    /*购物车*/
    
    #gouwuche  {        
        font-weight:900;
        font-size: 12px;
    }
    /*顶部导航*/
    
    .yj-nav {
        width: 100%;
        height: 208px;
        background: #fbfbfb;
        /*border: 1px solid;*/
    }
    /*收藏订阅帮助*/
    
    .yj-nav-top {
        width: 980px;
        height: 38px;
        margin: 0 auto;
        text-align: center;
    }
    
    .yj-nav-top a:nth-child(2) {
        border-right: 1px solid;
        border-left: 1px solid;
        padding: 0 10px;
    }
    
    .yj-nav-top a {
        float: right;
        width: 66px;
        height: 15px;
        margin-top: 14px;
        color: #666;
        padding: 0 10px;
    }
    /*遮盖层div*/
    
    .yj-nav-bottom {
        width: 100%;
        height: 169px;
        margin-top: 11px;
        background: #fff;
        margin: 0 auto;
        border-top: 1px solid #ccc;
    }
    /*导航展示图片  logo 城市 搜索 联系电话*/
    
    .yj-nav-body {
        width: 980px;
        height: 169px;
        /*border: 1px solid ;*/
        margin: 0 auto;
    }
    /*导航展示图片*/
    
    .yj-nav-img {
        width: 980px;
        height: 70px;
        /*border: 1px solid;*/
        position: relative;
    }
    
    .yj-nav-img img {
        width: 100%;
        height: 70px;
    }
    
    .yj-nav-img img:nth-child(2) {
        width: 16px;
        height: 16px;
        position: absolute;
        right: 0;
        top: 0;
    }
    /*导航内容框*/
    
    .yj-nav-cont {
        width: 980px;
        height: 99px;
        /*border: 1px solid red;*/
    }
    /*导航  logo*/
    
    .yj-body-cont img {
        width: 156px;
        height: 74px;
        float: left;
        margin-top: 13px;
        /*border: 1px solid red;*/
    }
    /*导航 城市*/
    
    .yj-cont-site {
        float: left;
        width: 137px;
        height: 74px;
        /*border: 1px solid;*/
        margin-top: 13px;
        position: relative;
    }
    
    .yj-cont-site p {
        font-size: 16px;
        font-weight: 900px;
        font-family: SimSun Regular;
        margin-left: 10px;
        text-align: left;
        margin-top: 35px;
    }
    
    .yj-cont-site span {
        color: #213f7b;
        font-family: SimSun Regular;
        margin-left: 10px;
    }
    /*导航 搜索*/
    
    .yj-cont-input {
        width: 375px;
        height: 98px;
        /*border: 1px solid red;*/
        float: left;
    }
    /*导航 搜索商品服务类型*/
    
    .yj-input-top {
        width: 307px;
        height: 39px;
        /*border: 1px solid;*/
        overflow: hidden;
    }
    
    .yj-input-top ul {
        width: 3200px;
        height: 19px;
        /*border: 1px solid red;*/
        margin-top: 20px;
    }
    
    .yj-input-top ul li {
        display: inline-block;
        float: left;
        height: 12px;
        padding: 0 13px;
        border-right: 1px solid;
        font-size: 12px;
        font-family: SimSun Regular;
        line-height: 12px;
        color: #666;
    }
    /*导航 搜索框*/
    
    .yj-input-bottom {
        width: 375px;
        height: 61px;
        /*border: 1px solid;*/
        position: relative;
    }
    
    .yj-input-bottom em {
        position: absolute;
        right: 70px;
        top: 10px;
        font-size: 16px;
    }
    
    .yj-input-bottom input {
        width: 307px;
        height: 34px;
        float: left;
        border: 2px solid #2a4e91;
    }
    /*导航 搜索按钮*/
    
    .yj-input-bottom button {
        width: 60px;
        height: 38px;
        float: left;
        background: #2a4e91;
    }
    
    .yj-input-bottom button:hover {
        box-shadow: 1px 1px 1px 1px #2a4e91;
    }
    /*导航联系电话*/
    
    .yj-cont-phone {
        height: 100px;
        width: 200px;
        float: right;
        /*border: 1px solid;*/
    }
    
    .h3 {
        float: right;
        font-size: 25px;
        font-family: MicrosoftYaHei Regular;
        color: #2a4e91;
        margin-top: 30px;
    }
    
    .yj-cont-phone i {
        float: right;
        font-size: 12px;
        font-family: MicrosoftYaHei Regular;
        color: #666;
        line-height: 16px;
    }
    /*导航条*/
    /*首页 服务 团购*/
    
    .yj-list {
        width: 100%;
        height: 40px;
        background: #2a4e91;
        position: relative;
    }
    
    .yj-list-cont {
        width: 980px;
        height: 38px;
        border: dashed 1px transparent;
        margin: 0 auto;
    }
    
    .yj-list-cont a {
        display: inline-block;
        padding: 0 23px;
        height: 38px;
        /*border: 1px solid;*/
        font-size: 14px;
        font-family: SimSun Regular;
        text-align: center;
        line-height: 40px;
        color: #fff;
    }
    /*个人 购物车 最近浏览*/
    
    .yj-list-message {
        float: right;
        width: 500px;
        /*overflow: hidden;*/
    }
    
    .yj-list-message ul {
        width: 503px;
    }
    
    .yj-list-message ul li {
        display: inline-block;
        float: right;
        height: 38px;
    }
    
    .yj-list-message ul li>a {
        padding: 0 16px;
        font-size: 12px;
        border-right: 1px solid;
        display: inline-block;
        height: 15px;
        line-height: 15px;
        margin-top: 10px;
    }
    
    .yj-list-message ul li:hover {
        background: #fff;
    }
    
    .yj-list-message ul li:hover>a {
        color: #2a4e91;
    }
    
    .color {
        background: #101f4b;
    }
    /*********底部foot*************/
    
    .yj-foot {
        margin-top: 20px;
        width: 100%;
        height: 420px;
        background: #fbfbfb;
        border-top: 7px solid #2a4e91;
    }
    
    .yj-foot-wrap {
        width: 980px;
        height: 383px;
        /*border: 1px solid;*/
        margin: 10px auto;
    }
    
    .yj-foot-header {
        padding: 0 40px;
        /*width: 980px;*/
        height: 131px;
        /*border: 1px solid;*/
    }
    
    .yj-foot-link {
        width: 78px;
        height: 80px;
        border-left: 1px solid #bebebe;
        display: inline-block;
        float: left;
        padding: 24px 30px;
    }
    
    .yj-foot-link ul li a {
        color: black;
    }
    
    .yj-foot-phone {
        width: 265px;
        height: 128px;
        border-left: 1px solid #bebebe;
        display: inline-block;
        float: right;
        padding: 0 35px;
    }
    
    .yj-foot-phone ul {
        width: 225px;
        height: 74px;
        background: #d1d1d1;
        border-radius: 5px;
        margin-top: 36px;
        margin-left: 40px;
    }
    
    .yj-foot-phone ul li:nth-child(1) {
        font-size: 14px;
        font-family: MicrosoftYaHei Regular;
        color: #b0b0b0;
    }
    
    .yj-foot-phone ul li:nth-child(2) {
        font-size: 26px;
        font-family: Arial Regular;
        color: #555;
    }
    
    .yj-foot-copyright {
        width: 980px;
        height: 14px;
        margin: 38px 0;
        /*border: 1px solid;*/
    }
    
    .yj-foot-copyright a {
        float: left;
        margin-left: 13px;
        color: #6f6f6f;
        /*英文与汉语对不起 设置一样的字体*/
        font-family: Adobe 黑体 Std R;
    }
    
    .yj-foot-pay {
        margin-top: 28px;
        height: 40px;
        width: 500px;
        margin: 0 auto;
        /*border: 1px solid;*/
    }
    
    .yj-foot-pay img {
        float: left;
        margin-left: 15px;
    }
    
    .yj-foot-active {
        border: 3px solid #d1d1d1;
        width: 980px;
        height: 40px;
        padding: 30px 0 20px;
        font-family: Adobe 黑体 Std R;
        display: none;
    }
    
    .yj-foot-active a {
        color: #6f6f6f;
    }
    
    .yj-foot-active a:hover {
        color: lightskyblue;
    }
    /*回到顶部*/
    /*.yj-recur {
        width: 54px;
        /*height: 54px;*/
    /*background: #666;
        font-size: 16px;
        text-align: center;
        border-radius: 5px;
        position: fixed;
        bottom: 20px;
        left: 50%;
        margin-left: 500px;
        color: white;
    }*/
    /*js交互css*/
    /*基于yj-nav-bottom定位*/
    
    .yj-site-city {
        width: 564px;
        height: 116px;
        border: 3px solid #2a4e91;
        position: absolute;
        background: #fff;
        z-index: 1;
        position: absolute;
        left: -100px;
        top: 100%;
        display: none;
    }
    
    .yj-site-city h3 {
        width: 100%;
        height: 34px;
        background: #2a4e91;
        position: relative;
    }
    
    .yj-site-city h3 a {
        color: #fff;
        font-size: 16px;
        line-height: 34px;
        margin-left: 20px;
        text-decoration: underline;
    }
    
    .yj-site-city h3 img {
        width: 16px;
        height: 16px;
        position: absolute;
        right: 0;
        top: -5px;
    }
    
    .yj-site-city h4 {
        width: 100%;
        height: 78px;
        color: #ccc;
        padding: 30px;
        /*border: 1px solid red;*/
        font-size: 16px
    }
    
    .yj-site-city h4 em {
        width: 100px;
        /*border: 1px solid;*/
        display: inline-block;
    }
    /*购物车*/
    /*yj-pay定位*/
    
    .yj-pay {
        position: relative;
        z-index: 100;
    }
    
    .yj-message-pay {
        width: 200px;
        background: #fff;
        height: 50px;
        margin-top: 15px;
        border-radius: 5px;
        padding: 10px;
        position: absolute;
        top: 24px;
        left: -50%;
        text-align: center;
        display: none;
    }
    
    .yj-message-pay button {
        border: 1px solid;
        width: 120px;
        height: 50px;
        background: #2a4e91;
        text-align: center;
        /*margin: 0px 50px;*/
        padding: 5px;
        border-radius: 3px;
        cursor: pointer;
        color: white;
    }
    
    #zy a {
        height: 30px;
        line-height: 30px;
        display: inline-block;
        padding: 0px;
        font-size: 12px;
    }
    
    .icon {
        width: 1.1em;
        height: 1.1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    
    .icon1 {
        width: 2.4em;
        height: 2em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        color: white;
        margin-top: 5px;
    }
    
    .p {
        font-size: 14px;
        font-weight: 900px;
        font-family: SimSun Regular;
        text-align: left;
        margin-bottom: 15px;
    }
    
    .i {
        display: inline-block;
        width: 8px;
        height: 8px;
        border: 0.8px dotted;
        transform: rotateZ(45deg);
    }
    
    .a {
        display: inline-block;
        margin-right: 10px;
        border-style: solid solid none;
        border-width: 5px 5px medium;
        padding: 5px;
        color: black;
    }
    
    .a:hover {
        border-color: rgb(42, 78, 145);
        background: rgb(139, 132, 180);
    }
    
    .show {
        display: block;
    }
</style>