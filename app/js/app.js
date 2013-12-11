var voltaicLifeApp = angular.module('voltaicLife', ['firebase', 'ngRoute']);

voltaicLifeApp.run(['$firebaseAuth', '$rootScope', '$firebase', function ($firebaseAuth, $rootScope, $firebase) {
    var URL = "https://voltaiclife.firebaseio.com/";
    var ref = new Firebase(URL);
    $rootScope.auth = $firebaseAuth(ref);
    
    $rootScope.$on("$firebaseAuth:login", function(evt, user){
        console.log("User " + user.id + " successfully logged in!!!");
        
        $rootScope.user = $firebase(new Firebase(URL+ 'users/' + user.id));
        
        $rootScope.user.$on("loaded", function(userData){
            console.log("user data loaded");
            console.log("userData ", userData);
            
//            console.log("user likes", userLikes);
            console.log("user ", user);
            if(!userData){
                var newUser = {
                    name: user.name,
                    gender: user.gender,
                    username: user.username,
                    location: user.location.name,
                    image:  "http://graph.facebook.com/" + user.username + "/picture"
                }
                
                $rootScope.user.$set(newUser);
            }
        });
        
    });
    
    
    $rootScope.$on("$firebaseAuth:logout", function(evt){
          console.log("User successfully logged out, sadness");
    });
    
    $rootScope.$on("$firebaseAuth:error", function(evt, err){
        console.log("Major error to report");
    });
    
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