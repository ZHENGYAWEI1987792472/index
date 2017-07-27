<template>
    <div class="liulan">
        
        <div class="zyliuyan">
            <h1>历史记录 共{{lengths}}条</h1>
            <table>
            	
            	<tr v-for="(item,index) in liulanlists"><td>{{index+1}} : {{item.gdetail}}</td></tr>
            </table>
        </div>
        <div class="div">
            <img src="../../img/shanzi_godiy8_com_gGAiXX.gif"/>
        </div>
    </div>
</template>

<script>
    export default{
             data(){
                 return {
                    liulanlists : [] ,
                    lengths :0
                 }
             },
             mounted() {
                 var that = this;
//               console.log(localStorage.id);                 
                $.ajax({
                url : "api/zycanshu1",
                type : "get",
                dataType :"json",
                data :{
                    id : localStorage.id
                },
                success :function(data){
                    
                    if (data.length) {
                    	  that.liulanlists = data;
                    	  that.lengths = data.length;
                    	  if ($(".zyliuyan").height() <= 500) {
                    	  	 $(".zyliuyan").height("500px")
                    	  }
                    }else {
                        $(".zyliuyan").hide();
                        $(".div").show();
                    }
                    
                }
             })
            }


    }
</script>

<style>
    .liulan {
        width: 950px;
        padding-left: 30px;
        margin: 10px auto;
        border: 1px #e4e4e4 solid;
        background: white;
        padding-top: 10px;
    }
    .zyliuyan {
        
        display: block;
    }
    .zyliuyan h1 {
        font-size: 18px;
    }
    .zyliuyan table tr {
        display: block;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .div {
       
        font-size: 18px;
        height: 500px;
        line-height: 500px;
        text-align: center;
        display: none;
        
    }
</style>