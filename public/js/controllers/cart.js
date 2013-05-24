var testModule = angular.module('cartApp', []);
testModule.controller('CartController', function ($scope) {
	$scope.items = [
		{title: 'Paint Pots', quantity: 8, price: 3.95},
		{title: 'Podka Pots', quantity: 17, price: 12.95},
		{title: 'Pebbles', quantity: 5, price: 6.95}
	];

	$scope.remove = function(index){
		$scope.items.splice(index, 1);
	};
});