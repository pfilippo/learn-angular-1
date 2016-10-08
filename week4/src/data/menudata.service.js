'use strict';
(function(){
  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService ($http){
    var service = this;
    service.getAllCategories = function(){
      return $http({ method: "GET", url: ("https://davids-restaurant.herokuapp.com/categories.json")})
		 	.then(result => result.data)
      .catch(error => console.log("Categories went terribly wrong."));
    };
    service.getItemsForCategory = function(categoryShortName){
      return $http({ method: "GET", url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName)})
		 	.then(result => result.data)
      .catch(error => console.log("Items went terribly wrong."));
    };
  }
})();
