// router.js
import Vue from 'vue'
import Router from 'vue-router'

const Foo = () => import(/* webpackChunkName: "group-foo" */'./components/Foo.vue')
const Boo = () => import(/* webpackChunkName: "group-foo" */'./components/Boo.vue')
const List = () => import(/* webpackChunkName: "group-foo" */'./components/List.vue')
const Home = () => import(/* webpackChunkName: "home" */'./components/Home.vue')
const Item = () => import('./components/Item.vue')

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
        { path: '/foo', component: Foo },
        { path: '/boo', component: Boo },
        { path: '/list', component: List },
        { path: '/', component: Home },
        { path: '/item/:id', component: Item },
    ]
  })
}