<template>
  <div class="location">
    <van-swipe style="top:0;bottom:0;position:absolute;z-index:9;" vertical @change="onChange">
      <van-swipe-item>
        <img src="./../assets/jt.png" width="100%" height="100%" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="./../assets/sz.png" width="100%" height="100%" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="./../assets/jy.png" width="100%" height="100%" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="./../assets/yl.png" width="100%" height="100%" />
      </van-swipe-item>
      <template #indicator>
        <div class="qwnav custom-indicator">
          <van-row type="flex" gutter="10" class="subnav">
            <van-col>交通配套{{ current + 1 }}</van-col>
            <van-col>市政配套</van-col>
            <van-col>教育配套</van-col>
            <van-col>医疗配套</van-col>
            <van-col>休闲配套</van-col>
            <!-- <van-col @click="current=0">交通配套{{ current + 1 }}</van-col>
            <van-col @click="current=1">市政配套</van-col>
            <van-col @click="current=2">教育配套</van-col>
            <van-col @click="current=3">医疗配套</van-col>
            <van-col @click="current=4">休闲配套</van-col>-->
          </van-row>
        </div>
        <!-- <div class="custom-indicator">{{ current + 1 }}/4</div> -->
      </template>
    </van-swipe>
    <!-- <img class="activeshow" src="./../assets/jt.png" width="100%" height="100%" v-if="show===1" />
    <img class="activeshow" src="./../assets/sz.png" width="100%" height="100%" v-if="show===2" />
    <img class="activeshow" src="./../assets/jy.png" width="100%" height="100%" v-if="show===3" />
    <img class="activeshow" src="./../assets/yl.png" width="100%" height="100%" v-if="show===4" />
    <img class="activeshow" src="./../assets/xx.png" width="100%" height="100%" v-if="show===5" />-->

    <img src="./../assets/qw.png" width="100%" height="100%" />
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      show: 0,
      current: null
    };
  },
  methods: {
    onChange(index) {
      Toast("当前 Swipe 索引：" + index);
    }
  }
};
</script>
<style lang="scss" scoped>
.location {
  background-color: #333;
}
.qwnav {
  z-index: 10;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  left: 1rem;
  border: 1px solid #fff;
  border-radius: 10rem;
  height: 3rem;
  background-color: rgba($color: #000000, $alpha: 0.6);
  overflow-y: auto;
  padding: 0 1rem;
  .subnav {
    color: #fff;
  }
}

.activeshow {
  z-index: 9;
  position: absolute;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>