<template>
    <div class="myfamily8children2">

        <div class="zy-myfamily8children-eamil">
            <p><input type="radio" />按以下方式接受邮件</p>
            <ul>
                <li>接受邮箱：chang@qq.com</li>
                <li>邮件频率<span><input type="radio"/>每天1封 <input type="radio" />每周1封<i>(周五发送)</i><input type="radio"  />每月2封<i>(隔每周五发送)</i></span></li>
                <li>订阅城市：暂未订阅任何城市，开始订阅吧 <em>添加城市</em></li>
            </ul>
            <p><input type="radio" />我不想接受任何邮件</p>
            <button class="yw-chongzhi" id="zy-eamil">保存</button>
        </div>
    </div>
</template>

<script>
</script>

<style>
    .zy-myfamily8children-eamil {
        margin-left: 30px;
        font-size: 14px;
    }
    
    .zy-myfamily8children-eamil p {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    
    .zy-myfamily8children-eamil p input {
        margin-right: 5px;
    }
    
    .zy-myfamily8children-eamil ul li {
        margin-bottom: 15px;
        margin-left: 50px;
    }
    
    .zy-myfamily8children-eamil ul li input {
        margin-right: 10px;
        margin-left: 10px;
    }
    
    #zy-eamil {
        border: 1px solid #264787;
        background: #3b6bb1;
        margin-top: 10px;
    }
</style>