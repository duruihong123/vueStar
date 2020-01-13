<template>
    <div class="wrap">
        <div class="starts">
            <div v-for="(item,index) in startCount" :key="index" class="start" ref="start">

            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name: 'start',
    data() {
        return {
        startCount: 800, // 星星数量
        distance: 800 // 间距
        }
    },
    mounted() {
      let _this = this;
      let startArr = _this.$refs.start;
      startArr.forEach(item => {
          let speed = 0.2 + (Math.random() * 1);
          let thisDistance = _this.distance + (Math.random() * 300);
          item.style.transformOrigin = `0 0 ${thisDistance}px`;
          item.style.transform = `translate3d(0,0,-${thisDistance}px) rotateY(${(Math.random() * 360)}deg) rotateX(${Math.random() * -50}deg) scale(${speed},${speed})`
      })
    },
    created() {
    },
    methods: {
    }
}
</script>
<style scoped>
/** 动画 **/
@keyframes totate {
  0%{
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }
  100%{
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
  }
}
.starts {
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: absolute;
  perspetive-orgin: 50% 100%;
  left: 50%;
  animation: totate 90s infinite linear;
  bottom: 0;
}
.start{
  width: 2px;
  height: 2px;
  background: #f7f7b8;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
}
.wrap{
  padding: 10px 0;
  color: red !important;
  height: 100vh !important;
  /*width: 100%;*/
}
</style>
