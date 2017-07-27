<template>
    <div class="yw-mycarfamily3">
        <div class="yw-mycarfamilyorderlist3">
            <ul>
                <li id="yw-mycarlist1bg">全部</li>
                <li>进行中团购</li>
                <li>已结束</li>
            </ul>
            <hr />
            <div class="yw-mycarfamilygroup-show">
                <table>
                    <thead>
                        <tr>
                            <th>团购项目</th>
                            <th>金额</th>
                            <th>状态</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="../../img/order1.png" /><span>外媒称长城将成下个现代 利润率或全球最高</span></td>
                            <td>￥30</td>
                            <td>
                                进行中</td>
                            <td><button>购买</button>
                                <i>删除</i>
                            </td>
                        </tr>
                        <tr>
                            <td><img src="../../img/order1.png" /><span>外媒称长城将成下个现代 利润率或全球最高</span></td>
                            <td>￥30</td>
                            <td>
                                进行中</td>
                            <td><button>购买</button>
                                <i>删除</i>
                            </td>
                        </tr>
                        <tr>
                            <td><img src="../../img/order1.png" /><span>外媒称长城将成下个现代 利润率或全球最高</span></td>
                            <td>￥30</td>
                            <td>
                                进行中</td>
                            <td><button>购买</button>
                                <i>删除</i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    /*标题*/
    
    .yw-mycarfamilyorderlist3 {
        margin-top: 30px;
    }
    
    .yw-mycarfamilyorderlist3 ul {
        overflow: hidden;
        margin-left: 30px;
        color: #1978cf;
    }
    
    .yw-mycarfamilyorderlist3 ul li {
        float: left;
        width: 50px;
        height: 20px;
        margin-right: 20px;
        text-align: center;
        line-height: 20px;
    }
    
    #yw-mycarlist1bg {
        background: #5a97d4;
        color: white;
    }
    
    hr {
        margin: 10px 30px;
        height: 0px;
        border: 0.1px solid #dcdcdc;
    }
    /*表格*/
    
    .yw-mycarfamilygroup-show table {
        width: 660px;
        margin-left: 30px;
        border: 1px solid #e5e5e5;
    }
    
    .yw-mycarfamilygroup-show table thead {
        font-size: 14px;
        line-height: 35px;
    }
    
    .yw-mycarfamilygroup-show table tbody {
        font-size: 12px;
    }
    
    .yw-mycarfamilygroup-show table thead tr {
        border: 1px solid #e5e5e5;
    }
    
    .yw-mycarfamilygroup-show table tbody img {
        vertical-align: bottom;
        margin-right: 12px;
    }
    
    .yw-mycarfamilygroup-show table tbody td {
        padding: 12px;
        text-align: center;
    }
    
    .yw-mycarfamilygroup-show table tbody tr {
        border: 1px dashed #e5e5e5;
        color: #646464;
    }
    
    .yw-mycarfamilygroup-show table tbody tr>td:nth-child(1) {
        width: 290px;
    }
    
    .yw-mycarfamilygroup-show table tbody tr>td:nth-child(1) span {
        width: 190px;
        height: 40px;
        display: inline-block;
        text-align: left;
    }
    
    .yw-mycarfamilygroup-show table tbody button {
        background: #5a97d4;
        color: white;
        width: 35px;
        height: 20px;
    }
    
    .yw-mycarfamilygroup-show table tbody i {
        color: #1978cf;
    }
</style>