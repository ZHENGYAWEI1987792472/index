<template>
    <div class="myfamily2children2">
           <div class="ywpingjia">
               <h1>评价列表显示</h1>
               <table>
               	<tr><th>商品名字</th><th>商品展示</th><th>评价内容</th><th>评价时间</th></tr>
               	<tr v-for="item in zychildren2"><td>{{item.uitem}}</td><td><img :src="item.uimgsrc" alt="" /></td><td>{{item.ucont}}</td><td>{{item.utime}}</td></tr>
               </table>
           </div>
     </div>
</template>

<script>
    export default{
        data( ){
            return {
                zychildren2 : []
            }
        },
         mounted() {
            var that = this;
            $.ajax({
                url: "api/zyqingpingjia",
                type: "get",
                dataType: "json",
                data :{
                     phone: localStorage.phone,
                     email: localStorage.email
                },
                success: function(data) {
                    that.zychildren2 = data;
                }
            })

    }
     }
</script>

<style>
   .ywpingjia {
       margin-left: 30px;
   }
   .ywpingjia h1 {
       font-size: 20px;
       text-align: center;
       margin: 20px auto;
   }
   .ywpingjia table {
      width: 660px;
     
   }
   .ywpingjia table img{
       width: 100px;
   }
    .ywpingjia table td {
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
        
    }
</style>