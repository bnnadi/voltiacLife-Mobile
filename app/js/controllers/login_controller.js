/**
 * @author Bisike N. Nnadi
 */
"use strict";

voltaicLifeApp.controller('login', ['$scope', '$firebaseAuth', function($scope, $firebaseAuth){

    $scope.$login = function(){
        $firebaseAuth.$login('facebook',{scope: 'user_likes, friends_likes, user_interests, friends_interests'
        });
        console.log("Logging into facebook");
    };

    $scope.$logout = function(){
        $firebaseAuth.$logout();
    };

}]);
