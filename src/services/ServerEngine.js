export default {
    install(Vue) {
        Vue.serverEngine = Vue.prototype.$serverEngine = {

            /**
             * Params:
             *  url,
             *  methods,
             *  body,
             *  headers,
             *  message,
             *  loading,
             *  auth,
             *  store
             *
             * @param params
             */
            request(params) {
                params = this.defineDefaultRequestParams(params || {});

                return new Promise((resolve, reject) => {
                    Vue.http({
                        url: params.uri,
                        method: params.method,
                        body: params.body,
                        headers: params.headers,
                        progress: function (asd) {
                            // console.log(asd);
                        }
                    }).then(res => {
                        this.handleSuccessResponse(params, res);
                        resolve(res);
                    }).catch(error => {
                        this.handleErrorResponse(params, error);
                        reject(error);
                    });
                })
            },

            defineDefaultRequestParams(params) {
                if (!params.hasOwnProperty('uri'))
                    params.uri = '/';

                if (!params.hasOwnProperty('method'))
                    params.method = 'get';

                if (!params.hasOwnProperty('body'))
                    params.body = {};

                if (!params.hasOwnProperty('headers'))
                    params.headers = {};

                if (!params.hasOwnProperty('message'))
                    params.message = false;

                if (!params.hasOwnProperty('loading'))
                    params.loading = false;

                if (params.hasOwnProperty('auth') && params.auth)
                    params.headers['Authorization'] = Vue.auth.getToken();

                if (!params.hasOwnProperty('store'))
                    params.loading = false;

                return params;
            },

            handleSuccessResponse(params, response) {
                if (params.hasOwnProperty('store'))
                    Vue.storage.set(params.store, response.body.data);

                if (params.hasOwnProperty('message') && params.message)
                    Vue.flashMessage.show(params.message === true ? response.data.message : params.message, 2);
            },

            handleErrorResponse(params, response) {
                if (params.hasOwnProperty('message') && params.message)
                    Vue.flashMessage.show(params.message === true ? response.data.message : params.message, 3);
            }
        }
    }
}
