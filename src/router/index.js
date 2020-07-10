import Vue from 'vue'
import VueRouter from 'vue-router'
import user from './user'
import Home from '../components/Home'
import movie from '../components/movie'
import smallmovie from '../components/smallmovie'
import star from '../components/man'
import show from '../components/show'
import now from '../components/movie/now'
import news from '../components/movie/news'
import hot from '../components/home/hotmovie'
import yingyuan from '../components/home/yingyuan'
import daiyingmovie from '../components/home/daiyingmovie'
import jingdian from '../components/home/jingdian'
import list from '../components/smallmovie/smallmovielist'
import Detail from '../components/home/daiying/Detail'
import showlist from '../components/yanchu/list'
import stardetail from '../components/yanchu/stardetail'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    ...user,
    {
      path: '/daiyingmovie/Detail/:id',
      component: Detail,
    },
    {
      alias: '/',
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home',
          component: hot,
        },
        {
          path: '/home/yingyuan',
          component: yingyuan,
        },
        {
          path: '/home/daiyingmovie',
          component: daiyingmovie,
        },
        {
          path: '/home/jingdian',
          component: jingdian,
        },
      ],
    },
    {
      path: '/movie',
      component: movie,
      children: [
        {
          path: '/movie/now',
          component: now,
        },
        {
          path: '/movie/news',
          component: news,
        },
      ],
    },
    {
      path: '/smallmovie',
      component: smallmovie,
    },
    {
      path: '/list/:id',
      component: list,
    },
    {
      path: '/star',
      component: star,
    },
    {
      path: '/stardetail/:id',
      component: stardetail,
    },
    {
      path: '/showlist',
      component: showlist,
    },
    {
      path: '/show',
      component: show,
    },
  ],
})
