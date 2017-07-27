<template>
    <div id="app">
        <headers></headers>
        <router-view></router-view>
        <!--回到顶部-->
        <div class="yj-recur" @click="gqTop">
            <p class="iconfont">&#xe8a3;回顶部</p>
        </div>

        <footers></footers>
    </div>
</template>

<script>
    import headers from './components/header/header.vue';
    import footers from './components/header/footer.vue';
    export default {
        data() {
            return {
                scroll: ""
            }
        },
        components: {
            headers: headers,
            footers: footers
        },
        methods: {
            gqTop() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            },
            topShow: function() {
                this.scroll = $(window).scrollTop()
                if(this.scroll > 75) {
                    $(".yj-recur").css({
                        "display": 'block'
                    });
                } else {
                    $(".yj-recur").css({
                        "display": 'none'
                    });
                }
            }
        },
        mounted() {
            //  beforeCreate(){
            if(localStorage.getItem("phone") || localStorage.getItem("email")) {
                $(".zyhide").hide();
                $("#zytuochu").show();
                $("#zymycar").show();
                $("#zymycar i").text(localStorage.phone + localStorage.email);
            };
            window.addEventListener('scroll', this.topShow)

        }
    }
</script>

<style>
    .yj-recur {
        width: 80px;
        /*height: 54px;*/
       line-height: 50px;
        background: #666;
        font-size: 16px;
        text-align: center;
        border-radius: 5px;
        position: fixed;
        bottom: 20px;
        left: calc(50% + 500px);
        color: #fff;
        display: none;
    }
</style>