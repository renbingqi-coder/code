import { ShowErrorCallback } from '@ks/ks-universal-suite/src/axios';
import { Notification } from '@ks/ks-element-ui';
const showWarning: ShowErrorCallback['showError'] = function showError(msg) {
    Notification.warning({
        title: '提示',
        message: msg,
        duration: 3000,
    });
};
export default showWarning;
