import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from "core-js";
// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
var axios = require('axios');
axios.default.baseURL = 'http://localhost:8443/api';
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
/*
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});*/
new Vue({
    router,
    store,
    render: h => h(App) // 不同之处是这里使用了 render + $mount 直接启动项目
}).$mount('#app');

