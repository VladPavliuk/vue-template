import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueResource from 'vue-resource';

//> Import bootstrap
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
//<

//> Import custom services.
import FlashMessageService from '@/services/FlashMessage';
import CookieService from '@/services/Cookie';
import StorageService from '@/services/Storage';
import AuthService from '@/services/Auth';
import ServerEngine from '@/services/ServerEngine';
import ServerRoutes from '@/services/ServerRoutes';
import ServerRequests from '@/services/ServerRequests';
//<

//> Use 3-td party services
Vue.use(VueResource);
Vue.use(BootstrapVue);
//<

//> Use custom service.
Vue.use(FlashMessageService);
Vue.use(CookieService);
Vue.use(AuthService);
Vue.use(StorageService, store);
Vue.use(ServerEngine);
Vue.use(ServerRoutes);
Vue.use(ServerRequests);
//<

Vue.config.productionTip = false;

Vue.http.options.root = process.env.VUE_APP_SERVER_URL;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
