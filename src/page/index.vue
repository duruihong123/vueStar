<template>
    <div class="wrap">
        <header class="header">首页</header>
        <div class="content">
            <button @click="open('start')">满天星</button>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name: '',
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
       open() {
          this.$router.push({
          'name': 'start'
          })
       }

    }
}
</script>
<style scoped>
    .content{
        height: 100vh;
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
    }
    .header{
        text-align: center;
    }
    .li {
        height: 100px;
        background-color: #f1f1f1;
        list-style-type: none;
        border-bottom: 1px solid #ddd;
        line-height: 100px;
    }
    .date {
        background-color: darkgray;
        color: #000;
        width: 100%;
        text-align: left;
        padding: 10px;
    }
    .cont {
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }
    .listContent {
        border-bottom: 1px solid #d1d1d1;
    }
    .touseBtn {
        text-align: center;
        border-radius: 10px;
        width: 70px;
        padding: 5px 0;
        background-color:darkgrey;
    }
    .describe {
        background-color: darkgrey;
        margin: 10px;
    }
</style>
