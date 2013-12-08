/**
 * @author Bisike N. Nnadi
 */

'use strict';
 
// Declare app level module which depends on filters, and services
angular.module('voltaicLife.config', [])
 
app.config(['$routeProvider', function($routeProvider) {
      $routeProvider
      .when('/',    { templateUrl: 'views/index.html' })
      .otherwise(   { redirectTo: '/' });
    }])
.run(['angularFireAuth','FBURL', '$rootScope', 
     function(angularFireAuth, FBURL, $rootScope){
        angularFireAuth.initialize(new Firebase(FBURL), {scope: $rootScope, name: 'auth'});
        $rootScope.FBURL = FBURL;
     }]);

// this is voltaicLife firebase URL
  .constant('FBURL', 'voltaicLife.firebaseIO.com/')