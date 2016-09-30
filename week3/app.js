'use strict';
(function (){
	angular.module("NarrowItDownApp", [])
	.controller("NarrowItDownController", narrowIt)
	.service("MenuSearchService", MenuSearchService)
	.directive("foundItems", foundItemsDirective);

	narrowIt.$inject = ['MenuSearchService'];
	function narrowIt(mss) {
		var nidc = this;
		nidc.found = [];
		nidc.search = "";
		nidc.find = function () {
			var promise = mss.getMatchedMenuItems(nidc.search);
			promise.then(function(dt){
				nidc.found = dt;
				console.log(dt);
			})
		    .catch(function (error) {
			    console.log("Something went terribly wrong.");
  			});
		}
		nidc.removeItem = function(index) {
			nidc.found.splice(index, 1);
		}
	}

	function foundItemsDirective(){
		var ddo = {
			templateUrl: 'founditems.html',
			scope: {
				found: ' < items',
				onRemove: '&'
			}
		};
		return ddo;
	}

	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http){
		var service = this;
		service.getMatchedMenuItems = function(searchTerm) {
		 	return $http({ method: "GET", url: ("https://davids-restaurant.herokuapp.com/menu_items.json") })
		 	.then(function(result) {
				var res = result.data.menu_items;
				var ret = [];
				for (var i = 0; i <res.length; i++) {
					if (res[i].description.indexOf(searchTerm) >= 0) ret.push(res[i]);
				}
				return ret;
		 	});
		};
	}
})();
