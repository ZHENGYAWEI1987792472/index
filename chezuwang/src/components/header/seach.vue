<template>
    <div class="yw-seach">
        <div class="yw-seach-list">
            <div class="zyshouwlist">
                <h1>您所搜索的结果如下：</h1>
                <div class="yj-main-box">
                    <ul>
                        <li class="yj-group-pay" v-for="item in filterItm">

                            <router-link to="/">
                                <img :src="item.gimgsrc" alt="" />
                                <a href="">
                                    <h4>{{item.gname}}</h4></a>
                                <span title="">
                             {{item.gdetail}}
                        </span>
                                <div class="yj-group-img">
                                    <strong>¥{{item.gprise1}}</strong>
                                </div>
                                <a href=""><img src="../../image/group-buy-img/groupbg2.png" /></a>
                                <i><em class="yj-group-red">{{item.gbuyed}}</em>人已购买</i>
                            </router-link>
                        </li>

                    </ul>

                </div>
            </div>
            <div class="zyhidelist">
                <img src="../../image/group-buy-img/d058ccbf6c81800afeab78a1b13533fa838b47d7.jpg" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["msg"],
        data() {
            return {
                filterItms: [{
                        "gimgsrc": "http://www.icarzoo.com/UploadFiles/193fb1de21e448d2955ca9c8667ae022.jpg",
                        "gname": "宇华精洗98元",
                        "gdetail": "【朝阳区】车族价仅98元，即可享受【宇华汽修】原价1550元的精洗内室套餐！服务项目包括：清洗内室+室内桑拿清毒+轮胎保养+轮毂清洗+精致洗车+真皮座椅养护+香蕉蜡+轻微划痕！爱车就该经常保养它！",
                        "gprise1": "98",
                        "gprise2": "1550",
                        "gbuyed": "75"
                    },
                    {
                        "gimgsrc": "http://www.icarzoo.com/UploadFiles/1d9b3707bdb24aea8dc848cdf764533c.jpg",
                        "gname": "普利司通清洁",
                        "gdetail": "朝阳北路】仅88元！即可享受100%无接触汽车清洁套餐！项目含MOC无接触洗车液+MOC水晶甲衣镀膜+仪表台清洁上光+内饰清洁+发动机清洁+高温桑拿+臭氧负离子双重消毒！媲美洗车王国同等产品！",
                        "gprise1": "88",
                        "gprise2": "88",
                        "gbuyed": "35"
                    },
                    {
                        "gimgsrc": "http://www.icarzoo.com/UploadFiles/d4e908ef43d6472caecc62c006334dc2.jpg",
                        "gname": "车爵仕镀膜998元",
                        "gdetail": "【朝阳区】车族价仅998元，即可享受原价2480元的车爵仕漆面液晶镀膜套装组，具体包括：车爵仕漆面液晶镀膜3年车漆镀膜、360°全能手工精洗（赠）、漆面炫彩还原（赠）！耐腐蚀、耐高温、保光亮长达3年，新一代创新可以成果打造隐形晶甲车衣！",
                        "gprise1": "998",
                        "gprise2": "2480",
                        "gbuyed": "81"
                    },
                    {
                        "gimgsrc": "http://www.icarzoo.com/UploadFiles/caa7956e7eb146a8b1c30591ecf6f52d.jpg",
                        "gname": "新天地内饰清洗",
                        "gdetail": "【朝阳区】车族价仅169元！享受原价530元洗车新天地内饰清洗套餐『全车内饰无划痕清洁+精致洗车』专业内饰保养....",
                        "gprise1": "169",
                        "gprise2": "530",
                        "gbuyed": "65"
                    },
                    {
                        "gimgsrc": "http://www.icarzoo.com/UploadFiles/385b25f6ebd44b4bab855fadd1eac38c.jpg",
                        "gname": "达盛达业全车镀膜养护",
                        "gdetail": "【【石景山区】车族价仅售258元，乐享价值1997元达盛达业汽车装饰美容中心龟牌全车镀膜养护套餐！专业服务、细心....",
                        "gprise1": "258",
                        "gprise2": "1997",
                        "gbuyed": "1"
                    },
                    {
                        "gimgsrc": "http://www.icarzoo.com/UploadFiles/099212d256694782b4b5f8b4696afc3b.jpg",
                        "gname": "友福20次洗车",
                        "gdetail": "【友福西三旗店】仅195元，即可享受原价300元20次精致洗车套餐！快乐出行，靓丽无阻,让爱车跟您一起散发无限....",
                        "gprise1": "195",
                        "gprise2": "300",
                        "gbuyed": "45"
                    }
                ]
            }
        },
        computed: {
            // 过滤条数
            filterItm: function() {
                return this.filterItms.slice(0, 7);
            }

        },
        mounted() {
            var that = this;
            $.ajax({
                type: "get",
                url: "api/zycha",
                dataType: "json",
                data: {
                    detail: localStorage.msg
                },
                success: function(data) {
                    if(data.length) {
                        that.filterItms = data;
                        localStorage.data = data;
                        localStorage.removeItem("msg");
                    } else {
                        $(".zyshouwlist").hide();
                        $(".zyhidelist").show();
                    }

                }
            });

            //           window.location.reload();

        }
    }
</script>

<style>
    .yw-seach {
        width: 980px;
        margin: 10px auto;
    }
    
    .zyshouwlist {
        overflow: hidden;
        /*display: none;*/
    }
    
    .yw-seach h1 {
        font-size: 16px;
    }
    
    .yj-main-box {
        float: left;
        width: 100%;
        margin-left: -9px;
        overflow: hidden;
    }
    
    .yj-group-pay {
        background: #fff;
        width: 279px;
        height: 322px;
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
        /*height: 44px;*/
        width: 300px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    
    .yj-group-img {
        width: 160px;
        height: 70px;
        background: url("../../image/group-buy-img/grounpbg1.png") no-repeat;
        background-size: cover;
        position: absolute;
        left: -10px;
    }
    
    .yj-group-img strong {
        font-size: 30px;
        font-family: FZHTJW -GB1-0;
        color: #e40d1a;
        line-height: 70px;
        padding: 0 40px;
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
    
    .yj-group-pay>a>img {
        width: 280px;
        height: 179px;
    }
    
    .yj-group-pay i {
        position: absolute;
        right: 27px;
        bottom: 20px;
    }
    
    .zyhidelist {
        text-align: center;
        display: none;
    }
    
    .zyhidelist img {
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>