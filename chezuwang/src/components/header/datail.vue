<template>
    <div class="zydetail">
        <div class="yj-main">
            <!--details详情-->
            <div class="yj-details-top">
                <span>朝阳区</span>>>
                <span>三元桥</span>>>
                <span>汽车装饰</span>>>
                <span>贴膜</span>>>
                <span class="yj-group-blue">爱义行</span>
            </div>
            <!--res 物品-->
            <div class="yj-details-left">
                <div class="yj-details-box">
                    <div class="yj-details-res">

                        <div class="yj-res-top">
                            <h1>{{shuju.gname}}</h1>
                            <p>{{shuju.gdetail}}</p>
                            <div class="yj-group-img">
                                <strong>¥ <i>{{shuju.gprise1}}</i></strong>
                                <b>门店价：￥<i>{{shuju.gprise2}}</i></b>
                                <span>4.9折</span>
                            </div>
                            <div class="yj-details-message">
                                <div class="yj-message-header">
                                    <a>VIP关注</a>
                                    <button v-on:click="joincar"><svg class="icon yj-group-blue" aria-hidden="true">
  <use xlink:href="#icon-gouwuche"></use>
</svg> 加入购物车</button>
                                </div>
                                <div class="yj-message-main">
                                    <span><em class="yj-group-red">49</em>人已关注</span><br />
                                    <b>剩余<i class="yj-group-red">3</i>天以上</b>
                                </div>
                                <div class="yj-message-foot">
                                    <span>支持7天退货</span>
                                    <span>支持过期退款</span>
                                </div>
                            </div>
                            <img class="buyimg" :src="shuju.gimgsrc" alt="" />

                        </div>
                        <div class="yj-res-bottom">
                            <a href="">
                                <svg class="icon yj-group-blue" aria-hidden="true">
                                    <use xlink:href="#icon-baoji"></use>
                                </svg> <i>收藏本单</i></a>
                            <div class="bdsharebuttonbox">
                                <a href="#" class="bds_more" data-cmd="more"></a>
                                <a href="#" class="bds_qzone" data-cmd="qzone"></a>
                                <a href="#" class="bds_tsina" data-cmd="tsina"></a>
                                <a href="#" class="bds_tqq" data-cmd="tqq"></a>
                                <a href="#" class="bds_renren" data-cmd="renren"></a>
                                <a href="#" class="bds_weixin" data-cmd="weixin"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="clear: both;"></div>
            </div>
            <!--打分框 mark-->
            <div class="yj-details-mark">
                会员评价 <span class="yj-group-red">4.7</span>
                <em>
            <b><img src="../../image/group-details-img/detalisjlt.png" alt="" /></b>
            
        </em> 已有<i>3</i>人评价
                <a href="" class="yj-group-blue">查看全部评价</a>
            </div>

            <!--地图框 map-->
            <div class="yj-map-top">
                <a href="#local">商家位置</a>
                <a href="#order">本单详情</a>
                <a href="#pingjia">消费评价</a>

            </div>
            <div class="yj-details-map">
                <img src="../../image/group-details-img/details5.png" alt="" />
                <!--商家位置 merchant-->
                <div class="yj-map-merchant">
                    <h4 class="yj-map-h3"><a name="local"></a>商家位置</h4>
                    <div class="yj-merchant-left">
                        <div id="map" style="width:314px;height:252px"></div>
                        <button>🔍查看完整地图</button>
                    </div>
                    <div class="yj-merchant-right">
                        <h3 class="yj-group-blue">2店通用(太平庄店)</h3> 商家星级:
                        <em>
            <b><img src="../../image/group-details-img/detalisjlt.png" alt="" /></b>
            
      </em><br /> 地址：通州区翠屏里7号楼一层商2-4TR <br /> 01060526091、13370159666 <br />
                        <a href="" class="yj-group-blue">查看地图>></a>
                        <a href="" class="yj-group-blue">驾车路线>></a>
                    </div>

                </div>
                <h4 class="yj-map-h3"><a name="order"></a>本单详情</h4>
                <p class="yj-map-p">凭车族劵可享受潇洒车汽车龙膜套餐(价值5590元,车族价1550元)</p>
                <table border="" cellspacing="" cellpadding="">
                    <tr>
                        <th>内容</th>
                        <th>单价</th>
                        <th>规格</th>
                        <th>数量</th>
                        <th>数量</th>
                        <th>单价</th>
                        <th>小计</th>
                    </tr>
                    <tr>
                        <td>龙膜N65前挡膜</td>
                        <td>1880元</td>
                        <td>1车</td>
                        <td>18</td>
                        <td>1880元</td>
                        <td>1车</td>
                        <td>1880元</td>
                    </tr>
                    <tr>
                        <td>3M新车除异味</td>
                        <td>1880元</td>
                        <td>1车</td>
                        <td>18</td>
                        <td>1880元</td>
                        <td>1车</td>
                        <td>1880元</td>
                    </tr>
                    <tr>
                        <th colspan="8">以下贴膜二选一</th>

                    </tr>
                    <tr>
                        <td>龙膜CTX30侧后挡膜</td>
                        <td>1880元</td>
                        <td>1车</td>
                        <td>18</td>
                        <td>1880元</td>
                        <td>1车</td>
                        <td>1880元</td>
                    </tr>
                    <tr>
                        <td>龙膜CTX15侧后挡膜</td>
                        <td>1880元</td>
                        <td>1车</td>
                        <td>18</td>
                        <td>1880元</td>
                        <td>1车</td>
                        <td>1880元</td>
                    </tr>
                    <tr>
                        <td colspan="6">总计:</td>
                        <td></td>
                    </tr>
                </table>
                <p class="yj-map-p"><span class="yj-map-span"></span> 3M新车除异味含臭氧消毒+洗车 </p>
                <p class="yj-map-p"><span class="yj-map-span"></span> 打飞机管理会计宏磊股份就好了规范结婚礼服橘红颗粒房管局花开富贵就会立刻黄金分割黄金分割</p>
                <h3 class="yj-map-h3">购买须知</h3>
                <div class="yj-map-msg">
                    <p class="yj-map-p"><span class="yj-map-span"></span> 有效期：2012.5.18 至 2012.11.18 </p>
                    <p class="yj-map-p"><span class="yj-map-span"></span> 有效期内周末、法定节假日通用 </p>
                    <p class="yj-map-p"><span class="yj-map-span"></span> 美团券使用时间：08:30-18:00 </p>
                    <p class="yj-map-p"><span class="yj-map-span"></span> 请至少提前一天致电各分店预约 </p>
                    <p class="yj-map-p"><span class="yj-map-span"></span> 本单不限制购买数量 </p>
                    <p class="yj-map-p"><span class="yj-map-span"></span> 凭美团劵到店消费补课同时享受店内其他优惠 </p>

                </div>
                <h3 class="yj-map-h3">专业防护让您的爱车潇洒起来</h3>
                <p class="yj-map-p"><span class="yj-map-span"></span> 没车不限美团劵使用张数选择美国龙膜，等于选择安全，选择品牌，选择品质，选择绿色、自然、低碳的汽车驾乘享受。美国LLumar龙膜是CPFilms公司在美国生产的产品，CPFFILMS是世界上最大的汽车膜生产厂家,无论制造规模、技术领先程度、还是从销售、品牌知名度，都占据全球绝对领先的位置，美国威固（V-KOOL）汽车膜生产公司于2010年被龙膜全资收购成为其旗下字公司；美国LLumar龙膜通过世界大多数贴膜律法规定，所有产品通过ISO9001质量认证，质保七年，采用金属喷镀，深层染色技术，合成和粘胶，抗划伤深层及专业安装工艺，所有这些综合应用造就了龙膜成为全球无与伦比的玻璃贴膜领导品牌。 </p>
                <img class="yj-map-p" src="../../image/group-details-img/details6.png" alt="" />
                <h3 class="yj-map-h3">两家分店的消费评价 <a href="###" style="color: lightskyblue;float: right;">我要评价>></a></h3>
                <!--rank 等级-->
                <div class="yj-map-rank">
                    <div class="yj-rank-left">
                        <span class="yj-map-h1">4.3</span>分<br />
                        <em>
            <b><img src="../../image/group-details-img/detalisjlt.png" alt="" /></b>
            
      </em><br /> 已有
                        <i class="yj-group-red">23</i>人评价
                    </div>
                    <div class="yj-rank-right">
                        服务质量:<em>
            <b><img src="../../image/group-details-img/detalisjlt.png" alt="" /></b>
            
      </em><br /> 服务环境:
                        <em>
            <b><img src="../../image/group-details-img/detalisjlt.png" alt="" /></b>
            
      </em><br /> 服务效率:
                        <em>
            <b><img src="../../image/group-details-img/detalisjlt.png" alt="" /></b>
            
      </em><br /> 服务态度:
                        <em>
            <b><img src="../../image/group-details-img/detalisjlt.png" alt="" /></b>
            
      </em><br />
                    </div>
                </div>
                <h3 class="yj-map-h3"><a name="pingjia"></a>全部评价 <a href="###" style="color: lightskyblue;float: right;">按时间↓ </a></h3>
                <div class="yj-map-remark">
                    <div class="yj-remark-left">
                        <img src="../../image/group-details-img/details7.png" alt="" />
                    </div>
                    <div class="yj-remark-cont">
                        <span>凌雷<i><svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-vipicon-s2"></use>
