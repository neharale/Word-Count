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