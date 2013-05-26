var mailModules = angular.module('AMail', []);

mailModules.config(function($routeProvider){
	$routeProvider.
	when('/', {
		controller: ListController,
		templateUrl: 'list.html'
	}).
	when('/view/:id',{
		controller: DetailController,
		templateUrl: 'detail.html'
	}).
	otherwise({
		redirectTo: '/'
	});
});

messages = [
	{
		id: 0,
		sender: 'amir@doob.io',
		subject: 'Front-End Tweakings',
		date: 'Dec 7, 2013 12:32:00',
		recipients: ['best@frontdevelopers.com'],
		message: 'Hi Greg, Thanks for your response. Looking forward to working with you...'
	}, 
	{
		id: 1,
		sender: 'amir@doob.io',
		subject: 'Funding',
		date: 'Dec 7, 2013 14:12:45',
		recipients: ['ian@venturebeats.com'],
		message: 'Ian, Great news! thanks for letting me know. Cheers, Amir'
	}, 
	{
		id: 2,
		sender: 'amir@doob.io',
		subject: 'Meeting',
		date: 'Dec 7, 2013 22:02:11',
		recipients: ['josh@doob.io'],
		message: 'Josh, I\'ll confirm the time with you shortly. Cheers, Amir'
	}];

function ListController($scope){
	console.log('ListController...');
	$scope.messages = messages;
};

function DetailController($scope, $routeParams){
	console.log('DetailController...');	
	$scope.message = messages[$routeParams.id];
};
