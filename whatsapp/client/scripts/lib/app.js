// Libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-meteor-auth';
import 'angular-moment';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';
 
// Modules
import ChatsCtrl from '../controllers/chats.controller';
import ChatCtrl from '../controllers/chat.controller';
import LoginCtrl from '../controllers/login.controller';
import InputDirective from '../directives/input.directive';
import CalenderFilter from '../filters/calender.filter';
import RoutesConfig from '../routes';
import Routes from '../routes';
 
const App = 'Whatsapp';
 
// App
Angular.module(App, [
  'angular-meteor',
  'angular-meteor.auth',
  'angularMoment',
  'ionic'
]);
 
new Loader(App)
  .load(ChatsCtrl)
  .load(ChatCtrl)
  .load(InputDirective)
  .load(LoginCtrl)
  .load(CalenderFilter)
  .load(RoutesConfig)
  .load(Routes);
// Startup
if (Meteor.isCordova) {
  Angular.element(document).on('deviceready', onReady);
}
else {
  Angular.element(document).ready(onReady);
}
 
function onReady() {
  Angular.bootstrap(document, [App]);
}