/**
 * @author Bisike N. Nnadi
 */
'use strict';

var APIv = 2.0;
var APPID = "voltaicLife";
var API_Format = 'json';
var API_URL = 'http://api.bandsintown.com/artists/' + $scope.artist + '/events.' + API_Format + '?api_version=' + APIv + '&app_id=' + APPID;

console.log(API_URL);

voltaicLife.controller('search', ['$scope', '$http', function($scope, $http){
    $scope.artist = '';
    
    $scope.findArtist = function(){
        $scope.foundIt = "The artist you're searching for is " + $scope.artist
    }
    
    $scope.data = "unknown";
    $http.get(API_URL)
        .success(function (data){
            $scope.data = data;
            console.log($scope.data);
        });

}]);