voltaicLifeApp.controller('showView', ['$scope', '$location', function($scope, $location){

    // function to init change the view and store
    $scope.pickedShow = function(){
        $scope.showPicked= $scope.show
        // taking the picked show from the list and storing the infomation into the object showInfo
        $scope.showInfo = {
            
             showTitle       : $scope.showPicked.title,
             venue           : $scope.showPicked.venue.name,
             location        : $scope.showPicked.formatted_location,
             date            : $scope.showPicked.formatted_datetime,
             ticketUrl       : $scope.showPicked.ticket_url,
             ticketStatus    : $scope.showPicked.ticket_status,
             ticketType      : $scope.showPicked.ticket_type,
             onSale          : $scope.showPicked.on_sale_datetime
            
        };
        
        // console.logging the object showInfo  to see if the information was stored
        console.log($scope.showInfo);
        
        $location.path('/show');
    }
}]);