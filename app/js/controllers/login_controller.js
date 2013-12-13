/**
 * @author Bisike N. Nnadi
 */
"use strict";

voltaicLifeApp.controller('login', ['$scope', '$firebaseAuth', '$location', '$rootScope', function($scope, $firebaseAuth, $location, $rootScope){

    
    $scope.myFBLogin = function(){
     
        
        $rootScope.auth.$login('facebook',{scope: 'email,user_likes, user_actions.music, friends_likes'});
        console.log("Logging into facebook");
        $location.path('/userList');
        
        
    }
    
        
 
    $scope.$logout = function(){
        $firebaseAuth.$logout();
        $location.path('/');
    };

}]);
