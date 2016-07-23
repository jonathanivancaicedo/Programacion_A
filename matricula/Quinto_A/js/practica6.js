var app = angular.module('app', ["ngResource"]);

app.controller('controlador',function ($scope, $http,dataResource){
	$http.get('datos.json').success(function(data){
		$scope.datos=data;
	});
	$scope.dataResource = dataResource.get();
})

app.factory('dataResource', function($resource){
	return $resource("datos.json",{},{get:{method:"GET",isArray:true}
	})
})