</svg></i><em>2017-3-14</em></span><br /> 服务质量:
                        <select class="yj-down" v-on:blur="zyse($event)">
                            <!--<option value="请选择">请选择</option>-->
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select> <strong></strong> 服务环境:
                        <select class="yj-down" v-on:blur="zyse($event)">
                            <!--<option value="请选择">请选择</option>-->
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select> <strong></strong><br /> 服务效率:
                        <select class="yj-down" v-on:blur="zyse($event)">
                            <!--<option value="请选择">请选择</option>-->
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select> <strong></strong> 服务价格:
                        <select class="yj-down" v-on:blur="zyse($event)">
                            <!--<option value="请选择">请选择</option>-->
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select> <strong></strong><br /> 评价: <br />
                        <textarea></textarea><br /> 服务项目:
                        <select class="yj-down">

                            <option value="汽车美容">汽车美容</option>
                            <option value="汽车装潢">汽车装潢</option>
                            <option value="维修保养">维修保养</option>
                            <option value="汽车改装">汽车改装</option>
                            <option value="汽车用品">汽车用品</option>
                            <option value="汽车服务">汽车服务</option>
                            <option value="品牌推荐">品牌推荐</option>
                        </select> <strong></strong>
                        <button v-on:click="tijiao">提交</button>

                    </div>
                    <hr />

                    <div class="zyshowlistpinglun">
                        <ul v-for="lists in pingjialist">
                            <li>
                                <img src="../../image/group-details-img/details7.png" />
                                <span><span>{{lists.uphone+lists.uemail}}<i><svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-vipicon-s2"></use>
