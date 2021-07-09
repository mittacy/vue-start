import axios from 'axios';
import Vue from 'vue';
import viewDesign from 'view-design';
import codeMsg from '../msg';

Vue.use(viewDesign);

export const variables = {
    getApiUrl: function () {
        return process.env.VUE_APP_API_URL;
    }
};

export const WebHttp = axios.create({
    baseURL: variables.getApiUrl(),
    withCredentials: true
});

WebHttp.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';


// 请求前处理
WebHttp.interceptors.request.use(config => {
    viewDesign.LoadingBar.start();
    return config;
}, error => {
    viewDesign.LoadingBar.error();
    return Promise.reject(error);
});

// 响应后处理
WebHttp.interceptors.response.use(res => {
    if (res.code == 0) {
        viewDesign.LoadingBar.finish();
        return res.data;
    }
    // 失败处理
    viewDesign.LoadingBar.error();
    let msg = codeMsg(res.code);
    viewDesign.Message.error(msg);
    return Promise.reject(msg);
}, error => {
    viewDesign.LoadingBar.error();
    // todo 处理错误
    console.log(error.response.data);
    return Promise.reject(error);
})
