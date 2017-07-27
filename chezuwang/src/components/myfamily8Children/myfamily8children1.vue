<template>
    <div class="myfamily8children1">

        <div class="zy-myfamily8children-base">
            <table>
                <tr>
                    <td>账户：<i>{{phone}}</i></td>
                    <td><em>更换</em></td>
                </tr>
                <tr>
                    <td>邮 箱：<i>{{email}}</i></td>
                    <td>未验证，<em>立即验证/修改邮箱</em></td>
                </tr>
                <tr>
                    <td>密码：<i>*****</i></td>
                    <td><em>修改</em></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                phone : localStorage.phone+localStorage.email,
//              email1 : localStorage.email,
                email :localStorage.email || "没有邮箱"
            }
        }
    }
</script>

<style>
    .zy-myfamily8children-base table {
        margin-left: 60px;
        margin-top: 30px;
        font-size: 14px;
    }
    
    .zy-myfamily8children-base table td {
        width: 200px;
    }
    
    .zy-myfamily8children-base table tr {
        margin-bottom: 15px;
        display: inline-block;
    }
    
    .zy-myfamily8children-base table em {
        color: #1376ce;
    }
</style>