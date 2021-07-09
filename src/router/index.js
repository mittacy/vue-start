/**
 * @file 路由配置文件
 */

import Vue from 'vue';
import Router from 'vue-router';
import viewDesign from 'view-design';
import NotFoundComponnent from '@/pages/NotFound';

Vue.use(Router);
Vue.use(viewDesign);

const routes = [
    {
        name: 'NotFound',
        path: '/notfound',
        meta: {
            roles: ['guest', 'user', 'admin']
        },
        component: NotFoundComponnent
    },
]

const router = new Router({
    mode: 'history',
    routes
});

// 路由跳转前处理
router.beforeEach((to, from, next) => {
    viewDesign.LoadingBar.start();
    // 检查路由匹配，匹配不成功则重定向到某个页面
    if (to.matched.length == 0) {
        next({ path: '/notfound' });
        viewDesign.Message.error('页面未找到');
        return;
    }
    next();
});

// 路由加载完成后处理
router.afterEach(route => {
    viewDesign.LoadingBar.finish();
})

export default router;