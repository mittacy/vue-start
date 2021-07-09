/**
 * @file Vuex配置文件
 */

import Vue from 'vue';
import Vuex from 'vuex';
import App from './modules/App';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        App
    }
});
