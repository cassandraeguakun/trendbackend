require('./bootstrap');
// window.Vue = require('vue');
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
require('../../Plugins/easing/easing');
window.WOW = require('../../Plugins/wow/wow');
require('../../Plugins/superfish/hoverIntent');
require('../../Plugins/superfish/superfish');
require('../../Plugins/magnific-popup/magnific-popup');


require('../js/main');


Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app'
});
