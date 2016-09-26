/**
 * Created by ignazio on 01/09/16.
 */


angular.module('recentCtrl.controllers', [])

  .controller('recentCtrl', function ($scope, $state) {



    $scope.recent = JSON.parse(window.localStorage.getItem("recent"));

    $scope.removeAllRecent = function () {
      window.localStorage.removeItem("recent");
      $scope.recent = JSON.parse(window.localStorage.getItem("recent"));
    }

  });
