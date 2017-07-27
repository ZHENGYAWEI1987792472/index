<template>
    <div class="myfamily5children1">
        <div class="ywchildren1">
         <p>车族余额：<i>￥{{yue}}</i> </p>
            <p>不可提现 ：<i>￥10</i></p>
            <p>可提现 ： <i>￥200</i>              
            </p>
            <div class="yw-tishi">
                您的提现金额小于最小提现金额（1分钱），目前不可提现
            </div>
            </div>
    </div>
</template>

<script>
      export default{
          data (){
              return {
                  yue :[]
              }
          },
           mounted() {
            var that = this;
            $.ajax({
                url: "api/zyfindyue",
                type: "get",
                dataType: "json",
                data : {
                    phone : localStorage.phone,
                    email : localStorage.email
                },
                success: function(data) {
                    that.yue = data[0].lmoney;
                    if (that.yue <= 1) {
                    	   $(".yw-tishi").show();
                    }
                }
            })

    }
    }
</script>

<style>
    .ywchildren1 p {
        margin-left: 45px;
        margin-bottom: 15px;
        font-size: 14px;
    }
    .ywchildren1 p:nth-child(5) i {
        color: red;
        
    }
    .yw-tishi {
        margin-left: 28px;
        border: 1px solid #f7e2b5;
        width: 645px;
        height: 35px;
        line-height: 35px;
        padding-left: 15px;
        background: #fffbf2;
        font-size: 12px;
        margin-top: 70px;
        display: none;
    }
</style>