import Vue from 'vue'
import App from './App.vue'
// 导入bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// 导入index.css
import './assets/css/index.css'
// 导入路由
import router from './routes/router.js';

// vue实例
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