</svg></i><em>{{lists.utime}}</em></span><br /> 服务质量: <b>{{lists.uquality}}</b><strong></strong> 服务环境: <b>{{lists.uenvir}}</b><strong></strong><br /> 服务效率: <b>{{lists.usever}}</b><strong></strong> 服务价格: <b>{{lists.uprise}}</b><strong> <i  class="zyjinglingtu"  :style="{backgroundPositionX:lists.uxing}" ></i></strong>
                                </span>
                                <p>评论语:</p>
                                <p>{{lists.ucont}}</p>
                                <p> 服务项目:{{lists.uitem}}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="yj-group-pag">
                        <a href="">上一页</a>
                        <a href="" class="yj-group-bgblue">1</a>
                        <a href="">2</a>
                        <a href="">3</a>
                        <a href="">下一页</a>
                        <a href="">最后一页</a>
                    </div>

                </div>
                <div class="yj-map-show">
                    <strong>¥ 80</strong>
                    <span>门店价 <br /><i style="text-decoration: line-through;">¥ 980</i></span>
                    <span>折扣 <br /><i>3折</i></span>
                    <span>已购买 <br /><i>1486人</i></span>
                    <div class="yj-show-right">
                        <a>VIP关注</a>
                        <button><svg class="icon yj-group-blue" aria-hidden="true">
  <use xlink:href="#icon-gouwuche"></use>
