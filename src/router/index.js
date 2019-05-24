import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import('@/views/login')
const Demo = () => import('@/views/demo')
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/demo',
            name: 'Demo',
            component: Demo
        }
    ]
})
