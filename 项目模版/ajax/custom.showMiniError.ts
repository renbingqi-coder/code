import { MessageBox } from '@ks/ks-element-ui';
import { ShowErrorConfig } from '@ks-tangram/vue-cli-plugin-ajax/lib/http';

const showError: ShowErrorConfig['showError'] = function showError(err) {
    if (err) {
        const responseData: any = err.response || null;
        let backendError;
        if (responseData) {
            if (typeof responseData.data === 'object') {
                backendError = `${responseData.data.err_code || responseData.data.error_code}
                : ${responseData.data.err_message || responseData.data.error_msg}`;
            } else if ('status' in responseData && 'statusText' in responseData) {
                backendError = `${responseData.data.err_code}: ${responseData.statusText}`;
            }
        }
        if (backendError) {
            MessageBox.alert(backendError, {
                title: '提示',
                dangerouslyUseHTMLString: true,
            });
        }
    }
};

export default showError;