</svg> 加入购物车</button>
                    </div>
                </div>
                <div style="clear: both;"></div>
                <div class="yj-body-matter">
                    <div class="yj-matter-imgnot">
                        <img src="../../image/home-img/img1.png" />
                        <img src="../../image/home-img/img-down.png" alt="" />
                        <p title="第三代全新科技数字轿车,全新奥迪7豪华版">第三代全新科技数字轿车,全新奥迪7豪华版</p>
                        <span>门店价 ¥ 101</span>
                        <em>¥ 99</em>
                    </div>
                    <div class="yj-matter-img">
                        <img src="../../image/home-img/img1.png" />

                        <p title="第三代全新科技数字轿车,全新奥迪7豪华版">第三代全新科技数字轿车,全新奥迪7豪华版</p>
                        <span>门店价 ¥ 101</span>
                        <em>¥ 99</em>
                    </div>
                    <div class="yj-matter-img">
                        <img src="../../image/home-img/img1.png" />

                        <p title="第三代全新科技数字轿车,全新奥迪7豪华版">第三代全新科技数字轿车,全新奥迪7豪华版</p>
                        <span>门店价 ¥ 101</span>
                        <em>¥ 99</em>
                    </div>
                    <div class="yj-matter-img">
                        <img src="../../image/home-img/img1.png" />

                        <p title="第三代全新科技数字轿车,全新奥迪7豪华版">第三代全新科技数字轿车,全新奥迪7豪华版</p>
                        <span>门店价 ¥ 101</span>
                        <em>¥ 99</em>
                    </div>
                </div>
                <div class="yj-details-right">
                    <a href=""><img class="yj-margin" src="../../image/group-buy-img/groupone.png" alt="" /></a>
                    <a href=""><img class="yj-margin" src="../../image/group-buy-img/grouptwo.png" alt="" /></a>
                    <div class="yj-group-skip yj-margin">
                        <h3>最近浏览</h3>
                        <ul>
                            <li>
                                <a href="">

                                    <img src="../../image/group-buy-img/right1.png" alt="" />
                                    <b>第三代全新科技数字轿车,全新奥迪7豪华版</b>
                                    <i><em class="yj-group-red">500</em>人已购买</i>

                                </a>
                            </li>
                            <li>
                                <a href="">

                                    <img src="../../image/group-buy-img/right1.png" alt="" />
                                    <b>第三代全新科技数字轿车,全新奥迪7豪华版</b>
                                    <i><em class="yj-group-red">500</em>人已购买</i>

                                </a>
                            </li>
                            <li>
                                <a href="">

                                    <img src="../../image/group-buy-img/right1.png" alt="" />
                                    <b>第三代全新科技数字轿车,全新奥迪7豪华版</b>
                                    <i><em class="yj-group-red">500</em>人已购买</i>

                                </a>
                            </li>
                            <li>
                                <a href="">

                                    <img src="../../image/group-buy-img/right1.png" alt="" />
                                    <b>第三代全新科技数字轿车,全新奥迪7豪华版</b>
                                    <i><em class="yj-group-red">500</em>人已购买</i>

                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style="clear: both;"></div>
                <div class="gq-cover">
                    <div class="gq-ball">
                        <div class="gq-ballTop">
                            <button @click="gqBall">×</button>
                        </div>
                        <div class="gq-ballPay">
                            <span>!</span>
                            <strong>请您在新打开的页面上完成付款。</strong>
                            <p>付款完成前请不要关闭此窗口。</p>
                            <p>完成付款后请根据您的情况点击下面的按钮:</p>
                            <button class="gq-hadPay">已完成付款</button>
                            <button class="gq-hadQst">付款遇到问题</button>
                            <a href="#">《 返回选择其他支付方式</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                pingjialist: [],
                shuju: []
            }
        },
        mounted() {
            var that = this;
            var id = this.$route.query.id
            var local = localStorage.id || ''
            localStorage.id = local + id + ",";
            $.ajax({
                url: "api/zycanshu",
                type: "get",
                dataType: "json",
                data: {
                    id: id
                },
                success: function(data) {
                    that.shuju = data[0];
                }
            });

            $.ajax({
                url: "api/zyqing",
                type: "get",
                dataType: "json",
                success: function(data) {
                    that.pingjialist = data;
                }
            })

            function initialize() {
                var mp = new BMap.Map('map');
                mp.centerAndZoom(new BMap.Point(121.491, 31.233), 11);
            }
            //
            function loadScript() {
                var script = document.createElement("script");
                script.src = "http://api.map.baidu.com/api?v=2.0&ak=ThnKX99bqOcl5ahvZjAQYtAW4NAceAQ6&callback=initialize"; //此为v2.0版本的引用方式  
                // http://api.map.baidu.com/api?v=1.4&ak=您的密钥&callback=initialize"; //此为v1.4版本及以前版本的引用方式  
                document.body.appendChild(script);
            }
            loadScript();
            initialize();

            function shows() {
                $(".gq-cover").show();
            }

        },

        methods: {
            zyse(event) {
                var that = $(event.target);
                debugger;
                for(var i = 0; i < that.children("option").length; i++) {
                    if(that.val() == 1) {
                        that.next("strong").text("(一般)").addClass("yj-group-blue")
                    }
                    if(that.val() == 2) {
                        that.next("strong").text("(好)").addClass("yj-group-red")
                    }
                    if(that.val() == 3) {
                        that.next("strong").text("(很好)").addClass("yj-group-red")
                    }
                    if(that.val() == 4) {
                        that.next("strong").text("(非常好)").addClass("yj-group-red")

                    }
                }
            },
            gqBall() {
                $(".gq-cover").hide();
            },
            joincar() {
                var id = this.$route.query.id;
                if(localStorage.getItem("phone") || localStorage.getItem("email")) {
                    $.ajax({
                        url: "api/zyjoincar",
                        type: "get",
                        dataType: "json",
                        async: false,
                        data: {
                            id: id,
                            phone: localStorage.phone,
                            email: localStorage.email,
                            carimgsrc: $(".buyimg").attr("src"),
                            carname: $(".yj-res-top h1").text(),
                            carstatus: "未付款",
                            carprice: $(".yj-group-img strong i").text(),

                        },
                        success: function(data) {
                            //获取购物车图片
                            var cart = $(".gouwuche");
                            //获取需要加入购物车的图片
                            var imgtodrag = $(".buyimg");
                            if(imgtodrag) {
                                var imgclone = imgtodrag.clone()
                                    .offset({
                                        top: imgtodrag.offset().top,
                                        left: imgtodrag.offset().left
                                    })
                                    .css({
                                        'opacity': '0.9',
                                        'position': 'absolute',
                                        'height': '150px',
                                        'width': '150px',
                                        'z-index': '100'
                                    })
                                    .appendTo($('body'))
                                    .animate({
                                        'top': cart.offset().top + 10,
                                        'left': cart.offset().left + 10,
                                        'width': 75,
                                        'height': 75
                                    }, 1000);

                                imgclone.animate({
                                    'width': 0,
                                    'height': 0
                                }, function() {
                                    $(this).detach()
                                });
                            };
                        }
                    });
                    setTimeout(function() {
                        $(".gq-cover").show();
                    }, 1500)

                }
            },
            tijiao() {
                var that = this;
                //              var xing = ;
                //                var html = "<ul><li><img src='http://ww1.sinaimg.cn/default/images/default_avatar_female_uploading_180.gif' /><span><span>"+localStorage.phone+localStorage.email+"<i><svg class='icon' aria-hidden='true'><use xlink:href='#icon-vipicon-s2'></use></svg></i><em>"+time +"</em></span><br /> 服务质量:" + $(".yj-down").eq(0).val() +"<b></b><strong>"+ $(".yj-down").next("strong").eq(0).text() +"</strong> 服务环境:"+$(".yj-down").eq(1).val() +"<b></b><strong>"+ $(".yj-down").next("strong").eq(1).text()+"</strong><br /> 服务效率: "+ $(".yj-down").eq(2).val() + +"<b></b><strong>"+$(".yj-down").next("strong").eq(2).text() +"</strong> 服务价格: " + $(".yj-down").eq(3).val() +"<b></b><strong>"+$(".yj-down").next("strong").eq().text() +" <i  class='zyjinglingtu'></i></strong></span><p>评论语:</p><p>"+ $(".yj-remark-cont textarea").val() +"</p><p> 服务项目:"+  $(".yj-down").eq(4).val() +"</p></li></ul>";
                //             
                $.ajax({
                    url: "api/zyjoinping",
                    type: "get",
                    dataType: "json",
                    data: {
                        uphone: localStorage.phone,
                        uemail: localStorage.email,
                        uquality: $(".yj-down").eq(0).val(),
                        uenvir: $(".yj-down").eq(1).val(),
                        usever: $(".yj-down").eq(2).val(),
                        uprise: $(".yj-down").eq(3).val(),
                        ucont: $(".yj-remark-cont textarea").val(),
                        uxing: (($(".yj-down").eq(0).val() * 1 + $(".yj-down").eq(1).val() * 1 + $(".yj-down").eq(2).val() * 1 + $(".yj-down").eq(3).val() * 1) / 4) * (-20) + "px",
                        uitem: $(".yj-down").eq(4).val(),
                        uimgsrc: $(".buyimg").attr("src")
                    },
                    success: function(data) {

                        that.pingjialist = data;
                    }
                });

                $(".yj-remark-cont textarea").val("");

            }
        }
    }
