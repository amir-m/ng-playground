var module = angular.module('loginApp', []);
module.controller('LoginController', function($scope){
	$scope.test = function(){
		console.log('clicked.')
	};
	$scope.register = function(){
		console.log('register');
	};
	$scope.facebook = function(){
		console.log('facebook');
	};
	$scope.soundcloud = function(){
		console.log('soundcloud');
	};
	$scope.signIn = function(){
		console.log('signIn');
	};
});