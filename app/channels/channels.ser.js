/**
 * Created by Julius Alvarado on 2/26/2017.
 */
(function () {
    "use strict";

    angular.module('app').factory('jChannels', ['$firebaseArray',
        function ($firebaseArray) {
            var ref = firebase.database().ref('channels');

            return $firebaseArray(ref);
        }
    ])
}());