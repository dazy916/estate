<template>
  <div class="location">
    <van-swipe
      ref="swiper"
      style="top:0;bottom:0;position:absolute;z-index:9;"
      vertical
      :show-indicators="false"
    >
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
      <van-swipe-item>
        <img src="./../assets/xx.png" width="100%" height="100%" />
      </van-swipe-item>
    </van-swipe>
    <div class="qwnav custom-indicator" :class="{'show':showclass}">
      <van-icon name="arrow-down" class="topicon" @click="showAll" v-if="open" />
      <van-icon name="arrow-up" class="topicon" @click="closeAll" v-else />
      <van-grid class="subnav" icon-size="20" column-num="1" :border="false">
        <van-grid-item icon="flag-o" text="交通配套" @click="onChange(0)" />
        <van-grid-item icon="home-o" text="市政配套" @click="onChange(1)" />
        <van-grid-item icon="user-circle-o" text="教育配套" @click="onChange(2)" />
        <van-grid-item icon="hotel-o" text="医疗配套" @click="onChange(3)" />
        <van-grid-item icon="goods-collect-o" text="休闲配套" @click="onChange(4)" />
      </van-grid>
    </div>

    <img src="./../assets/qw.png" width="100%" height="100%" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: 0,
      current: null,
      showclass: false,
      open: true
    };
  },
  mounted() {},
  methods: {
    onChange(index) {
      this.$refs.swiper.swipeTo(index);
    },
    showAll() {
      this.showclass = true;
      this.open = false;
    },
    closeAll() {
      this.showclass = false;
      this.open = true;
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
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 2rem;
  height: 2rem;
  border: 1px solid #ccc;
  border-radius: 10rem;
  background-color: rgba($color: #000000, $alpha: 0.6);
  padding: 0.4rem;
  &.show {
    height: 35rem;
    .subnav {
      flex: 1;
      display: inherit;
    }
  }
  .subnav {
    display: none;
    color: #ccc;
  }
  /deep/.van-grid-item__content {
    padding: 0;
    background: none;
    .van-grid-item__text {
      color: #ccc;
    }
  }
  .topicon {
    font-size: 28px;
    color: #ccc;
  }
}

.activeshow {
  z-index: 9;
  position: absolute;
}
</style>