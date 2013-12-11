/**
 * @author Bisike N. Nnadi
 */
'use strict';

voltaicLifeApp.controller('search', ['$scope', '$http', function($scope, $http){
    var APIv = '2.0';
    var APPID = "voltaicLife";
    var API_Format = 'json';
    
    $scope.artist = '';
    
    $scope.findArtist = function(){
        var API_URL = 'http://api.bandsintown.com/artists/' + $scope.artist + '/events.' + API_Format + '?api_version=' + APIv + '&app_id=' + APPID;
        $scope.foundIt = "The artist you're searching for is " + $scope.artist;
        
        console.log(API_URL);
        
            $scope.data = "unknown";
    $http.jsonp(API_URL)
        .success(function (data){
            $scope.data = data; 
            console.log('recieved data');
        });

    }
    
}]);