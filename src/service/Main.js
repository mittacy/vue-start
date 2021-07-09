import { WebHttp as http } from './index.js';

export default class Main {
    /*
     * 登录
     */
    static statisticsOptions() {
        return http.get('/user/login');
    }
}