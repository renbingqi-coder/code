/*
 * @Author: your name
 * @Date: 2021-11-18 19:51:51
 * @LastEditTime: 2021-11-18 19:55:12
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /code/项目模版/ajax/index.ts
 */
import Vue from 'vue';
import axios, {
    AxiosInstanceAutoExpand,
} from '@ks/ks-universal-suite/src/axios';
import { v4 as uuidv4 } from 'uuid';
import transform from './transform';
import showError from './custom.showMiniError';
import showWarning from './custom.showWarning';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const configs = require('./config.json');

const { createInstance } = axios;

export const api = createInstance(transform(configs[0])) as AxiosInstanceAutoExpand;
api.interceptors.request.use(function (config) {
    const regex = /^csrftoken=([^;.]*).*$/;
    const cookies = document.cookie.split('; ');
    const cookiesFilters = cookies.filter(v => {
        if (v.match(regex)) {
            return v;
        }
    });
    
    if (process.env.NODE_ENV === 'development') {
        api.defaults.headers.common['X-CSRFTOKEN'] = 'Hu0QpeMqAdRYHwj5F0wf9ic9me6f3qQo3aksimYYTCu6CiR9zH09jK9Oiiycshba';
    } else {
        api.defaults.headers.common['X-CSRFTOKEN'] = cookiesFilters[0] && cookiesFilters[0].split('=')[1];
    }
    api.defaults.headers.common['X-CI-Performance-Trace-Id'] = uuidv4();
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
export const kconf = createInstance(transform(configs[1])) as AxiosInstanceAutoExpand;
export const miniApi = createInstance(transform(configs[2])) as AxiosInstanceAutoExpand;
export const mock = createInstance(transform(configs[3])) as AxiosInstanceAutoExpand;
export const deployApi = createInstance(transform(configs[4])) as AxiosInstanceAutoExpand;
export const pipelineApi = createInstance(transform(configs[0])) as AxiosInstanceAutoExpand;

miniApi.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error && error.response && error.response.config.showError === false) {
            throw error;
        }
        showError(error);
        throw error;
    },
);
mock.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error && error.response && error.response.config.showError === false) {
            throw error;
        }
        showError(error);
        throw error;
    },
);
pipelineApi.interceptors.response.use(
    response => {
        if (response.code !== 0) {
            showWarning(response.message);
            throw response.message;
        }
        return response;
    },
    error => {
        if (error && error.response && error.response.config.showError === false) {
            throw error;
        }
        throw error;
    },
);

declare module 'vue/types/vue' {
    interface Vue {
                $http: AxiosInstanceAutoExpand;
    }
}

declare global {
    interface Window {
                $http: AxiosInstanceAutoExpand;
    }
}
window.$http = api;
Vue.prototype.$http = api;
