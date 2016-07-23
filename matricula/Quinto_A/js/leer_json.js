var app = angular.module('app', ["ngResource"]);

app.controller('controlador',function ($scope, listado){	
	$scope.datos=listado.get();
	$scope.ordenar = function(opcion){
		$scope.filtro = opcion;
	};	
	
})

app.factory('listado', function($resource){
	return $resource("https://whispering-woodland-9020.herokuapp.com/getAllBooks", {}, {get:{method:'GET',isArray:false}});
})
