(function () {
"use strict";

angular.module('public')
.controller('myInfoController', myInfoController);

myInfoController.$inject = ['MyInfo'];
function myInfoController(MyInfo) {
  var ctrl = this;
  ctrl.user = MyInfo.getMyInfo();
  if (ctrl.user) {
    var prom = MyInfo.checkDish(ctrl.user.menu);
    prom.then(function (response) {
      ctrl.menuItem = response.data;
    });
  }
}

})();
