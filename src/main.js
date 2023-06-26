
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import '@vant/touch-emulator'
import 'vant/lib/index.css'
// 字体库
// import './icon/iconfont.css'
import store from './store/index.js'
// 自定义组件库
import FLYmodules from './components/modules/index.js'
// 自定义全局方法库
import PublicFun from './assets/js/exit_fun.js'
// // 自定义过滤器
import filters from './assets/js/filters.js'
// 指令统一处理加载
import directives from './assets/js/directives.js'
// 路由切换加载进度条
import LoadingBar from './components/loading-bar/index.js'
Vue.use(FLYmodules)
Vue.use(PublicFun)
// 过滤器统一处理加载
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
// 国际化
// import { i18n } from './i18n/index'

Object.keys(directives).forEach(key => {
    Vue.directive(key, {
        bind: directives[key].bind,
        inserted: directives[key].inserted,
        update: directives[key].update,
        componentUpdated: directives[key].componentUpdated,
        unbind: directives[key].unbind
    })
})
router.beforeEach((to, from, next) => {
    LoadingBar.start()
    next()
})
router.afterEach(transition => {
    LoadingBar.finish()
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    store,
    // i18n,
    render: h => h(App)
}).$mount('#app')

