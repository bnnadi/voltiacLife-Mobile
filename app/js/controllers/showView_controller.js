voltaicLifeApp.controller('showView', ['$scope', '$location', function($scope, $location){
    
    $scope.pickedShow = function(){
        $scope.picked= $scope.show
        console.log($scope.picked.title);
        console.log($scope.picked.venue.name);
        
        
          $location.path('/show');
    }
}]);