var voltaicLifeApp = angular.module('voltaicLife', ['firebase', 'ngRoute']);
var URL = "https://voltaiclife.firebaseio.com/users";

voltaicLifeApp.run(['$firebaseAuth', '$rootScope', function ($firebaseAuth, $rootScope) {
    var ref = new Firebase(URL);
    $rootScope.auth = $firebaseAuth(ref);
}]);    

voltaicLifeApp.config(function($routeProvider){
    $routeProvider
        .when("/", {
            controller: "login",
            title: "Home"
        })
        .when("/", {
            controller: "search",
            title: "Search",
        })
        .otherwise({
            redirectTo:"/",
            title: "Home"
        });
});