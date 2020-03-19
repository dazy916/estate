import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import ProList from '../views/product/list.vue'
import ProEdit from '../views/product/edit.vue'
import ProTypeList from '../views/product/typeList.vue'
import ProTypeEdit from '../views/product/typeEdit.vue'
import ProStateList from '../views/product/stateList.vue'
import ProStateEdit from '../views/product/stateEdit.vue'
import propertyTypeList from '../views/product/propertyTypeList.vue'
import propertyTypeEdit from '../views/product/propertyTypeEdit.vue'
import ArticleList from '../views/article/list.vue'
import ArticleEdit from '../views/article/edit.vue'
import CategoryList from '../views/category/list.vue'
import CategoryEdit from '../views/category/edit.vue'
import UserList from '../views/user/list.vue'
import UserEdit from '../views/user/edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main,
    children: [
      { path: '/product/list', name: 'ProList', component: ProList, },
      { path: '/product/create', component: ProEdit },
      { path: '/product/edit/:id', component: ProEdit, props: true },
      // 项目类型
      { path: '/product/type', name: 'ProTypeList', component: ProTypeList, },
      { path: '/product/typeCreate', component: ProTypeEdit },
      { path: '/product/typeEdit/:id', component: ProTypeEdit, props: true },
      // 项目状态
      { path: '/product/state', name: 'ProStateList', component: ProStateList, },
      { path: '/product/stateCreate', component: ProStateEdit },
      { path: '/product/stateEdit/:id', component: ProStateEdit, props: true },
      // 物业状态
      { path: '/product/propertyType',  component: propertyTypeList, },
      { path: '/product/propertyTypeCreate', component: propertyTypeEdit },
      { path: '/product/propertyTypeEdit/:id', component: propertyTypeEdit, props: true },
      // 文章
      { path: '/article/list',  component: ArticleList, },
      { path: '/article/Create', component: ArticleEdit },
      { path: '/article/edit/:id', component: ArticleEdit, props: true },
      // 分类
      { path: '/category/list',  component: CategoryList, },
      { path: '/category/create', component: CategoryEdit },
      { path: '/category/edit/:id', component: CategoryEdit, props: true },
      // 用户
      { path: '/user/list',  component: UserList, },
      { path: '/user/create', component: UserEdit },
      { path: '/user/edit/:id', component: UserEdit, props: true },

    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
