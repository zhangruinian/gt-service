import Vue from 'vue'
import Router from 'vue-router'
import carousel from '@/views/carousel/carousel'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'carousel',
            component: carousel
        }
    ]
})
