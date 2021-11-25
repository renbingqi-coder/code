import { AjaxConfig } from '@/tangram/ajax/types';
import { AxiosRequestConfigExtend } from '@ks/ks-universal-suite/src/axios';

import showErrorFunc from '@/tangram/ajax/custom.showError';
import toggleLoadingFunc from '@/tangram/ajax/custom.showLoading';

/**
 * 转换插件配置到 axios 配置
 **/
export default function transform(config: AjaxConfig): AxiosRequestConfigExtend {
    const {
        // @ts-ignore
        baseURL,
        enabledExtract,
        enableRandomNumber,
        structure,
        showError,
        showLoading,
        ...other
    } = config;

    const baseURLPrefix = process.env.VUE_APP_PLUGIN_INJECTED_API_BASE_URL || '';
    const result: AxiosRequestConfigExtend = {
        baseURL: baseURLPrefix + (baseURL || ''),
        universalErrorHandler: {
            structure,
            showError: showError ? showErrorFunc : false,
        },
        universalLoading: {
            showLoading: showLoading ? toggleLoadingFunc : false,
        },
        enableRandomNumber,
        enabledExtract,
    };
    // eslint-disable-next-line no-console
    // console.log(result);
    return {
        ...result,
        ...other,
    };
}
