import Vue from 'vue'
import VueRouter from 'vue-router'
import pageA from './pages/a.vue'
import pageB from './pages/b.vue'


Vue.use(VueRouter)

//路径关联关系
const routes = [
    {
        path:'/',
        component:pageA
    },
    {
        path:'/pageb',
        component:pageB
    }
]
//实例化路径
const router = new VueRouter({
    routes
})
//对象导出
export default router