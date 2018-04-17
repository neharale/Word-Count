var app = angular.module('myApp',[]);

app.controller('WordCountController',['$scope','$http',function($scope,$http){
	console.log('Word Count Controller loaded');
	$scope.getWordCount = function(){
		var url = null;
		if(!$scope.sentence)
			alert("input is required");
		else
			url = "http://localhost:3000/api/wordcount/"+$scope.sentence;

		console.log(url)
		$http.get(url)
				.then(function success(response){
					$scope.wordcount = response.data;
				},function error(response){
						console.log("error:"+response);
				});
	};
}]);