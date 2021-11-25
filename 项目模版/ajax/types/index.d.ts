import { ResponseStructureConfig } from '@ks/ks-universal-suite/src/axios';

export interface AjaxConfig {
    name: string;
    inject: string;
    showError: boolean;
    showLoading: boolean;
    structure: ResponseStructureConfig;
    enableRandomNumber: boolean;
    enabledExtract: boolean;
}
