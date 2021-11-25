/*
 * @Author: your name
 * @Date: 2021-11-18 12:47:55
 * @LastEditTime: 2021-11-18 13:40:13
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /code/Vue/vue模版/src/main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");



vm.$option.el

vm.$el= el && inBrowser ? query(el) : undefined;

updateComponent = ()=>{
    vm._update._render()
}
