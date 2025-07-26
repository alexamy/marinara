import Vue from 'vue';
import Offscreen from './Offscreen';
import M from '../Messages';

Vue.config.productionTip = false;
Vue.config.devtools = false;

Vue.mixin({
  computed: {
    M() {
      return M;
    }
  }
});

new Vue({
  render: h => h(Offscreen)
}).$mount('#app');