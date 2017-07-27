<template>
    <div class="home">
        <!--内容-->
        <div class="yj-main">
            <div class="yj-main-header">
                <div class="yj-header-lift">
                    <div class="yj-lift-top">全部商品分类</div>
                    <h3 class="yj-main-h3"> · 汽车美容<i class="yj-main-i"></i>
                            <div class="yj-main-show">
                        <ul >
                    
                    <li><a href="" class="yj-group-blue">汽车清洗</a><a href="">洗车</a><a href="">人工洗车</a><a href="">洗车卡</a></li>
                    <li>
                        <a href="" class="yj-group-blue">车身美容</a>
                        <a href="">打蜡</a>
                    <a href="">封釉</a>
                    <a href="">镀膜</a>
                    <a href="">镀晶</a>
                    <a href="">抛光</a>
                    </li>
                    <li>
                        <a href="" class="yj-group-blue">车内美容</a>
                        <a href="">内饰清洗</a>
                        <a href="">空调清洗</a>
                        <a href="">真皮座椅保养</a>
                        <a href="">高温消毒</a>
                        <a href="">祛味除甲醛</a>
                    </li>
                    
                    <li>
                        <a href="" class="yj-group-blue">轮胎保养</a>
                        <a href="">轮毂上光</a>
                        <a href="">轮毂镀膜</a>
                        <a href="">轮毂清洗</a>
                    </li>
                    
                    <li>
                        <a href="" class="yj-group-blue">整车美容</a>
                        <a href="">美容养护套餐</a>
                    </li>
                        
                    </ul>
                    </div>
                    </h3>
                    <h3 class="yj-main-h3"> · 汽车装饰<i class="yj-main-i"></i>
                        <div class="yj-main-show">
                            <ul >
                    
                    <li><a href="" class="yj-group-blue">汽车贴膜</a><a href="">全车贴膜</a><a href="">前挡贴膜</a><a href="">车身贴膜</a></li>
                    <li>
                        <a href="" class="yj-group-blue">底盘装甲</a>
                        <a href="">汉高</a>
                    <a href="">伍尔特</a>
                    <a href="">3M</a>
                    <a href="">大能</a>
                    
                    </li>
                    <li>
                        <a href="" class="yj-group-blue">汽车内饰</a>
                        <a href="">地板胶</a>
                        <a href="">座套</a>
                        <a href="">扶手箱</a>
                        <a href="">方向盘把套</a>
                     </li>
                    
                    </ul>
                    </div>
                    </h3>
                    <h3 class="yj-main-h3"> · 维修保养<i class="yj-main-i"></i></h3>
                    <h3 class="yj-main-h3"> · 汽车改装<i class="yj-main-i"></i></h3>
                    <h3 class="yj-main-h3"> · 汽车用品<i class="yj-main-i"></i></h3>
                    <h3 class="yj-main-h3"> · 汽车服务<i class="yj-main-i"></i></h3>
                    <h3 class="yj-main-h3"> · 品牌推荐<i class="yj-main-i"></i></h3>

                </div>
                <div class="yj-header-cont">
                    <img src="http://www.icarzoo.com/uploads/525ce1de57d681381818846.gif" alt="" />
                </div>

                <div class="yj-header-right">
                    <img src="../../image/home-img/1-首页2013.7.6_03.jpg" alt="" />
                    <img src="../../image/home-img/right.png" alt="" />
                    <img src="../../image/home-img/right-top.png" alt="" />
                </div>

            </div>
            <div class="yj-main-right">
                <div class="yj-right-top">
                    <p>车族资讯</p><i>更多>></i></div>
                <ul class="yj-right-msg1">
                    <li><span></span>
                        <p>
                            <a href="">雪佛兰UCLUB “择U而行”自驾游完美收官</a>
                        </p>
                        <h4>2015-07-13</h4></li>
                    <li><span></span>
                        <p>
                            <a href="">2万人报名 寻找江铃轻卡家族第三季火热进行中</a>
                        </p>
                        <h4>2015-07-13</h4></li>
                    <li><span></span>
                        <p>
                            <a href="">穹顶之下：江铃轻卡问良心，守责任</a>
                        </p>
                        <h4>2015-07-13</h4></li>
                    <li><span></span>
                        <p>
                            <a href="">穹顶之下杜绝造假 江铃汽车应对环保挑战</a>
                        </p>
                        <h4>2015-07-13</h4></li>
                    <li><span></span>
                        <p>
                            <a href="">首届“36ER中国民用汽车耐力公开赛”新闻发布会圆满召开</a>
                        </p>
                        <h4>2015-07-13</h4></li>
                    <li><span></span>
                        <p>
                            <a href="">打破地点的局限，记车族网合作伙伴车无忧汽车俱乐部。（上）</a>
                        </p>
                        <h4>2015-07-13</h4></li>
                    <li><span></span>
                        <p>
                            <a href="">8月12日车友须知及汽车改装行业要闻</a>
                        </p>
                        <h4>2015-07-13</h4></li>

                </ul>
            </div>
            <div class="yj-main-body">
                <div class="yj-body-nav"><b>商家促销</b></div>
                <!--matter 内容-->
                <div class="yj-body-matter">
                    <div class="yj-matter-imgnot" v-for="item in filterItms ">
                        <router-link :to="{path:'zydetail',query:{id:item.id} }"><img v-bind:src="item.gimgsrc" />
                            <img src="../../image/home-img/img-down.png" alt="" />
                            <p title="">{{item.gname}}</p>
                            <span>门店价 ¥ {{item.gprise1}}</span>
                            <em>¥ {{item.gprise2}}</em>
                        </router-link>
                    </div>

                    <!--隐藏层-->
                    <div class="yj-matter-show">
                        <div class="yj-matter-imgnot" v-for="item in filterItms1 ">
                            <router-link :to="{path:'zydetail',query:{id:item.id} }"> <img v-bind:src="item.gimgsrc" />
                                <img src="../../image/home-img/img-down.png" alt="" />
                                <p title="">{{item.gname}}</p>
                                <span>门店价 ¥ {{item.gprise1}}</span>
                                <em>¥ {{item.gprise2}}</em>
                            </router-link>
                        </div>

                    </div>

                    <b v-on:click="zyyj" id="zf"><i>展开▼</i><i>收起▲</i></b>
                    <img src="../../image/home-img/img-show.png" alt="" />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: []
            }
        },
        computed: {
            // 过滤条数
            filterItms: function() {
                return this.list.slice(0, 8);
            },
            filterItms1: function() {
                return this.list.slice(8, 17);
            }
        },
        methods: {
            zyyj() {
                //展开和收起
                $(".yj-matter-show ").toggle();
                $("#zf i").eq(0).toggle();
                $("#zf i").eq(1).toggle();
            }
        },
        mounted() {
            //首页导航hover事件
            $(".yj-main-h3 ").hover(function() {
                $(".yj-main-show").eq($(this).index() - 1).addClass("show").parents().siblings().children(".yj-main-show").removeClass("show");
            }, function() {
                $(this).children(".yj-main-show").removeClass("show")
            })
            //          zyshowimg() {
            //               this.$http.get("../../../static/data/homedata.json").then(function(res){
            //                   this.homedata = res;
            //                   console.log(homedata);
            //               }).catch(function(res){
            //                   console.log(res);
            //               })
            //判断若储存有数据则登录和注册隐藏
            if(localStorage.getItem("phone") || localStorage.getItem("email")) {
                $(".zyhide").hide();
                $("#zytuochu").show();
                $("#zymycar").show();
                $("#zymycar i").text(localStorage.phone + localStorage.email);
            }
            //开始进来从数据库调取数据
            var that = this;
            $.ajax({
                url: "api/",
                type: "get",
                dataType: "json",
                success: function(data) {
                    that.list = data;
                }
            })
        }

    }
    /*********轮播图***********/
    var arr = ["http://www.icarzoo.com/uploads/525ce1de57d681381818846.gif", "http://www.icarzoo.com/uploads/525ce1de57d681381818846.gif", "http://www.icarzoo.com/uploads/5247b312bce2f1380430610.gif"];
    var index = 0;
    var timer;
    timer = setInterval(function() {
        $(".yj-header-cont img").attr("src", arr[index])
        index++;
        if(index == 3) {
            index = 0;
        }
    }, 2000)
