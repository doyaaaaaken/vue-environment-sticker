import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');


//For library
import EnvironmentSticker from 'vue-environment-sticker';
export default EnvironmentSticker