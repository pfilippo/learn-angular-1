'use strict';
(function(){
  angular.module('data')
  .component('categories', {
  templateUrl: 'src/data/templates/categorieslist.template.html',
  bindings: {
    items: '<'
  }
});

})();
