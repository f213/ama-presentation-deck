import Vue from 'vue';
import VueHead from 'vue-head';
import consola from 'consola';

import App from './App.vue';
import store from './store';


Vue.config.productionTip = false;

Vue.prototype.$consola = consola;

Vue.use(VueHead);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
