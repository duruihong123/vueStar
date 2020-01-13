// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./utils/initial";
Vue.config.productionTip = false

/* eslint-disable no-new */
import Mint from "mint-ui";
Vue.use(Mint);
import "mint-ui/lib/style.css";
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
