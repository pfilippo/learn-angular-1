(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MyInfo'];
function SignUpController(MyInfo) {
  var ctrl = this;
  ctrl.saved = false;
  ctrl.notChecked = true;

  ctrl.submit = () => {
    ctrl.saved = true;
    MyInfo.setMyInfo(ctrl.user);
  };

  ctrl.checkDish = function() {
    var prom = MyInfo.checkDish(ctrl.user.menu);
    prom.then(function (response) {
          ctrl.notChecked = false;
        })
    .catch( function (response) {
          ctrl.notChecked = true;
        });
  };
}

})();
