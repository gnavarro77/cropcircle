import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LoadScript from 'vue-plugin-load-script';


require('../node_modules/milligram/dist/milligram.min.css');

import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';

require('../public/crop_commons.js');
require('../public/parser-transform.js');



window.Vue = Vue;
window.Snap = Snap;

Vue.use(LoadScript);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
