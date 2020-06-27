<template>
  <div id="app">
    <van-row class="bg-black" type="flex" justify="space-between" align="center">
      <van-col>
        <div class="logo"></div>
      </van-col>
      <van-col span="12">
        <van-row type="flex" justify="end" class="top" gutter="20">
          <van-col>
            <a href="tel:028-62577777">
              <van-icon name="phone-circle-o" />
            </a>
          </van-col>
          <van-col>
            <a href="http://j.map.baidu.com/29/Kj8">
              <van-icon name="location-o" />
            </a>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
    <router-view :key="$route.path" class="mainbox" />
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">
        <router-link to="/">全景鸟瞰</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="search">
        <router-link to="/gardens">园林漫游</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o">
        <router-link to="/location">区位交通</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o">
        <router-link to="/door">户型鉴赏</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o">
        <router-link to="/">版权声明</router-link>
      </van-tabbar-item>
    </van-tabbar>

    <!-- <div id="nav">
     
      
      
    </div>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.mainbox {
  width: 100%;
  position: absolute;
  top: 2.6rem;
  bottom: 3rem;
}
.bg-black {
  padding: 0.3rem 0.8rem;
  background: #000;

  .logo {
    display: inline-block;
    width: 15rem;
    height: 1.8rem;
    background-image: url("./assets/logo.png");
    background-size: cover;
    background-repeat: no-repeat;
  }
  .top {
    color: rgb(245, 228, 202);
    font-size: 1.6rem;
    a {
      color: rgb(245, 228, 202);
    }
  }
}
.van-tabbar {
  color: #000;
  a {
    color: #000;
  }
}
.van-tabbar-item--active {
  a {
    color: #1989fa;
  }
}
</style>
