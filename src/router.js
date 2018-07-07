import Vue from 'vue';
import Router from 'vue-router';

import TestLayout from '@/components/test/index';
import TestComponent from '@/components/test/components/test/index';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: TestLayout,
            children: [
                {
                    path: '',
                    name: 'test',
                    component: TestComponent
                }
            ]
        }
    ]
});
