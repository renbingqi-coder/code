import { ToggleLoadingCallback } from '@ks/ks-universal-suite/src/axios';

import { Loading } from '@ks/ks-element-ui';
// for lost css style
// import '@ks/ks-element-ui/lib/theme-chalk/loading.css';
import { ElLoadingComponent } from '@ks/ks-element-ui/types/loading';

let loading: ElLoadingComponent;

function showLoading() {
    loading = Loading.service({
        fullscreen: true,
    });

}

function hideLoading() {
    loading && loading.close();

}

const toggleLoading: ToggleLoadingCallback = function showError(isShow = true) {
    // eslint-disable-next-line no-console
    if (isShow) {
        showLoading();
    } else {
        hideLoading();
    }
};

export default toggleLoading;
