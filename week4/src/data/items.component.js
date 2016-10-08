'use strict';
(function(){
  angular.module('data')
  .component('items', {
  templateUrl: 'src/data/templates/itemslist.template.html',
  bindings: {
    items: '<'
  }
});
})();
