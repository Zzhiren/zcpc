// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/index.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueVideoPlayer from 'vue-video-player'
// import router from './router'
import 'video.js/dist/video-js.css'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
Vue.use(VueVideoPlayer)



var router = new VueRouter({
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
