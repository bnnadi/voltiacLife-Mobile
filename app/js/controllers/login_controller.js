/**
 * @author Bisike N. Nnadi
 */
"use strict";

voltaicLifeApp.controller('login', ['$scope', '$firebaseAuth', '$location', function($scope, $firebaseAuth, $location){

    $scope.$login = function(){
        $firebaseAuth.$login('facebook',{scope: 'user_likes, friends_likes, user_interests, friends_interests'});
        console.log("Logging into facebook");
        $location.path('/userList');
    };

    $scope.$logout = function(){
        $firebaseAuth.$logout();
        $location.path('/');
    };

}]);
