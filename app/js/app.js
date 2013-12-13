var voltaicLifeApp = angular.module('voltaicLife', ['firebase', 'ngRoute']);

voltaicLifeApp.run(['$firebaseAuth', '$rootScope', '$firebase', '$location', '$http', '$log', function ($firebaseAuth, $rootScope, $firebase, $location, $http, $log){
    var URL = "https://voltaiclife.firebaseio.com/";
    var ref = new Firebase(URL);
    $rootScope.auth = $firebaseAuth(ref);
    
    // event for when the user logs into facebook
    $rootScope.$on("$firebaseAuth:login", function(evt, user){
        console.log("User " + user.id + " successfully logged in!!!");
        
        $rootScope.user = $firebase(new Firebase(URL+ 'users/' + user.id));
        
        $rootScope.user.$on("loaded", function(userData){
            console.log("user data loaded");
            console.log("user likes http://graph.facebook.com/" + user.id + "/music?fields=name&limit=50");
            
            console.log("user ", user.accessToken);
            if(!userData){
                
                var newUser = {
                    name: user.name,
                    gender: user.gender,
                    username: user.username,
                    location: user.location.name,
                    access: user.accessToken,
                    imageSmall: "http://graph.facebook.com/" + user.username + "/picture?type=small",
                    imageLarge: "http://graph.facebook.com/" + user.username + "/picture?type=large"}
                
                $rootScope.user.$set(newUser);
            
            }
        });
        
            // making a call to the graph for facebook to show the list of artists that the user likes.
            console.log(user.accessToken);
            $http.jsonp("https://graph.facebook.com/" + user.id + "/music?fields=name&limit=50&callback=JSON_CALLBACK&access_token=" + user.accessToken)
                .success(function(data, status, headers, config){
                    $rootScope.likes = data.data; 
                    $log.info(data, status, headers(), config);
                    //console.log('hello likes! ',$rootScope.likes);
                })
                .error(function(data, status, headers, config){
                    $log.warn(data, status, headers(), config);
                    console.log('hello');
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
            templateUrl: '/partials/home.html'
        })
        .when("/userProfile", {
            controller: "user",
            templateUrl: '/partials/userProfile.html'
        })
        .when("/userList", {
            templateUrl: '/partials/userList.html'
        })
        .when("/artistSearched", {
            controller: "search",
            templateUrl: '/partials/artistSearched.html',
        })
        .when("/artistSearched/:key", {
            controller: "search",
            templateUrl: '/partials/artistSearched.html'
        })
        .when("/show/:key", {
            controller: "showView",
            templateUrl: '/partials/show.html'
        })
        .otherwise({
            redirectTo:"/"
        });
});