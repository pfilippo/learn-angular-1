'use strict';
(function(){
  angular.module('data')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController(items) {
    var itemsc = this;
    itemsc.category =  items.category;
    itemsc.items = items.menu_items;
  }

})();
