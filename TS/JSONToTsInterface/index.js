/*
 * @Author: your name
 * @Date: 2021-11-09 11:07:59
 * @LastEditTime: 2021-11-23 20:50:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /code/TS/JSONToTsInterface/index.js
 */

const interfaceDefinition = require('json-to-ts-interface');
const res = interfaceDefinition(

    [
        {
            "indicator_subdimension_items": [
                {
                    "indicator_items": [
                        {
                            "id": 8,
                            "indicator_name": "RX packets"
                        },
                        {
                            "id": 9,
                            "indicator_name": "RX errors"
                        },
                        {
                            "id": 10,
                            "indicator_name": "RX overruns"
                        },
                        {
                            "id": 11,
                            "indicator_name": "RX frame"
                        },
                        {
                            "id": 12,
                            "indicator_name": "rx_crc_errors_phy"
                        },
                        {
                            "id": 13,
                            "indicator_name": "TX packets"
                        },
                        {
                            "id": 14,
                            "indicator_name": "TX bytes"
                        },
                        {
                            "id": 15,
                            "indicator_name": "TX errors"
                        },
                        {
                            "id": 16,
                            "indicator_name": "TX carrier"
                        },
                        {
                            "id": 17,
                            "indicator_name": "TX overruns"
                        }
                    ],
                    "indicator_subdimension": "ifconfig"
                }]
        }
    ],
    {
    globalExportMode: 2,      // 默认 don't export  1 = don't export 2 =  export 3 = export default
        lineBreak: '\n',          // 换行符
            indent: '  ',             // 缩进 默认两个空格
                interfaceName: 'Result',  // 导出第一级名称
                    interfaceNamePrefix: '',// 接口名称前缀
    }
    )
console.log(res);