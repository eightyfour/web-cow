import Vue from 'vue'
import Router from 'vue-router'
import Cow from '../components/Cow.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name : 'cow',
            component: Cow,
        },
        {
            path: '/:cow',
            name : 'cow',
            component: Cow
        }
    ]
})