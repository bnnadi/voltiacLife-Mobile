voltaicLifeApp.controller('user', ['$scope', '$rootScope','$location', function($scope, $location, $rootScope){
    $scope.userShow = true;
    
    //console.log('$rootScope.user.show',$rootScope.user.show);
    if(!$rootScope.user || !$rootScope.user.show){
        $scope.userShow = false;
    }else{
        $scope.userShow = true;
    }
     
}]);