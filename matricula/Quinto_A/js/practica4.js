var app = angular.module('app', []);

function listado($scope){
	$scope.diccionario = [{nombres:"luis",telefono:"2564223",materia:"Programación Avanzada"}];
	$scope.crear = function(){
		$scope.diccionario.push({nombres:$scope.nombres});
	};
	$scope.agregarEstudiante = function(){
		$scope.diccionario.push({nombres:$scope.txtNombre,telefono:$scope.txtTelefono,materia:$scope.txtMateria});
		$scope.txtNombre = "";
		$scope.txtTelefono = "";
		$scope.txtMateria = "";
	};
	$scope.ordenar = function(opcion){
		$scope.filtro = opcion;
	};
}

app.controller('controlador',listado);