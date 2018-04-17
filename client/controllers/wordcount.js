/*
* Desciption : wordcount.js is controller used for requesting word count using
* 						get REST call
*/


var app = angular.module('myApp',[]);

// WordCountController controller to control data of application
app.controller('WordCountController',['$scope','$http',function($scope,$http){
	console.log('Word Count Controller loaded');
	$scope.getWordCount = function(){
		var url = null;
		if(!$scope.sentence)
			alert("input is required");
		else
			url = "http://localhost:3000/api/wordcount/"+$scope.sentence;

		// $http.get() : reads json word-count data from requesting url
		// if it is not empty otherwise alert pop-up will appear
		$http.get(url)
				.then(function success(response){
					$scope.wordcount = response.data;
				},function error(response){
						console.log("error:"+response);
				});
	};
}]);
