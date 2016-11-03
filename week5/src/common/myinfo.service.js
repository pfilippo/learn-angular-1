(function () {
"use strict";

angular.module('common')
.service('MyInfo', MyInfo);


MyInfo.$inject = ['$http', 'ApiPath'];
function MyInfo($http, ApiPath) {
  var service = this;
  service.user = void 0;

  service.getMyInfo = function () {
    return service.user;
  };

  service.setMyInfo = function (mi) {
    service.user = mi;
  };

  service.checkDish = function (dish) {
    return $http.get(ApiPath + '/menu_items/' + dish +'.json');
  };

}


})();
