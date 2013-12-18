voltaicLifeApp.controller('showView', ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams){
    
    // function to init change the view and store
        $scope.showPicked= $scope.shows[$routeParams.key]
        console.log($scope.shows[$routeParams.key])
        // taking the picked show from the list and storing the infomation into the object showInfo
        $scope.showInfo = {
            
             showTitle       : $scope.showPicked.title,
             venue           : $scope.showPicked.venue.name,
             location        : $scope.showPicked.formatted_location,
             date            : $scope.showPicked.formatted_datetime,
             ticketUrl       : $scope.showPicked.ticket_url,
             ticketStatus    : $scope.showPicked.ticket_status,
             ticketType      : $scope.showPicked.ticket_type,
             onSale          : $scope.showPicked.on_sale_datetime,
             image           : $scope.showPicked.artists[0].image_url
            
        };
    
        if(!$rootScope.user.shows)
        {
            $rootScope.user.shows = [];
        }
        $scope.showList = [];
        $scope.showList.push($routeParams.key, $scope.showInfo.showTitle);
        $rootScope.user.shows.push($scope.showList);
        $rootScope.user.$save('shows');

            // console.logging the object showInfo  to see if the information was stored
        if($scope.showInfo.ticketStatus === 'unavailable'){
            console.log('Show is not available so no need to notify firends');
            
        }else{
            console.log('users friends can be shown');
        }
        
}]);