import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import main from '@/components/main'
import about from '@/components/about'
import article from '@/components/article'
Vue.use(Router)
export default new Router({
  routes: [ 
    {
      path: '/',
      name: 'index',
      component: index,
      redirect:"main" 
    },
     {
      path: '/main',
      name: 'main',
      component: main
    },
     {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/article',
      name: 'article',
      component: article
    },
  ]
})
