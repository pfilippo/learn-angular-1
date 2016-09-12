(function (){
	'use strict';
	angular.module("LunchCheck", [])
	.controller("LunchCheckController", LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
		$scope.message = "";
		$scope.dishes = "";
		$scope.Check = function(){
			var ld = $scope.dishes.trim();
			if (ld == "") {
				$scope.message = "Please enter data first";
				$scope.textStyle = {color:'red'};
			}
			else  {
				if  (ld.split(',').length <= 3) $scope.message = "Enjoy!";
				else $scope.message = "Too much!";
				$scope.textStyle = {color:'green'};
			}
		}
	}
})();