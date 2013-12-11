/**
 * @author Bisike N. Nnadi
 */
"use strict";

voltaicLifeApp.controller('login', ['$scope', '$firebaseAuth', function($scope, $firebaseAuth){
    
    $scope.$on("$firebaseAuth:login", function(evt, user){
        console.log("User " + user.id + " successfully logged in!!!");
    });
    
    $scope.$on("$firebaseAuth:logout", function(evt){
          console.log("User successfully logged out, sadness");
    });
    
    $scope.$on("$firebaseAuth:error", function(evt, err){
        console.log("Major error to report");
    });

    $scope.$login = function(){
        $firebaseAuth.$login("facebook");
        console.log("Logging into facebook");
    };

    $scope.$logout = function(){
        $firebaseAuth.$logout();
    };

}]);
