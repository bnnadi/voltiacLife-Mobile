'use strict';

/* Services to login in user */

angular.module('voltaicLife.services.login', ['voltaicLife.services.profilecreator'])
.factory('loginservice', ['angularFireAuth', 'profileCreator', '$location', '$rootScope', function(){
    return {
    login: function
    }
})
                          