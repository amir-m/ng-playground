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

testModule.controller('FormController', function($scope){
	$scope.flag = false;
	$scope.updateMe = function(){
		console.log($scope.flag);
	};
}); 

testModule.controller('StartupController', function($scope){
	$scope.funding = {
		startingEstimate: 0,
		needed: 0 
	};

	compute = function(){
		$scope.funding.needed = 10 * $scope.funding.startingEstimate;
	};

	$scope.schedule = function(t){
		$scope.funding.startingEstimate = 10;
	};

	$scope.submitMe = function(){
		compute();
		console.log('FUNDED :)');
		return false;
	}

	// $scope.$watch('funding.startingEstimate', compute);
});

testModule.controller('StudentController', function($scope){
	$scope.students = [
		{id: 1, name: 'Amir'},
		{id: 2, name: 'Kevin'},
		{id: 3, name: 'Lisa'}
	];
});

testModule.controller('TableController', function($scope){
	$scope.showTable = false;
	$scope.table = [
		{artist: 'Bizzare Contact', track: 'Collision'},
		{artist: 'Vibe Tribe', track: 'Beyond'},
		{artist: 'Astrix', track: 'Acid Rocker'}
	];
	$scope.toggle = function() {
		$scope.showTable = !$scope.showTable;
	};
});
