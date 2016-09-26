/**
 * Created by ignazio on 01/09/16.
 */


angular.module('musicCtrl.controllers', [])

  .controller('musicCtrl', function ($scope, $state) {


    $scope.songs = JSON.parse(window.localStorage.getItem("songs_list"));
    function contains(items, obj) {
      var itemKey = null;
      var objKey = obj.title;
      var result = false;
      for(var i = 0; !result && i < items.length; i++)
      {
        itemKey = items[i].title;
        result = itemKey === objKey;
      }
      return result;
    }

    $scope.storeRecent = function (song) {
          if(!window.localStorage.getItem("recent")){
            var songAdd = JSON.stringify([song]);
            window.localStorage.setItem("recent", songAdd);
            // console.log(JSON.parse(window.localStorage.getItem("recent")));
          } else {
            var temp = JSON.parse(window.localStorage.getItem("recent"));
            if(contains(temp, song) === false){
              temp.splice(1,0, song);
              window.localStorage.setItem("recent", JSON.stringify(temp));
            }
          }
    };


  });
