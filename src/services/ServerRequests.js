export default {
    install(Vue) {
        Vue.server = Vue.prototype.$server = {
            test: {
                test() {
                    return Vue.serverEngine.request({
                        uri: Vue.serverRoutes.test.test(),
                        store: 'test'
                    });
                }
            }
        }
    }
}
