voltaicLifeApp.controller('showView', ['$scope', '$location', '$http', '$log', '$rootScope', '$routeParams', function($scope, $location, $http, $log, $rootScope, $routeParams){
    console.log($routeParams.key)
    // function to init change the view and store
        $scope.showPicked= $scope.shows[$routeParams.key]
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
//        console.log($scope.showInfo);
       // console.log($rootScope.auth.user.id);
        $http.jsonp("https://graph.facebook.com/"+$rootScope.auth.user.id+"?fields=name,friends.fields(name,music)&callback=JSON_CALLBACK&access_token=" + $rootScope.user.access)
                .success(function(data, status, headers, config){
                    $rootScope.friends = data.friends.data; 
                    $log.info(data, status, headers(), config);
                   // console.log('hello friends likes! ',$rootScope.friends);
                })
                .error(function(data, status, headers, config){
                    $log.warn(data, status, headers(), config);
                    console.log('no good friends');
            });
        
        
}]);