'use strict';
(function (){
	angular.module("ShoppingListCheckOff", [])
	.controller("ToBuyShoppingController", ToBuyShoppingController)
	.controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController)
	.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

	ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyShoppingController(slcos) {
		var tb = this;
		tb.list = slcos.getTbList();
		tb.bought = function(i) {
			slcos.move(i);
		}
	}

	AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtShoppingController(slcos) {
		var ab = this;
		ab.list = slcos.getBList();
	}

	function ShoppingListCheckOffService() {
		var service = this,
			toBuy = [{n:"aqua bottles", q:2},
					{n:"apples", q:10},
					{n:"oranges", q:7},
					{n:"tomatoes", q:5},
					{n:"cucumbers", q:5},
					{n:"watermelon", q:1}],
			bought = [];
		service.getTbList = () => toBuy;
		service.getBList = function() {
			return bought;
		};
		service.move = function(i){
			bought.push(toBuy.splice(i,1)[0]);
		}
	}
})();
