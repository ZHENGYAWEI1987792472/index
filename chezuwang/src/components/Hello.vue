<template>
    <div class="hello">
        <!--     <h1>{{ msg }}</h1>-->
        <h3 v-on:click="fetchData">wo</h3>
    </div>
</template>

<script>
    export default {
        methods: {
            fetchData() {
            
                $.ajax({
                    url: "api/ab",
                    type: "get",
                    dataType: "json",
                    success: function(data) {
                        console.log(data);
                    }
                })
            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        font-weight: normal;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        display: inline-block;
        margin: 0 10px;
    }
    
    a {
        color: #42b983;
    }
</style>