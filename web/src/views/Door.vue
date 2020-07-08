<template>
  <div class="location">
    <van-swipe
      ref="swiper"
      style="top:0;bottom:0;position:absolute;z-index:9;"
      vertical
      :show-indicators="false"
      @change="onChange"
    >
      <van-swipe-item>
        <img
          src="https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/xytd/A1.jpg"
          width="100%"
          height="100%"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/xytd/A2.jpg"
          width="100%"
          height="100%"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://cqenjoytest.oss-cn-shenzhen.aliyuncs.com/xytd/C1.jpg"
          width="100%"
          height="100%"
        />
      </van-swipe-item>
    </van-swipe>
    <div class="qwnav custom-indicator" :class="{'show':showclass}">
      <van-icon name="arrow-down" class="topicon" @click="showAll" v-if="open" />
      <van-icon name="arrow-up" class="topicon" @click="closeAll" v-else />
      <van-grid class="subnav" icon-size="20" column-num="1" :border="false">
        <van-grid-item
          v-for="(item,index) in navList"
          :key="index"
          :icon="item.icon"
          :text="item.name"
          :class="{big:isIndex===index}"
          @click="onChange(index)"
        />
      </van-grid>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: 0,
      current: null,
      showclass: true,
      open: false,
      isIndex: 0,
      navList: [
        {
          icon: "flag-o",
          name: "A1户型"
        },
        {
          icon: "home-o",
          name: "A1户型"
        },
        {
          icon: "user-circle-o",
          name: "C1户型"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    onChange(index) {
      console.log(index);
      this.$refs.swiper.swipeTo(index);
      this.isIndex = index;
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
    height: 22rem;
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
.big {
  font-weight: bold;
  color: rgb(245, 228, 202) !important;
  /deep/.van-grid-item__text {
    color: rgb(245, 228, 202) !important;
  }
}
</style>