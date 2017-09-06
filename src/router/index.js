import Vue from 'vue'
import Router from 'vue-router'
import carousel from '@/views/carousel/carousel'
import admin from '@/views/admin/admin'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'carousel',
            component: carousel
        },
        {
            path: '/admin',
            name: 'admin',
            component: admin
        }
    ]
})
