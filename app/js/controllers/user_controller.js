voltaicLifeApp.controller('user', ['$scope', '$location', function($scope, $location){

    $scope.userInfo = function() {
    
    
        $location.path('/userProfile');
    };
}]);