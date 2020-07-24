import Vue from 'vue'
import App from './app.vue'
import router from './route'
import store from './store'
import less from 'less'
import build from '@/api/filter.js'

import './style/font.less';
import "98.css";
import './style/index.less';

import buildViewer from './api/global.js'

import { eventBusPlugin } from '@/api/event.js';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

import 'cesium/Build/Cesium/Widgets/widgets.css'


Vue.use(eventBusPlugin);//使用封装的event.js
Vue.use(less)
Vue.use(build)
Vue.config.performance = process.env.NODE_ENV !== 'production'
Vue.config.devtools = process.env.NODE_ENV !== 'production'

Vue.prototype.global = buildViewer;

const Bus = new Vue();
new Vue({
    components: { App },
    data: {Bus},
    router,
    store,
    template: '<App/>'
  }).$mount('#app')
