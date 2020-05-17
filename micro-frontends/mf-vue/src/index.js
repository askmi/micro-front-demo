import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import App from './components/App.vue';


// new Vue({ render: createElement => createElement(App) }).$mount('#app');



const VueComponent = wrap(Vue, App)

window.customElements.define('mf-vue', VueComponent);