/**
 * Created by Julius Alvarado on 2/26/2017.
 */

(function(){
    "use strict";

    angular.module('app').controller('ChannelsCtrl', ['$state', 'jAuth', 'jUsers', 'profile', 'channels',
        function($state, jAuth, jUsers, profile, channels){
            var channelsCtrl = this;
            channelsCtrl.channels = channels;
            channelsCtrl.profile = profile;
            channelsCtrl.getDisplayName = jUsers.getDisplayName;
            channelsCtrl.getGravatar = jUsers.getGravatar;

            channelsCtrl.logout = function(){
                jAuth.$signOut().then(function(){
                    $state.go('home');
                });
            }
        }
    ]);
}());

//