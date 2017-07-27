   //城市切换
    $(".yj-cont-site span").on("click",function(){
        $(".yj-site-city").show()
    })
    $(".yj-site-city img").on("click",function(){
        $(".yj-site-city").hide()
    })
    //城市切换 城市改变
    $(".yj-site-city h4 a").on("click",function(){
        $(".yj-cont-site strong").text($(".yj-site-city h4 a").eq($(this).index()-1).text())
    })
    //底部友情链接
    $(".a").hover(function(){
                $(".yj-foot-active").removeClass("show").eq($(this).index()-3).addClass("show");
                
            })
    //购物车
    $(".yj-pay").hover(function() {
    $(".yj-message-pay").show();
    turn = true;
    
}, function() {
    turn = false;
    setTimeout(function() {
        if(!turn) {
            $(".yj-message-pay").hide();
        }
    }, 10);
})