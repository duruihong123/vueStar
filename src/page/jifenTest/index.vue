<template>
    <div class="wrap">
        <header class="header">我的奖品</header>
        <div class="content">
            <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
                <div class="list">
                    <div class="date">2019.07.14</div>
                    <div class="listContent" v-for="(item,index) in list" :key="index">
                        <div class="cont">
                            <span>1天vip体验券</span>
                            <span class="touseBtn">去使用</span>
                        </div>
                        <div class="cont" @click="isShow(item,index)">
                            <span>使用说明^^</span>
                            <span>有效期至2019.07.28</span>
                        </div>
                        <div class="describe" v-if="item.show">
                            描述描述描述
                        </div>
                    </div>
                </div>
                <!-- <ul>
                    <li v-for="(item,index) in list" :key="index" class="li">
                        {{ item }}
                    </li>
                </ul> -->
            </mt-loadmore>
        </div>
    </div> 
</template>
<script>
import { Loadmore } from 'mint-ui';
import Vue from 'vue'
Vue.component(Loadmore.name, Loadmore);
export default {
    name: 'jifenIndex',
    data() {
        return {
            list: [
                {value:"1"},
                {value:"1"},
                {value:"1"},
                {value:"1"},
                {value:"1"},
                {value:"1"},
                {value:"1"},
                {value:"1"},
                {value:"1"},
                {value:"1"},
                ],
            allLoaded: false,//数据是否加载完毕
            isShowText: false,
            isDisplay: {
                'display':'none'
            },
            isActive: -1,
        }
    },
    created() {
        let array = []
        this.list.map((item,index)=>{
            array.push(
                Object.assign({},item,{show:false})
            )
        });
        this.list = array
    },
    methods: {
        loadTop() {
            // 加载更多数据
            alert(11111)
            this.$refs.loadmore.onTopLoaded();
        },
        loadBottom() {
            // 加载更多数据
            console.log('加载更多')
            // this.allLoaded = false;// 若数据已全部获取完毕
            this.$refs.loadmore.onBottomLoaded();
        },
        isShow(item) {
            item.show = !item.show
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