var code;
function createCode(){
	code="";
	name="";
	var codeLength = 4;
	var checkCode = document.getElementById("gq-findCode");
//	console.log(checkCode.value);
	var codeChart = new Array(2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
	for (var i = 0; i < codeLength; i++) {
		var codeIndex = Math.floor(Math.random()*34);
		code+= codeChart[codeIndex];
	}
	if (checkCode) {
		checkCode.className = "code";
		checkCode.value = code;
	}
//	for (var j = 0; j < 4; j++) {
//		var codeIndex = Math.floor(Math.random()*34);
//		name+= codeChart[codeIndex];
//	}	
}

$(".gq-find-register").click(function(){
	var str = $(".gq-findPassword input").val();
    var ret = /^1[34578]\d{9}$/;
    var ret1 = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    var gqCode = $(".gq-putCode").val().toUpperCase();
    if (ret.test(str)&&gqCode==code) {
    	    $(".gq-set").show();
    	    $(".gq-top h2").eq(1).show();
    	    $(".gq-top h2").eq(0).hide();
    	    $(".gq-search").show();
    	    $(".gq-find-register").hide();
    	    createCode();
    } else if (ret1.test(str)&&gqCode==code) {
    	    $(".gq-phone-find").hide();
    	    $(".gq-findWin").show();
    } else{
    	    alert("请输入正确信息");
    }


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
var _mail = $(".gq-findPassword input").val().split('@')[1];    //获取邮箱域
for (var j in hash){
    if(j == _mail){
    	$(".gq-findWin a").text(str);
        $(".gq-findWin a").show().attr("href", hash[_mail]);    //替换登陆链接
    }
}

})

$(".gq-search").click(function(){
	var ret = 	/^[A-z0-9]{6,32}/;
	var str = $(".gq-psw input").val();
	var str1 = $(".gq-psw1 input").val();
	var gqCode = $(".gq-putCode").val().toUpperCase();
	if (ret.test(str)) {
		if (str==str1) {
			if (gqCode==code) {
				alert(true);
			} else{
				alert("验证码错误");
			}			
		} else{
			alert("请重新确认密码");
		}
	} else{
		alert("密码格式错误");
	}
})