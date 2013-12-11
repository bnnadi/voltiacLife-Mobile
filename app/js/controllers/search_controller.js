/**
 * @author Bisike N. Nnadi
 */
'use strict';

voltaicLifeApp.controller('search', ['$scope', '$http', '$log', function($scope, $http, $log){
    var APIv = '2.0';
    var APPID = "voltaicLife";
    var API_Format = 'json';
    
    $scope.findArtist = function(){
        var API_URL = 'http://api.bandsintown.com/artists/' + $scope.artist + '/events.' + API_Format + '?api_version=' + APIv + '&app_id=' + APPID+ "&callback=JSON_CALLBACK";
        $scope.foundIt = "The artist you're searching for is " + $scope.artist;
        
        //console.log(API_URL);
           
        $http.jsonp(API_URL)
            .success(function(data, status, headers, config){
                $scope.data = data; 
                $log.info(data, status, headers(), config);
                console.log('hello',$scope.data);
            })
            .error(function(data, status, headers, config){
                $log.warn(data, status, headers(), config);
                console.log('hello');
            });
    }
    
}]);