export default {
    install(Vue, storage) {
        Vue.storage = Vue.prototype.$storage = {
            set(key, value) {
                storage.state[key] = value;
            },

            get(key) {
                return storage.state[key];
            },

            remove(key) {
                delete storage.state[key];
            }
        }
    }
}
