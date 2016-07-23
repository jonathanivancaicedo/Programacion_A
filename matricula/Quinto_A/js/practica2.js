var app = angular.module('primero', [])

app.controller('controlador',function($scope){
	$scope.nombres = "María José";
	$scope.lista = ["a","b","c"];
	$scope.diccionario = [	{materia:"programación Avanzada",creditos:10},
							{materia:"Ensamblador", creditos:10},
							{materia:"Contabilidad", creditos:10}];
});
