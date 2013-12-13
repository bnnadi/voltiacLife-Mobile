/**
 * @author Bisike N. Nnadi
 */
'use strict';

voltaicLifeApp.controller('search', ['$scope', '$http', '$log', '$location', '$rootScope', '$route', function($scope, $http, $log, $location, $rootScope, $route){
    var APIv = '2.0';
    var APPID = "voltaicLife";
    var API_Format = 'json';
    
    $scope.likedArtist = function(){
        console.log($route.current.params.key) ;
//        $scope.foundIt=$rootScope.likes[$routeParams.key];
//        
//        var API_URL = 'http://api.bandsintown.com/artists/' + $scope.foundIt + '/events.' + API_Format + '?api_version=' + APIv + '&app_id=' + APPID+ "&callback=JSON_CALLBACK";
//                    
//                    
//        // using $http to  bring in the json data on the artist searched 
//        // and saving it to $scope.data  
//        $http.jsonp(API_URL)
//                .success(function(data, status, headers, config){
//                    $scope.shows = data; 
//                    $log.info(data, status, headers(), config);
//                    console.log('hello',$scope.shows);
//                })
//                .error(function(data, status, headers, config){
//                    $log.warn(data, status, headers(), config);
//                    console.log('hello');
//                });

        }
    
    $scope.findArtist = function(){
        var API_URL = 'http://api.bandsintown.com/artists/' + $scope.artist + '/events.' + API_Format + '?api_version=' + APIv + '&app_id=' + APPID+ "&callback=JSON_CALLBACK";
        $scope.foundIt = $scope.artist;

        // using $http to  bring in the json data on the artist searched and saving it to $scope.data  
        $http.jsonp(API_URL)
            .success(function(data, status, headers, config){
                $scope.shows = data; 
                $log.info(data, status, headers(), config);
               // console.log('hello',$scope.shows);
            })
            .error(function(data, status, headers, config){
                $log.warn(data, status, headers(), config);
                console.log('hello');
            });
        
        // emptying the search field
        $scope.artist = " ";
        
        // Changing location to the partial for artisted searched 
        // since it is coming from a search field
        $location.path('/artistSearched');
    }

}]);