<template>
    <div class="group-buy">
        <div class="yj-main">
            <div class="yj-top-hint">您有<span> <strong>2</strong> </span>个订单还没有付款,
                <a href=""> 快来支付吧! </a>以免团购抢光了!</div>
            <div class="yj-group-box">
                <!--serve 服务-->
                <div class="yj-group-serve">
                    <span><router-link to="/aaa">热门团购：</router-link></span>
                    <a href="" class="yj-group-red">贴膜</a>
                    <a href="" class="yj-group-red">洗车</a>
                    <a href="" class="yj-group-red">装饰</a>
                    <a href="" class="yj-group-blue">装甲</a>
                    <a href="" class="yj-group-red">维修</a>
                    <a href="" class="yj-group-blue">抽奖</a>
                </div>
                <!--kid 类-->
                <div class="yj-kid-box">
                    <div class="yj-group-kid">
                        <strong> <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-fenlei"></use>
</svg> 分类:</strong>
                        <a href="" class="yj-group-bgblue">全部</a>
                        <a href="">汽车美容(<span>1078</span>)</a>
                        <a href="">汽车装饰(<span>1078</span>)</a>
                        <a href="">维修保养(<span>1078</span>)</a>
                        <a href="">汽车改装(<span>1078</span>)</a>
                        <a href="">汽车用品(<span>1078</span>)</a>
                        <a href="">汽车服务(<span>1078</span>)</a>
                    </div>
                    <!--area 地区-->
                    <div class="yj-group-area">
                        <strong> <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-zuobiao"></use>
</svg> 区域:</strong>
                        <a href="" class="yj-group-bgblue">全部</a>
                        <a href="">东城区(<span>1078</span>)</a>
                        <a href="">西城区(<span>1078</span>)</a>
                        <a href="">玄武区(<span>1078</span>)</a>
                        <a href="">朝阳区(<span>1078</span>)</a>
                        <a href="">丰台区(<span>1078</span>)</a>
                        <a href="">石景区(<span>1078</span>)</a>
                        <a href="">海淀区(<span>1078</span>)</a>
                        <a href="">通州区(<span>1078</span>)</a>
                        <a href="">顺义区(<span>1078</span>)</a>
                        <a href="">昌平区(<span>1078</span>)</a>
                        <a href="">大兴区(<span>1078</span>)</a>
                    </div>
                </div>
                <!--sort 排序-->
                <div class="yj-group-sort">
                    <span>默认排序:</span>
                    <a v-on:click="zysale">销量
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-z090"></use>
                        </svg>
                    </a>
                    <a v-on:click="zyprise">价格
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-z089"></use>
                        </svg>
                    </a>
                    <a href="">发布时间
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-z090"></use>
                        </svg>
                    </a>
                    <div style="clear: both;"></div>
                </div>
            </div>
            <div class="yj-group-left">
                <div class="yj-main-box">
                    <ul>
                        <li class="yj-group-pay" v-for="item in filterItms">

                            <router-link :to="{path:'zydetail',query:{id:item.id} }">
                                <img :src="item.gimgsrc" alt="" />
                                <a href="">
                                    <h4>{{item.gname}}</h4></a>
                                <span title="">
                            {{item.gdetail}}
                        </span>
                                <div class="yj-group-img">
                                    <strong>¥{{item.gprise1}}</strong>
                                    <b>门店价:￥{{item.gprise2}}</b>
                                </div>
                                <a href=""><img src="../../image/group-buy-img/groupbg2.png" /></a>
                                <i><em class="yj-group-red">{{item.gbuyed}}</em>人已购买</i>
                            </router-link>
                        </li>

                    </ul>

                </div>
            </div>
            <div class="yj-group-right">
                <a href=""><img class="yj-margin" src="../../image/group-buy-img/groupone.png" alt="" /></a>
                <a href=""><img class="yj-margin" src="../../image/group-buy-img/grouptwo.png" alt="" /></a>
                <div class="yj-group-skip yj-margin">
                    <h3>热卖排行榜</h3>
                    <ul>
                        <li>
                            <a href="">
                                <h4><span>1</span> ️新美特超值套餐</h4>
                                <img src="../../image/group-buy-img/right1.png" alt="" />
                                <b class="yj-group-red">¥459</b>
                                <i><em>500</em>人已购买</i>

                            </a>
                        </li>
                        <li>
                            <a href="">
                                <h4><span>1</span> ️新美特超值套餐</h4>

                                <img src="../../image/group-buy-img/right1.png" alt="" />
                                <b class="yj-group-red">¥459</b>
                                <i><em>500</em>人已购买</i>

                            </a>
                        </li>
                        <li>
                            <a href="">
                                <h4><span>1</span> ️新美特超值套餐</h4>
                                <img src="../../image/group-buy-img/right1.png" alt="" />
                                <b class="yj-group-red">¥459</b>
                                <i><em>500</em>人已购买</i>

                            </a>
                        </li>
                        <li>
                            <a href="">
                                <h4><span>1</span> ️新美特超值套餐</h4>

                                <img src="../../image/group-buy-img/right1.png" alt="" />
                                <b class="yj-group-red">¥459</b>
                                <i><em>500</em>人已购买</i>

                            </a>
                        </li>
                    </ul>
                </div>
                <!--spoil 抽奖-->
                <div class="yj-group-spoil yj-margin">
                    <div class="yj-spoil-top">
                        <p class="yj-group-red">0元抽奖是真的吗?</p>
                        <a href="" class="yj-group-blue">车族圆梦系列抽奖>></a>
                    </div>
                    <a href="">北京运通嘉宝S4 <span class="yj-group-blue">抽奖结果</span></a>

                    <a href="">博瑞祥云奥迪购车惠 <span class="yj-group-red">火爆进行中</span></a>
                    <a href="">购BMW3系尊享万元开业礼 <span class="yj-group-red">火爆进行中</span></a>
                </div>
                <div class="yj-right-msg yj-margin">

                    <h3>热卖排行榜</h3>
                    <span>可以在线申请七天退款了！<a href="" class="yj-group-blue">详情</a></span>
                    <span><a href="" class="yj-group-blue">立即充值，</a>手机抢购更方便！</span>
                    <span>最新<a href="" class="yj-group-blue">媒体报道</a></span>
                </div>
                <img src="../../image/group-buy-img/group3.jpg" />
            </div>
            <div class="yj-group-pag">
                <button v-on:click="next">上一页</button>
                <button v-on:click="last">下一页</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                glist: [],
                count: 3
            }
        },
        methods: {
            next() {
                this.count--;
                if(this.count <= 3) {
                    this.count = 3;
                }
            },
            last() {
                this.count++;
                if(this.count >= Math.floor(this.glist.length / 6)) {
                    this.count = Math.floor(this.glist.length / 6);
                }
            },
            zyprise() {
                var that = this;
                $.ajax({
                    url: "api/zyprises",
                    type: "get",
                    dataType: "json",
                    success: function(data) {
                        that.glist = data;
                    }
                })
            },
            zysale() {
                var that = this;
                debugger;
                $.ajax({
                    url: "api/zysale",
                    type: "get",
                    dataType: "json",
                    success: function(data) {
                        that.glist = data;
                    }
                })
            }
        },
        computed: {
            filterItms: function() {
                console.log(this.count);
                return this.glist.slice(this.count * 6, this.count * 6 + 6);
            }
        },
        mounted() {
            var that = this;
            $.ajax({
                url: "api/",
                type: "get",
                dataType: "json",
                success: function(data) {
                    that.glist = data;
                }
            })
        }
    }
