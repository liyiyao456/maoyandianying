import Vue from "vue";
import App from "./App";
import router from "./router";
import eventBus from "./untils/eventBus";
import transDate from "./untils/transDate";
import Axios from "axios";
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.prototype.$eventBus = eventBus;
Vue.prototype.$axios = Axios;
Vue.filter("transDate1", function(data) {
  return transDate(data);
});

new Vue({
  data: {
    isLogin: false,
  },
  router, 
  el: "#app",
  render: (h) => h(App),
});
