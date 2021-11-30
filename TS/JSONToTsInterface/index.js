/*
 * @Author: your name
 * @Date: 2021-11-09 11:07:59
 * @LastEditTime: 2021-11-28 19:21:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /code/TS/JSONToTsInterface/index.js
 */

const interfaceDefinition = require('json-to-ts-interface');
const res = interfaceDefinition(
    {
        "items": [
          {
            "hostname": "bjfk-rs10687.yz02",
            "id": 1,
            "name": "图表1",
            "resource_path": "https://cdnfile.corp.kuaishou.com/kc/files/a/sysdg/custom_data/c6e7cgi1e3uo4i5ia23g-test.svg"
          },
          {
            "hostname": "bjfk-rs10687.yz02",
            "id": 2,
            "name": "图表1",
            "resource_path": "https://cdnfile.corp.kuaishou.com/kc/files/a/sysdg/custom_data/c6e7ch21e3uo4i5ia240-test.svg"
          },
          {
            "hostname": "bjfk-rs10687.yz02",
            "id": 3,
            "name": "图表1",
            "resource_path": "https://cdnfile.corp.kuaishou.com/kc/files/a/sysdg/custom_data/c6e7chi1e3uo4i5ia24g-test.svg"
          },
          {
            "hostname": "bjfk-rs10687.yz02",
            "id": 4,
            "name": "新图表",
            "resource_path": "https://cdnfile.corp.kuaishou.com/kc/files/a/sysdg/custom_data/c6erclq1e3ut92ofbe50-test.svg"
          }
        ]
      },
    {
    globalExportMode: 2,      // 默认 don't export  1 = don't export 2 =  export 3 = export default
        lineBreak: '\n',          // 换行符
            indent: '  ',             // 缩进 默认两个空格
                interfaceName: 'Result',  // 导出第一级名称
                    interfaceNamePrefix: '',// 接口名称前缀
    }
    )
console.log(res);