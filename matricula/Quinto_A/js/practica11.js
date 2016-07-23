var app = angular.module("app", ["ngResource"]);

app.controller("controlador",function($scope,datos){
	$scope.nombre="";
	$scope.comercial = datos.get();	
});

app.factory("datos",function($resource){
	return $resource("get_all_comercial.php", {}, {get:{method:"GET",isArray:false}});
});