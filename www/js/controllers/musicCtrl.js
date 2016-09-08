/**
 * Created by ignazio on 01/09/16.
 */


angular.module('musicCtrl.controllers', [])

  .controller('musicCtrl', function ($scope, $state) {


    $scope.songs = JSON.parse(window.localStorage.getItem("songs_list"));

  });
