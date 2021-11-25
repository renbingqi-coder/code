declare module '@ks/ks-universal-suite' {
    import axios from '@ks/ks-universal-suite/src/axios';
    export {
        axios,
    };
}

declare module '@ks/ks-universal-suite/src/axios' {

    import { AxiosInstance, AxiosRequestConfig } from 'axios';
    export * from 'axios';

    /**
     * 数据格式
     */
    export interface ResponseStructureConfig {
        /**
         * 成功状态字段
         */
        codeField: string;
        /**
         * 成功状态值
         */
        codePass: number;
        /**
         * 信息字段
         */
        msgField: string;
        /**
         * 数据字段
         */
        bodyField: string;
    }

    export interface ShowErrorCallback {
        (
            /**
             * 总返回true
             */
            isError: boolean,

            /**
             * 状态文本或错误信息
             * HTTP 状态码错误时 返回状态文本
             * 数据字段指示错误时 返回错误文本字段 msgField
             */
            statusTextOrMsg: string
        ): void;
    }


    export interface ShowErrorConfig {
        showError: ShowErrorCallback | false;
        structure: ResponseStructureConfig;
    }

    export interface ToggleLoadingCallback {
        (
            /**
             * 是否切换到显示loading
             */
            isShow: boolean,
        ): void;
    }
    export interface ShowLoadingConfig {
        showLoading: ToggleLoadingCallback | false;
        /**
         * Loading 隐藏延时
         * 单位 ms
         */
        LOADING_HIDE_DELAY?: number;
    }

    export interface AxiosRequestConfigExtend extends AxiosRequestConfig {
        /**
         * 加载动画设置
         */
        universalLoading?: ShowLoadingConfig;
        /**
         * 数据格式与错误处理
         */
        universalErrorHandler?: ShowErrorConfig;
        /**
         * GET 请求是否附加随机数
         * 添加参数 _t = 当前时间
         */
        enableRandomNumber?: boolean;
        /**
         * 成功时 是否自动返回res.data
         */
        enabledExtract?: boolean;
    }

    /**
     * 满足 成功状态码 且 成功字段值 codeField 为 codePass
     * 相关请求方法返回的 Promise 的 value
     * 为 res.data 对象
     */
    export interface AxiosInstanceAutoExpand extends AxiosInstance {
        request<T = any>(config: AxiosRequestConfigExtend): Promise<T>;
        get<T = any>(url: string, config?: AxiosRequestConfigExtend): Promise<T>;
        delete<T = any>(url: string, config?: AxiosRequestConfigExtend): Promise<T>;
        head<T = any>(url: string, config?: AxiosRequestConfigExtend): Promise<T>;
        post<T = any>(url: string, data?: any, config?: AxiosRequestConfigExtend): Promise<T>;
        put<T = any>(url: string, data?: any, config?: AxiosRequestConfigExtend): Promise<T>;
        patch<T = any>(url: string, data?: any, config?: AxiosRequestConfigExtend): Promise<T>;
    }

    interface CreateInstance {
        (config: AxiosRequestConfig): AxiosInstance | AxiosInstanceAutoExpand;
    }

    const createInstance: CreateInstance;
    export {
        createInstance,
    };
}
