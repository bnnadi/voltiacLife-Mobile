/**
 * @author Bisike N. Nnadi
 */

'use strict';
 
// Declare app level module which depends on filters, and services
angular.module('', [])
 
app.config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider
      .when('/',                    { templateUrl: 'views/index.html' })
      .otherwise(                   { redirectTo: '/' });
    }])