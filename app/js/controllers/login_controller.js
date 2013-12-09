/**
 * @author Bisike N. Nnadi
 */
"use strict";

voltaicLife.controller('login', ['$scope', 'angularFireAuth', function ($scope, angularFireAuth) {
    
    $scope.$on("angularFireAuth:login", function (evt, user) {
        console.log("User " + user.id + " successfully logged in!!!");
    });
    
    $scope.$on("angularFireAuth:logout", function(evt) {
        // User logged out.
    });
    
    $scope.$on("angularFireAuth:error", function(evt, err) {
        // There was an error during authentication.
    });

    $scope.login = function () {
        angularFireAuth.login("facebook");
    };

    $scope.logout = function () {
        angularFireAuth.logout();
    };


}])

