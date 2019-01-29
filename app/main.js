import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'
import Vuex from 'vuex'
import AuthService from "./services/AuthService"
import routes from "./router"
// export const authService = new AuthService();
Vue.use(Vuex)

var firebase = require("nativescript-plugin-firebase");

firebase.init({
  // Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs.
}).then(
    function () {
      console.log("firebase.init done");
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
);

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)

const loggedIn = firebase.getCurrentUser()
.then(user => console.log("User uid: " + user.uid))
.catch(error => console.log("Trouble in paradise: " + error));;



// if (loggedIn) {
//   authService.userWrapper.user = authService.user;
//   // editingUserService.userWrapper.user = authService.userWrapper.user;
//   // editingUserService.watchUser();
// }

new Vue({
  // render: h => h('frame', [h(App)])
  render: h => h('frame', [h(loggedIn ? routes.home : routes.login)])
}).$start()
