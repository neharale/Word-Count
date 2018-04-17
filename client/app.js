/*
* Description : The ngRoute module provides routing and directives
*								for AngularJS applications
* $routeProvider : used for configuring routes
* Controller : request word count from controller
* templateUrl : rendered template of the current route into index.html
*
*/

var app = angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider.when('/',{
		controller : 'WordCountController',
		templateUrl : 'index.html'
	})
	.otherwise({
		redirectTo:'/'
	});
});
