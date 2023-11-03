import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from '../views/posts/PostView.vue'
import PostDetailsView from '../views/posts/PostDetailsView.vue'
import JobsView from '../views/jobs/JobsView.vue'
import JobDetaisView from '../views/jobs/JobDetailsView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostView
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/posts/:id',
    name: 'post_details',
    component: PostDetailsView,
    props: true
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },
  {
    path: '/jobs/:id',
    name: 'job_details',
    component: JobDetaisView,
    props: true
  },

  // redirect
  {
    path: '/all-jobs',
    redirect: '/jobs',
  },

  // catchAll 404 Routes
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
