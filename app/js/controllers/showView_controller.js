voltaicLifeApp.controller('showView', ['$scope', '$location', '$http', '$log', '$rootScope', '$routeParams', function($scope, $location, $http, $log, $rootScope, $routeParams){
    // the array will store all the shows that the user has viewed
    $rootScope.showViewed = [];
    
   // console.log($scope.shows[$routeParams.key])
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
             onSale          : $scope.showPicked.on_sale_datetime,
             image           : $scope.showPicked.artists[0].image_url
            
        };
    
        $rootScope.showViewed.push($scope.showInfo.showTitle);
    $rootScope.showViewed.$save
        console.log($rootScope.showViewed)
        // console.logging the object showInfo  to see if the information was stored
        if($scope.showInfo.ticketStatus === 'unavailable'){
            console.log('Show is not available so no need to notify firends');
        }else{
                   // going through facebook finding all of the users friends and displaying them for the user can have option to send a notfcation on show
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
            
        }

        
}]);