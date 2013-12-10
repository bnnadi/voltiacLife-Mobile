/**
 * @author Bisike N. Nnadi
 */
'use strict';

var APIv = 2.0;
var APPID = "voltaicLife";
var API_Format = 'json';
var searchedArtists = document.getElementById("searchInput");
var API_URL = 'http://api.bandsintown.com/artists/' + searchedArtists + '/events.' + API_Format + '?api_version=' + APIv + '&app_id=' + APPID;

console.log(API_URL);

voltaicLife.controller('search', ['$scope', '$http', function ($scope, $http) {
    $scope.data = "unknown";
    $http.get(API_URL)
        .success(function (data) {
            $scope.data = data;
            console.log($scope.data);
        });

}]);