import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import ProTypeList from '../views/product/typeList.vue'
import ProTypeEdit from '../views/product/typeEdit.vue'
import ProList from '../views/product/list.vue'
import ProEdit from '../views/product/edit.vue'

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
      { path: '/product/type', name: 'ProTypeList', component: ProTypeList, },
      { path: '/product/typeCreate', component: ProTypeEdit },
      { path: '/product/typeEdit/:id', component: ProTypeEdit, props: true },
      // {
      //   path: '/product/index', component: Product,
      //   children: [
      //     { path: '/product/list', name: 'ProList', component: ProList, },
      //     { path: '/product/create', name: 'ProEdit', component: ProEdit },
      //     { path: '/product/edit/:id', name: 'ProEdit', component: ProEdit, props: true },
      //   ]
      // },
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