</script>

<style>
    .yj-main {
        width: 980px;
        /*border: 1px solid red;*/
        margin: 0 auto;
        /*height: 900px;*/
        margin-top: 11px;
        overflow: hidden;
    }
    
    .yj-main-header {
        height: 265px;
        width: 990px;
        /*border: 1px solid;*/
    }
    
    .yj-header-lift {
        width: 183px;
        /*height: 265px;*/
        border: 2px solid #2a4e91;
        float: left;
    }
    
    .yj-header-cont {
        width: 529px;
        height: 270px;
        /*border: 1px solid lawngreen;*/
        margin-left: 11px;
        float: left;
        position: relative;
    }
    
    .yj-header-right {
        width: 240px;
        /*height: 196px;*/
        /*border: 1px solid lime;*/
        margin-left: 18px;
        float: left;
        margin-top: 0px;
    }
    
    .yj-lift-top {
        width: 100%;
        height: 42px;
        background: #2a4e91;
        color: white;
        text-indent: 2em;
        font-size: 16px;
        font-family: MicrosoftYaHei Regular;
        line-height: 42px;
    }
    
    .yj-main-h3 {
        font-size: 14px;
        font-family: Adobe 黑体 Std R;
        text-indent: 1em;
        width: 100%;
        height: 31px;
        line-height: 31px;
        background: #e9e9e9;
        /*border-top:1px solid #fff ;*/
        border-bottom: 1px solid #fff;
        position: relative;
        /*margin-left: 12px;*/
    }
    
    .yj-main-i {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-top: 1px solid #2A4E91;
        border-right: 1px solid #2A4E91;
        transform: rotateZ(45deg);
        margin-left: 80px;
    }
    
    .yj-header-cont img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /*opacity: 0;*/
        /*z-index: -1;*/
    }
    
    .yj-main-body {
        /*width: 730px;*/
        /*border: 1px solid red;*/
        margin-top: 15px;
        overflow: hidden;
    }
    
    .yj-body-nav {
        width: 722px;
        height: 46px;
        font-size: 16px;
        font-family: Adobe 黑体 Std R;
        line-height: 46px;
        text-indent: 2em;
        color: #2A4E91;
        border-left: 6px solid #2A4E91;
        box-shadow: 1px 1px 1px 1px #ccc;
        background: #fff;
    }
    
    .yj-body-matter {
        width: 770px;
        overflow: hidden;
        margin-top: 10px;
        float: left;
        /*display: flex;
        justify-content: space-around;*/
        margin-left: -8px;
    }
    
    .yj-matter-img,
    .yj-matter-imgnot {
        width: 156px;
        /*height: 173px;*/
        box-shadow: 1px 1px 1px 1px #ccc;
        padding: 1px;
        border: 1px solid #ccc;
        background: #fff;
        display: inline-block;
        margin-top: 11px;
        overflow: hidden;
        position: relative;
        margin: 5px 8px;
        padding: 6px 6px 0 6px;
        padding-bottom: 10px;
    }
    
    .yj-matter-imgnot img:nth-child(2) {
        position: absolute;
        right: 1px;
        top: 1px;
        padding: 5px 5px 0 5px;
    }
    
    .yj-matter-imgnot img:nth-child(1) {
        width: 100%;
        height: 95px;
    }
    
    .yj-matter-img {
        float: right;
        margin-left: 14px;
    }
    
    .yj-matter-imgnot p,
    .yj-matter-img p {
        font-size: 12px;
        font-family: Adobe 黑体 Std R;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 30px;
        color: #666;
        margin-top: 6px;
        margin-left: 5px;
    }
    
    .yj-matter-imgnot span,
    .yj-matter-img span {
        font-size: 12px;
        font-family: Adobe 黑体 Std R;
        /*white-space:nowrap;*/
        overflow: hidden;
        text-overflow: ellipsis;
        color: #8c8a8a;
        float: left;
        margin-left: 5px;
    }
    
    .yj-matter-imgnot em,
    .yj-matter-img em {
        font-size: 16px;
        font-family: Adobe 黑体 Std R;
        color: #e40d1a;
        float: right;
        margin-right: 5px;
        line-height: 18px;
    }
    
    .yj-body-matter b {
        float: right;
        margin-right: 45px;
        position: relative;
        color: #2a4e91;
        cursor: pointer
    }
    
    .yj-body-matter b em {
        /*content: "";*/
        position: absolute;
        /*width: 0;*/
        /*height: 0;*/
        border: 5px solid transparent;
        /*border-top:0 ;*/
        bottom: 2px;
        left: 100%;
        border-top: 5px solid #2a4e91;
    }
    
    .yj-body-matter>img {
        width: 735px;
    }
    
    .yj-main-right {
        width: 237px;
        background: #fff;
        float: right;
        border: 1px solid #ccc;
        overflow: hidden;
    }
    
    .yj-right-top {
        width: 100%;
        height: 30px;
        color: black;
        font-size: 16px;
        padding-left: 10px;
        margin-top: 20px;
    }
    
    .yj-right-top p {
        display: inline-block;
        font-family: Adobe 黑体 Std R;
        font-weight: 900;
        margin-right: 100px;
    }
    
    .yj-right-top i {
        display: inline-block;
        font-family: Adobe 黑体 Std R;
        color: #2a4e91;
        font-size: 12px;
        cursor: pointer
    }
    
    .yj-right-msg1 {
        padding: 0 20px;
    }
    
    .yj-right-msg1 li {
        position: relative;
        border-bottom: 1px solid #ccc;
        padding: 10px 0 10px 0;
        font-size: 12px;
    }
    
    .yj-right-msg1 li p a {
        display: inline-block;
        color: #666;
        font-family: Adobe 黑体 Std R;
        /*height: 34px;*/
        overflow: hidden;
    }
    
    .yj-right-msg1 li h4 {
        font-family: Adobe 黑体 Std R;
        line-height: 33px;
        color: #666;
    }
    
    .yj-right-msg1 span {
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #666;
        position: absolute;
        left: -10px;
        top: 15px;
    }
    
    .yj-matter-show {
        display: none;
    }
    
    #zf {
        margin-bottom: 5px;
    }
    
    #zf i:nth-child(2) {
        display: none;
    }
    
    .yj-main-show {
        width: 486px;
        background: #fff;
        float: left;
        position: absolute;
        left: 185px;
        top: -40px;
        z-index: 110;
        padding: 0 20px;
        display: none;
    }
    
    .yj-main-show li {
        font-family: SimSun Regular;
        font-size: 12px;
        height: 38px;
        line-height: 38px;
        border-bottom: 1px solid #ccc;
    }
    
    .yj-main-show li a {
        padding: 0 10px;
        color: #666;
    }
    
    .yj-group-red {
        color: red;
    }
    
    .yj-main-show .yj-group-blue {
        color: #096edf;
    }
    
    .show {
        display: block;
    }
</style>