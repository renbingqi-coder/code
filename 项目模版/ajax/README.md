# ajax 插件

封装@ks/ks-universal-suite

## 配置

### 配置项

| 参数             | 用途                | 说明                                             |
| ----------------| ------------------ | ------------------------------------------------ |
### 自定义代码

`src/tangram/ajax/custom.*.ts`

* custom.showError.ts 状态码错误或 状态码错误 时的自定义回调
  * function showError(isError: boolean, statusTextOrMsg: string)
    ts 补充定义 `ShowErrorCallback` from '@ks/ks-universal-suite/src/axios';
    
* custom.showLoading.ts 切换 Loading 显示
  * function showError(isShow: boolean = true)
    ts 补充定义 `ToggleLoadingCallback` from '@ks/ks-universal-suite/src/axios';
  
  * showLoading()
  * hideLoading()
