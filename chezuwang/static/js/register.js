$(".gq-move-register>a").click(function(){
	$(".gq-move-register").hide();
	$(".gq-phone-register").show();
});
$(".gq-phone-register>a").click(function(){
	$(".gq-move-register").show();
	$(".gq-phone-register").hide();
});
var num=60;
$(".gq-move-code").click(function(){
	
	var timer = setInterval(function(){
		num--;
		$(".gq-move-code").text("重新获取（"+num+"）");
		$(".gq-move-code").attr("disabled",true);
		if (num<=0) {
			clearInterval(timer);
			num=60;
			$(".gq-move-code").text("重新获取");
			$(".gq-move-code").attr("disabled",false);
		}
	},1000);
	
	$(this).siblings("span").text(" 已发送，1分钟后可重新能获取");
	
});
