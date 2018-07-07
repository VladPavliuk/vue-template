export default {
    install(Vue) {
        Vue.serverRoutes = Vue.prototype.$serverRoutes = {
            test: {
                test: () => '/test'
            }
        }
    }
}
