import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/blog'
import PostShow from '../views/blog/PostShow'
import CreatePost from '../views/blog/CreatPost'
import EditPost from '../views/blog/UpdatePost.vue'
import Error404 from '../views/error404'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About

  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:id/:slug',
    name: 'PostShow',
    component: PostShow,
    props: true
  },
  {
    path: '/blog/add',
    name: 'Add Post',
    component: CreatePost,
    props: true
  },
  {
    path: '/blog/edit/:id',
    name: 'Edit Post',
    component: EditPost,
    props: true
  },
  {
    path: '/posts',
    redirect: '/blog'
  },
  {
    path: '/:catchAll(.*)',
    component: Error404,

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
