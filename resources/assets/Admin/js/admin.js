require('./bootstrap');
window.Vue = require('vue');


require('../js/vendor');
require('../js/bundle');


Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app'
});
