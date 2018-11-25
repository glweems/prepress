import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/products/',
      name: 'products',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/Items.vue'),
      props: true,
      // children: [{
      //    path: "/products/:id",
      //    name: "singleProduct",
      //    component: () => import(/* webpackChunkName: "about" */ './views/SingleProduct.vue'),
      //    props: true
      // }]
    },
    {
      path: '/products/:id',
      name: 'singleProduct',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/SingleProduct.vue'),
      props: true
    }
  ]
})
