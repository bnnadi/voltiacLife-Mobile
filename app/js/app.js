var voltaicLifeApp = angular.module('voltaicLife', ['firebase', 'ngRoute']);

voltaicLifeApp.run(['$firebaseAuth', '$rootScope', '$firebase', '$location', function ($firebaseAuth, $rootScope, $firebase, $location) {
    var URL = "https://voltaiclife.firebaseio.com/";
    var ref = new Firebase(URL);
    $rootScope.auth = $firebaseAuth(ref);
    
    $rootScope.$on("$firebaseAuth:login", function(evt, user){
        console.log("User " + user.id + " successfully logged in!!!");
        
        $rootScope.user = $firebase(new Firebase(URL+ 'users/' + user.id));
        
        $rootScope.user.$on("loaded", function(userData){
            console.log("user data loaded");
            console.log("userData ", userData);
            
            console.log("user ", user);
            if(!userData){
                
                var newUser = {
                    name: user.name,
                    gender: user.gender,
                    username: user.username,
                    location: user.location.name,
                    imageSmall: "http://graph.facebook.com/" + user.username + "/picture?type=small",
                    imageLarge: "http://graph.facebook.com/" + user.username + "/picture?type=large"}
                
                $rootScope.user.$set(newUser);
            }
        });
        
        $location.path('/userList');
        
    });
    
    
    $rootScope.$on("$firebaseAuth:logout", function(evt){
          console.log("User successfully logged out, sadness");
    });
    
    $rootScope.$on("$firebaseAuth:error", function(evt, err){
        console.log("Major error to report");
        console.log('Error'+ err)
    });
    
}]);    

voltaicLifeApp.config(function($routeProvider){
    $routeProvider
        .when("/", {
            controller: "login",
            templateUrl: '/partials/home.html',
        })
        .when("/userList", {
            controller: "user",
            templateUrl: '/partials/userList.html',
        })
        .when("/userList", {
            controller: "search",
            templateUrl: '/partials/artistSearched.html',
        })
        .otherwise({
            redirectTo:"/"
        });
});