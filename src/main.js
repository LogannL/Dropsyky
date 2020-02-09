import '@babel/polyfill';
import 'mutationobserver-shim';
import './plugins/bootstrap-vue';
import App from './App.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './routes';

const router = new VueRouter({
  routes,
  mode: 'history'
});
Vue.use(VueRouter);
Vue.use(router);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