</script>

<style scoped>
    .group-buy {
        overflow: hidden;
    }
    /*整体内容的框*/
    
    .yj-main {
        width: 980px;
        /*border: 1px solid red;*/
        margin: 0 auto;
        /*overflow: hidden;*/
        margin-top: 11px;
        position: relative;
    }
    /*抢购提示框*/
    
    .yj-top-hint {
        width: 980px;
        /*height: 41px;*/
        background: #fff;
        line-height: 41px;
        border: 1px solid #ccc;
        text-indent: 2em;
    }
    
    .yj-top-hint span {
        color: red;
        font-size: 14px;
    }
    
    .yj-top-hint a {
        color: red;
        font-size: 14px;
    }
    /*服务类提示框*/
    
    .yj-group-box {
        width: 980px;
        background: #fff;
        /*height: 287px;*/
        margin-top: 6px;
        box-shadow: 1px 1px 1px 1px #ccc;
    }
    
    .yj-group-serve {
        width: 100%;
        height: 34px;
        border-bottom: 1px solid #ccc;
        line-height: 37px;
    }
    
    .yj-group-serve span {
        display: inline-block;
        font-size: 12px;
        font-family: Adobe 黑体 Std R;
        font-weight: 900;
        text-indent: 2em;
    }
    
    .yj-group-serve a {
        padding: 0 10px;
    }
    
    .yj-kid-box {
        width: 100%;
        /*height: 219px;*/
        border-bottom: 1px solid #ccc;
    }
    
    .yj-group-area,
    .yj-group-kid {
        padding: 0 20px;
    }
    
    .yj-group-area strong.yj-group-kid strong {
        padding: 10px;
    }
    
    .yj-group-area a,
    .yj-group-kid a {
        display: inline-block;
        padding: 10px 10px;
        color: #2a4e91;
    }
    
    .yj-group-area span,
    .yj-group-kid span {
        color: #ccc;
    }
    
    .yj-group-sort {
        padding: 5px;
    }
    
    .yj-group-sort a,
    .yj-group-sort span {
        display: inline-block;
        padding: 3px 10px;
        background: #f9f9f9;
        float: left;
        border: 1px solid #ccc;
        color: black;
    }
    
    .yj-group-sort span {
        margin-left: 2em;
    }
    
    .yj-kid-box .yj-sort-bggray {
        background: #eeeded;
    }
    
    .yj-kid-box .yj-group-bgblue {
        background: #2a4e91;
        color: white;
        padding: 2px 5px;
    }
    /*定位超出处理方法*/
    /**/
    
    .yj-group-left {
        float: left;
        /*border: 1px solid red;*/
        width: 740px;
        display: inline-block;
    }
    
    .yj-main-box {
        float: left;
        width: 100%;
        margin-left: -9px;
        overflow: hidden;
    }
    
    .yj-group-left ul {
        float: left;
        width: 100%;
        margin-left: 9px;
    }
    /***/
    
    .yj-group-pay {
        background: #fff;
        width: 321px;
        height: 332px;
        border: 1px solid #ccc;
        padding: 13px;
        position: relative;
        display: inline-block;
        float: left;
        margin-right: 19px;
        margin-top: 14px;
    }
    
    .yj-group-pay h4 {
        font-size: 18px;
        font-family: Adobe 黑体 Std R;
        font-weight: 900;
        color: black;
    }
    
    .yj-group-pay span {
        display: inline-block;
        font-size: 16px;
        font-family: Adobe 黑体 Std R;
        color: #666;
        height: 44px;
        overflow: hidden;
    }
    
    .yj-group-img {
        width: 231px;
        height: 70px;
        background: url("../../image/group-buy-img/grounpbg.png") no-repeat;
        background-size: cover;
        position: absolute;
        left: -10px;
    }
    
    .yj-group-img strong {
        font-size: 30px;
        font-family: FZHTJW -GB1-0;
        color: #e40d1a;
        line-height: 70px;
        padding: 0 17px;
    }
    
    .yj-group-img b {
        font-size: 12px;
        font-family: Adobe 黑体 Std R;
        color: #666;
        line-height: 70px;
    }
    
    .yj-group-img+a {
        float: right;
        padding: 15px 0;
        display: block;
    }
    
    .yj-group-pay i {
        position: absolute;
        right: 27px;
        bottom: 20px;
    }
    
    .yj-group-right {
        width: 238px;
        /*border: 1px solid;*/
        float: right;
        margin-top: 14px;
    }
    
    .yj-group-skip {
        padding: 19px 15px 0;
        background: #fff;
        border: 1px solid #ccc;
    }
    
    .yj-right-msg h3.yj-group-skip h3 {
        font-size: 14px;
        font-family: SimSun Regular;
    }
    
    .yj-group-skip li {
        padding: 19px 3px 3px;
        position: relative;
    }
    
    .yj-group-skip li:hover {
        background: #a7a7a7;
    }
    
    .yj-group-skip li h4 {
        font-size: 12px;
        font-family: SimSun Regular;
        color: black;
        padding: 0 0 5px;
    }
    
    .yj-group-skip li h4 span {
        display: inline-block;
        width: 18px;
        height: 18px;
        background: #1376ce;
        text-align: center;
        line-height: 18px;
        border-radius: 3px;
        color: white;
    }
    
    .yj-group-skip li b {
        position: absolute;
        bottom: 25px;
        padding: 2px;
    }
    
    .yj-group-skip li i {
        color: #ccc;
        font-weight: 900;
        padding: 5px;
    }
    
    .yj-group-skip li i em {
        color: black;
        font-weight: 900;
    }
    
    .yj-margin {
        margin-bottom: 11px;
    }
    
    .yj-group-spoil {
        border: 1px solid #ccc;
        background: #fff;
        padding: 11px;
    }
    
    .yj-spoil-top {
        width: 100%;
        background: url("../../image/group-buy-img/right2.png") no-repeat;
        background-size: 71px 58px;
        padding: 10px 0 0 72px;
    }
    
    .yj-spoil-top p {
        font-size: 16px;
        font-weight: 900;
    }
    
    .yj-right-msg span,
    .yj-group-spoil a {
        line-height: 32px;
        display: block;
        color: black;
    }
    
    .yj-group-spoil a:hover {
        color: #096edf;
    }
    
    .yj-right-msg {
        padding: 11px;
        background: #fff;
        border: 1px solid #ccc;
        background: #fff;
    }
    
    .yj-group-pag {
        width: 736px;
        height: 91px;
        float: left;
        line-height: 91px;
        text-align: center;
    }
    
    .yj-group-pag a {
        background: #fafafa;
        padding: 7px 9px;
        color: #096edf;
    }
    
    .yj-group-red {
        color: red;
    }
    
    .yj-group-blue {
        color: #096edf;
    }
    
    .yj-group-pay>a>img {
        width: 320px;
        height: 179px;
    }
</style>