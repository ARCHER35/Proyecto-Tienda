import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase'

Vue.use(BootstrapVue)

Vue.use(VueAxios, axios)

//Initialize firebase
Vue.config.productionTip = false
var firebaseConfig = {
  apiKey: "AIzaSyBbZphtg0FC_sw1raC5UhicHI-xAhOW3dw",
  authDomain: "frial-cris.firebaseapp.com",
  databaseURL: "https://frial-cris.firebaseio.com",
  projectId: "frial-cris",
  storageBucket: "frial-cris.appspot.com",
  messagingSenderId: "570403986050",
  appId: "1:570403986050:web:0006a4b345cf019bc6f29b",
  measurementId: "G-6EYP7YBEE1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

firebase.auth().onAuthStateChanged(function(user){
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})