</script>

<style>
    .gq-cover {
        width: 100%;
        height: 100%;
        /*background-color: rgba(0, 0, 0, 0.2);*/
        padding-top: 100px;
        display: none;
        position: absolute;
        top: 0;
    }
    
    .gq-ball {
        margin: auto;
        width: 320px;
        height: 285px;
        background-color: #fff;
        box-shadow: 0 0 5px 5px #a5a5a5;
    }
    
    .gq-ballTop {
        position: relative;
        height: 33px;
        background-color: #213f7b;
    }
    
    .gq-ballTop button {
        position: absolute;
        right: 4px;
        bottom: 0;
        width: 29px;
        height: 29px;
        outline: none;
        font-size: 24px;
    }
    
    .gq-ballPay {
        padding: 22px;
    }
    
    .gq-ballPay span {
        display: inline-block;
        width: 57px;
        height: 57px;
        border-radius: 50%;
        background-color: #b5daf6;
        text-align: center;
        line-height: 50px;
        color: #005ba1;
        font-size: 40px;
        font-weight: bolder;
        margin-right: 25px;
        margin-bottom: 25px;
    }
    
    .gq-ballPay strong {
        display: inline-block;
        width: 160px;
        height: 40px;
    }
    
    .gq-ballPay p {
        font-size: 14px;
        line-height: 24px;
    }
    
    .gq-ballPay button {
        width: 114px;
        height: 35px;
        background-color: #315aac;
        color: #fff;
        /*outline: none;*/
        border: none;
        margin: 15px 15px 15px 0;
    }
    
    .gq-ballPay a {
        color: #0aa0df;
        text-decoration: none;
    }
    /*整体内容的框*/
    
    .yj-main {
        width: 980px;
        margin: 0 auto;
        margin-top: 14px;
        position: relative;
        overflow: hidden;
    }
    
    .yj-group-red {
        color: red;
    }
    
    .yj-group-blue {
        color: #096edf;
    }
    
    .yj-details-top {
        padding: 12px 0 10px 14px;
        font-family: SimSun Regular;
        font-size: 12px;
        background: #fff;
        margin-bottom: 12px;
        border: 1px solid #ccc;
    }
    
    .yj-details-left {
        width: 738px;
        float: left;
    }
    
    .yj-details-box {
        float: left;
        width: 100%;
        margin-left: -9px;
    }
    /*商品框*/
    
    .yj-res-top {
        float: left;
        margin-left: 9px;
        border: 1px solid #ccc;
        /*height: 600px;*/
        position: relative;
        background: #fff;
        padding: 32px 16px 12px 15px;
    }
    
    .yj-res-top h1 {
        font-size: 28px;
        font-family: MicrosoftYaHei Regular;
        line-height: 40px;
    }
    
    .yj-res-top p {
        font-size: 22px;
        line-height: 28px;
        font-family: MicrosoftYaHei Regular;
        color: #777;
        max-height: 112px;
        overflow: hidden;
        margin-bottom: 27px;
    }
    
    .yj-details-message {
        width: 216px;
        height: 241px;
        background: #ccc;
        margin-top: 30px;
        border: 1px solid #aba7a7;
        float: left;
    }
    
    .yj-message-header {
        width: 100%;
        /*height: 100px;*/
        border-bottom: 1px solid #aba7a7;
        padding: 50px 0 16px;
        text-align: center;
    }
    
    .yj-show-right a,
    .yj-message-header a {
        width: 90px;
        height: 41px;
        background: #2a4e91;
        display: inline-block;
        border-radius: 5px;
        text-align: center;
        color: #fff;
        line-height: 41px;
        font-size: 20px;
    }
    
    .yj-show-right button,
    .yj-message-header button {
        width: 90px;
        height: 41px;
        background: #fff;
        display: inline-block;
        border-radius: 5px;
        text-align: center;
        color: #ccc;
        line-height: 41px;
        font-size: 12px;
        font-family: SimSun Regular;
        border: 1px solid #ccc;
    }
    
    .yj-message-main {
        border-bottom: 1px solid #aba7a7;
        padding: 15px 0;
        text-align: center;
    }
    
    .yj-message-main span {
        font-size: 18px;
        font-family: MicrosoftYaHei Regular;
    }
    
    .yj-message-main b {
        font-size: 12px;
        font-family: SimSun Regular;
    }
    
    .yj-message-foot span:nth-child(2),
    .yj-message-foot span:nth-child(1) {
        background: url("../../image/group-details-img/details2.png") no-repeat;
        background-size: 24px 24px;
        background-position: 50% 10%;
        float: left;
        display: inline-block;
        text-align: center;
        line-height: 50px;
        width: 49%;
        padding: 15px 0;
        height: 30px;
    }
    
    .yj-message-foot span:nth-child(2) {
        background: url("../../image/group-details-img/details3.png") no-repeat;
        background-size: 24px 20px;
        background-position: 50% 10%;
        border-left: 1px solid #aba7a7;
    }
    
    .yj-res-top img {
        float: right;
        margin-top: 10px;
    }
    
    .yj-res-bottom {
        width: 727px;
        margin-left: 9px;
        background: #f4f4f4;
        border: 1px solid #ccc;
        float: left;
    }
    
    .yj-res-bottom a {
        font-family: SimSun Regular;
        font-size: 14px;
        color: black;
    }
    
    .bdsharebuttonbox {
        float: right;
    }
    
    .yj-group-img {
        width: 250px;
        height: 75px;
        background: url("../../image/group-buy-img/grounpbg.png") no-repeat;
        background-size: cover;
        position: absolute;
        left: -9px;
    }
    
    .yj-map-show strong,
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
    
    .yj-group-img span {
        width: 53px;
        height: 27px;
        background: url("../../image/group-details-img/details1.png") no-repeat;
        background-size: cover;
        position: absolute;
        right: 58px;
        color: #fff;
        text-align: center;
    }
    
    .yj-down {
        margin: 3px;
    }
    /*打分框*/
    
    .yj-details-mark {
        width: 712px;
        background: #fff;
        float: left;
        margin-top: 14px;
        font-size: 14px;
        font-family: SimSun Regular;
        padding: 10px 0 22px 15px;
    }
    
    .yj-details-mark span {
        font-size: 22px;
        font-family: Arial Regular;
        padding-left: 38px;
    }
    
    .yj-remark-right em,
    .yj-rank-right em,
    .yj-rank-left em,
    .yj-merchant-right em,
    .yj-details-mark em {
        background-image: url("../../image/group-details-img/detalisjlt.png");
        background-repeat: no-repeat;
        background-position: -527px 5px;
        display: inline-block;
        width: 84px;
        height: 18px;
        /*overflow: hidden;*/
        position: relative;
        /*padding-right: 33px;*/
    }
    
    .yj-remark-right em b,
    .yj-rank-right em b,
    .yj-rank-left em b,
    .yj-merchant-right em b,
    .yj-details-mark em b {
        display: inline-block;
        width: 58px;
        height: 18px;
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden;
    }
    
    .yj-remark-right em b img,
    .yj-rank-right em b img,
    .yj-rank-left em b img,
    .yj-merchant-right em b img,
    .yj-details-mark em b img {
        float: left;
        position: absolute;
        left: -527px;
        top: -20px;
    }
    
    .yj-details-mark a {
        padding-left: 237px;
    }
    /*地址框*/
    
    .yj-map-top a {
        float: left;
        display: inline-block;
        font-size: 12px;
        font-family: SimSun Regular;
        color: #000000;
        padding: 10px 14px;
        border-right: 1px solid #ccc;
    }
    
    .yj-map-top a:hover {
        background: #666;
    }
    
    .yj-map-top {
        width: 727px;
        background: #f4f4f4;
        border: 1px solid #CCCCCC;
        overflow: hidden;
        margin-top: 14px;
        float: left;
    }
    
    .yj-details-map {
        width: 684px;
        /*border: 1px solid;*/
        float: left;
        padding: 23px 21.5px;
        background: #fff;
    }
    
    .yj-map-merchant {
        background: #fafafa;
        overflow: hidden;
    }
    
    .yj-map-h3 {
        margin-top: 14px;
        font-size: 16px;
        font-family: SimSun Regular;
        color: #fff;
        background: #2A4E91;
        padding: 10px 8px;
    }
    
    .yj-map-p {
        margin-top: 14px;
        font-size: 12px;
        font-family: SAdobe 黑体 Std R;
        color: black;
        line-height: 14px;
    }
    
    .yj-map-span {
        display: inline-block;
        width: 5px;
        height: 5px;
        background: #2A4E91;
        border-radius: 50%;
        vertical-align: middle;
    }
    
    .yj-merchant-left {
        width: 314px;
        height: 252px;
        border: 1px solid;
        margin: 22px 0 0 12px;
        position: relative;
        display: inline-block;
    }
    
    .yj-merchant-left button {
        width: 100%;
        height: 31px;
        background: rgba(255, 255, 255, 0.8);
        position: absolute;
        left: 0;
        bottom: 0;
    }
    
    .yj-merchant-right {
        width: 300px;
        height: 179px;
        background: #fff;
        float: right;
        margin: 22px 12px 0 21px;
        padding: 10px;
        line-height: 24px;
    }
    
    .yj-merchant-right h3 {
        font-size: 14px;
        font-family: Arial Regular;
    }
    
    .yj-details-map table {
        width: 684px;
        margin-top: 14px;
    }
    
    .yj-details-map table tr td {
        height: 30px;
        font-size: Adobe 黑体 Std R;
        font-size: 14px;
    }
    
    .yj-details-map table tr th {
        background: #e5e5e5;
        font-size: Adobe 黑体 Std R;
        font-size: 14px;
    }
    
    .yj-map-msg {
        background: #f2f7e3;
        padding: 10px 10px;
    }
    
    .yj-map-rank {
        width: 682px;
        /*height: 200px;*/
        /*border: 1px solid;*/
        margin-top: 14px;
        overflow: hidden;
    }
    
    .yj-map-h1 {
        font-size: 30px;
        font-family: FZHTJW -GB1-0;
        color: red;
    }
    
    .yj-rank-left {
        padding: 26.5px 67px;
        float: left;
        text-align: center;
    }
    
    .yj-rank-right {
        padding: 23px 67px;
        float: right;
        text-align: center;
    }
    
    .yj-map-remark {
        padding: 15px 0 10px 11px;
        border: 1px solid #ccc;
        overflow: hidden;
    }
    
    .yj-remark-left {
        float: left;
        overflow: hidden;
        margin-right: 5px;
    }
    
    .yj-remark-cont {
        /*float: left;*/
        /*width: 300px;*/
        margin-left: 7px;
        overflow: hidden;
        margin-bottom: 10px;
    }
    
    .yj-remark-cont textarea {
        width: 568px;
        height: 68px;
        margin-top: 5px;
        margin-bottom: 5px;
        box-shadow: inset 0px 0px 2px 2px #ccc;
        outline: none;
        border: 1px solid #ccc;
        resize: none;
    }
    
    .yj-remark-right {
        float: right;
        /*position: absolute;
        top: -200px;
        right: 35px;*/
    }
    
    .yj-remark-cont button {
        background: #2A4E91;
        width: 60px;
        height: 30px;
        float: right;
        border-radius: 5px;
        margin-right: 45px;
        /*margin-top: 10px;*/
    }
    
    .yj-remark-cont ul li {
        border: 1px solid #ccc;
        width: 100%;
    }
    
    .yj-remark-cont ul li p {
        border: 1px solid #ccc;
        width: 100%;
        /*height: 20px;*/
        line-height: 20px;
    }
    
    .yj-group-pag {
        width: 736px;
        height: 91px;
        float: left;
        /*border: 1px solid;*/
        line-height: 91px;
        text-align: center;
    }
    
    .yj-group-pag a {
        background: #fff;
        padding: 7px 9px;
        color: #096edf;
    }
    
    .yj-map-show {
        float: left;
        background: #fafafa;
        width: 727px;
    }
    
    .yj-map-show span {
        display: inline-block;
        width: 106px;
        height: 48px;
        vertical-align: bottom;
    }
    
    .yj-show-right {
        display: inline-block;
        padding-left: 60px;
    }
    
    .yj-details-right {
        width: 238px;
        position: absolute;
        top: 55px;
        right: 0;
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
    
    .yj-remark-cont strong {
        margin-right: 20px;
        display: inline-block;
        width: 55px;
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
        height: 32px;
        overflow: hidden;
        color: #666;
        font-family: SimSun Regular;
        font-size: 12px;
    }
    
    .yj-group-skip li i {
        color: #ccc;
        font-weight: 900;
        padding: 5px;
    }
    
    .yj-group-skip li i em {
        font-weight: 900;
    }
    /*评论展示条数*/
    
    .zyshowlistpinglun ul {
        margin-top: 15px;
    }
    
    .zyshowlistpinglun hr {
        margin-right: 30px;
        margin-top: 10px;
        color: #dbdbdb;
        height: 0.1px;
    }
    /*.zyshowlistpinglun ul li {
        overflow: hidden;
    }*/
    
    .zyshowlistpinglun ul li>img:nth-child(1) {
        vertical-align: top;
        margin-right: 5px;
        width: 60px;
        height: 60px;
        /*border: 1px solid #c5c5c5;*/
    }
    
    .zyshowlistpinglun ul>li>span {
        width: 600px;
        line-height: 20px;
        height: 60px;
        display: inline-block;
    }
    
    .zyshowlistpinglun ul>li>p {
        margin-left: 70px;
        margin-top: 5px;
    }
    
    .zyshowlistpinglun .zyjinglingtu {
        float: right;
        margin-right: 45px;
        vertical-align: top;
        margin-top: -35px;
        width: 80px;
        height: 20px;
        display: inline-block;
        background: url(../../image/group-details-img/jinglingtu.png) no-repeat;
        background-position: -32px;
        border: none;
        overflow: hidden;
        /*width: 81px;*/
    }
    /*.zyshowlistpinglun  .zyjinglingtu img{
           width: 50px;
       }*/
    
    .buyimg {
        width: 458px;
        height: 256px;
    }
</style>