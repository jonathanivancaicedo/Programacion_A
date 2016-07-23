var app = angular.module('app', []);

function listado($scope){
	$scope.diccionario = [{nombres:"luis",telefono:"2564223",materia:"Programación Avanzada"}];
	$scope.estilo = false;
	$scope.crear = function(){
		$scope.diccionario.push({nombres:$scope.nombres});
	};
	$scope.agregarEstudiante = function(){
		$scope.diccionario.push({nombres:$scope.txtNombre,telefono:$scope.txtTelefono,materia:$scope.txtMateria});
		$scope.txtNombre = "";
		$scope.txtTelefono = "";
		$scope.txtMateria = "";
		$scope.estilo=false;
		console.log($scope,estilo)
	};
	$scope.ordenar = function(opcion){
		$scope.filtro = opcion;
	};	
	$scope.ShowForm = function(){
		$scope.estilo=true;
		console.log($scope,estilo)
	};
}

app.controller('controlador',listado);