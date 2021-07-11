import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import global from './Global';

Vue.use(global);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: function (h) { return h(App) },
}).$mount('#app')
