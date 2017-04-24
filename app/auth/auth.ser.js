/**
 * Created by Julius Alvarado on 2/22/2017.
 */

(function(){
    "use strict";

    var app = angular.module('app'),
      serviceId = 'jAuth';

    app.factory(serviceId, ['$firebaseAuth', jaAuthClass]);
    
    function jaAuthClass($firebaseAuth) {
      return $firebaseAuth();
    }

}());

//