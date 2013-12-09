var voltaicLife = angular.module('voltaicLife', ['firebase']);
var URL = "https://voltaiclife.firebaseio.com/";

voltaicLife.run(['angularFireAuth', '$scope', function (angularFireAuth, $scope) {
    var ref = new Firebase(URL);
    angularFireAuth.initialize(ref, {scope: $scope, name: "user"});
}]);    

voltaicLife.config(function($routes){
    $routes
    `.when("/", {
        controller: "login",
        title: "Home"
    })
    .when("/", {
        controller: "search",
        title: "Search"
    })
    .otherwise({
        redirectTo:"/",
        title: "Home"
    });


});