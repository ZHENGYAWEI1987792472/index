$(".gq-top ul li:eq(0)").click(function(){
	$(".gq-mail-logon").show();
	$(".gq-phone-logon").hide();
	$(this).addClass("gq-bg");
	$(".gq-top ul li:eq(1)").removeClass("gq-bg");
});
$(".gq-top ul li:eq(1)").click(function(){
	$(".gq-mail-logon").hide();
	$(".gq-phone-logon").show();
	$(this).addClass("gq-bg");
	$(".gq-top ul li:eq(0)").removeClass("gq-bg");
});


var bol = true;
$(function () {
    // 邮件
    $(".gq-mail input").focus(function(){
    	  $(".gq-mail span").hide();
      $(".gq-mail span").eq(1).show();
      $(".gq-mail").css({"background":"#fdf0e3"})
    })
    $(".gq-mail input").blur(function(){
      	$(".gq-mail").css({"background":"#fff"})
      var str = $(".gq-mail input").val();
      var ret = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
      if (str=="") {
      	$(".gq-mail span").hide();
        $(".gq-mail span ").eq(2).show();
        bol=false;
        $(this).css({"border":"1px solid red"});
      } else if(ret.test(str)){
        $(".gq-mail span").hide();
        $(".gq-mail span").eq(4).show();
        $(this).css({"border":"1px solid #c5c5c5"});
      }else{
      	$(".gq-mail span").hide();
        $(".gq-mail span ").eq(3).show();
        bol=false;
        $(this).css({"border":"1px solid red"});
      }
    });
    
    //用户名
    $(".gq-user input").focus(function(){
    	  $(".gq-user span").hide();
      $(".gq-user span").eq(0).show();
      $(".gq-user").css({"background":"#fdf0e3"})
   
    })
    $(".gq-user input").blur(function(){
    	  $(".gq-user").css({"background":"#fff"})
      var str = $(".gq-user input").val();
      var ret = /^[a-zA-Z\u0391-\uFFE5].{3,15}$/;
      if(ret.test(str)){
        $(".gq-user span").hide();
        $(".gq-user span").eq(2).show();
        $(this).css({"border":"1px solid #c5c5c5"});
      }else{
      	$(".gq-user span").hide();
        $(".gq-user span ").eq(1).show();
        bol=false;
        $(this).css({"border":"1px solid red"});
      }
    });
    
    //密码
    $(".gq-psw input").focus(function(){
    	  $(this).parent(".gq-psw").children("span").hide();
      $(this).parent(".gq-psw").children("span").eq(0).show();
      $(this).parent(".gq-psw").css({"background":"#fdf0e3"})
   
    })
    $(".gq-psw input").blur(function(){
    	  $(this).parent(".gq-psw").css({"background":"#fff"})
      var str = $(this).parent(".gq-psw").children("input").val();
      var ret = 	/^[A-z0-9]{6,32}/;
      if(ret.test(str)){
        $(this).parent(".gq-psw").children("span").hide();
        $(this).parent(".gq-psw").children("span").eq(2).show();
        $(this).css({"border":"1px solid #c5c5c5"});
      }else{
      	$(this).parent(".gq-psw").children("span").hide();
        $(this).parent(".gq-psw").children("span").eq(1).show();
        $(this).css({"border":"1px solid red"});
        bol=false;
      }
    });
    
    //密码
    $(".gq-psw1 input").focus(function(){
    	  $(this).parent(".gq-psw1").children("span").hide();
      $(this).parent(".gq-psw1").children("span").eq(0).show();
      $(this).parent(".gq-psw1").css({"background":"#fdf0e3"})
    })
    $(".gq-psw1 input").blur(function(){
    	  $(this).parent(".gq-psw1").css({"background":"#fff"})
      var str = $(this).parent(".gq-psw1").siblings(".gq-psw").children("input").val();
      var str1 = $(this).parent(".gq-psw1").children("input").val();
      if (str1.length<6) {
      	$(this).parent(".gq-psw1").children("span").hide();
        $(this).parent(".gq-psw1").children("span").eq(1).show();
        bol=false;
        $(this).css({"border":"1px solid red"});
      } else if(str==str1){
        $(this).parent(".gq-psw1").children("span").hide();
        $(this).parent(".gq-psw1").children("span").eq(2).show();
        $(this).css({"border":"1px solid #c5c5c5"});
      }else{
      	$(this).parent(".gq-psw1").children("span").hide();
        $(this).parent(".gq-psw1").children("span").eq(1).show();
        bol=false;
        $(this).css({"border":"1px solid red"});
      }
    });
    
    //验证码
    $(".gq-code .gq-putCode").focus(function(){
    	  $(".gq-code span").hide();
      $(".gq-code span").eq(0).show();
      $(".gq-code").css({"background":"#fdf0e3"})
    });
    $(".gq-code .gq-putCode").blur(function(){
      $(".gq-code span").eq(0).hide();
      $(".gq-code").css({"background":"#fff"})
    })

    // 手机
    $(".gq-phone input").focus(function(){
    	  $(".gq-phone span").hide();
      $(".gq-phone span").eq(0).show();
      $(".gq-phone").css({"background":"#fdf0e3"})
    })
    $(".gq-phone input").blur(function(){
    	  $(".gq-phone").css({"background":"#fff"})
      var str = $(".gq-phone input").val();
      var ret = /^1[34578]\d{9}$/;
      if(ret.test(str)){
        $(".gq-phone span").hide();
        $(".gq-phone span").eq(2).show();
        $(this).css({"border":"1px solid #c5c5c5"});
      }else{
      	$(".gq-phone span").hide();
        $(".gq-phone span ").eq(1).show();
        bol=false;
        $(this).css({"border":"1px solid red"});
      }      
    });
    
    
  });

  
$(".gq-agree").click(function(){
	
if (bol) {
	if ($(".gq-phone input").val()=="") {
		$(".gq-userNumber").text("尚未绑定手机号");
	}else{
		$(".gq-userNumber").text($(".gq-phone input").val());
	}
		$("#gq-content").css({"display":"none"});
		$(".gq-logonWin").css({"display":"block"});
	
} else{
	alert("请输入正确信息");
}
})