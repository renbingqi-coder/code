import { ShowErrorCallback } from '@ks/ks-universal-suite/src/axios';
import { MessageBox } from '@ks/ks-element-ui';
// import '@ks/ks-element-ui/lib/theme-chalk/message-box.css';

const showError: ShowErrorCallback = function showError(isError: boolean, statusTextOrMsg: string) {
    const isTimeout = statusTextOrMsg.includes('timeout');
    if (isTimeout) {
        return;
    }
    MessageBox.alert(statusTextOrMsg, '出错了', { type: 'error' });
};

export default showError;
