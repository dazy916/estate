<template>
  <el-container style="height: 100vh; ">
    <el-aside width="200px" style="background-color:rgb(4, 48, 97)">
      <el-menu router :default-openeds="['1', '2','3']" unique-opened :default-active="$route.path">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>内容管理
          </template>
          <el-menu-item-group>
            <template slot="title">项目管理</template>
            <el-menu-item index="/product/list">项目管理</el-menu-item>
            <el-menu-item index="/product/type">项目类型管理</el-menu-item>
            <el-menu-item index="/product/state">项目状态管理</el-menu-item>
            <el-menu-item index="/product/propertyType">物业类型管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">文章管理</template>
            <el-menu-item index="/article/list">文章管理</el-menu-item>
            <el-menu-item index="/category/list">分类管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>运营管理
          </template>
          <el-menu-item-group>
            <template slot="title">广告</template>
            <el-menu-item index="/ad/list">广告管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-setting"></i>系统管理
          </template>
          <el-menu-item-group>
            <template slot="title">用户</template>
            <el-menu-item index="/user/list">用户管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown @command="handleCommand">
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>{{user}}</span>
      </el-header>

      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-menu-item,.el-submenu__title{
color: #fff;
}
.el-menu-item:hover{
  color: #303133;
}
.el-menu{
  background: none;
}
.el-aside {
  color: #fff;
}
</style>

<script>
export default {
  data() {
    
    return {
      user:""
    };
  },
  methods:{
    async fetch(){
      this.user =await localStorage.auth
    },
    async handleCommand(){
      localStorage.removeItem('token')
      localStorage.removeItem('auth')
      this.$message({
				type:'success',
				message:'已退出'
			})
      this.$router.push('/login')
    }
  },
  created(){
    this.fetch()
  }
};
</script>
