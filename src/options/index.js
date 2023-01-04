import { insertElementIcons } from '@/utils'
import Vue from 'vue'
import AppComponent from './App/App.vue'
import ElementConfig from '../content/config/element'

Vue.use(ElementConfig)

Vue.component('app-component', AppComponent)

// eslint-disable-next-line no-new
new Vue({
    el: '#app',
    render: createElement => {
        return createElement(AppComponent)
    }
})
