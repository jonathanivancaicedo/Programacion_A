var app = angular.module('app', []);

function entrada($scope){
	$scope.diccionario = [{nombres:"María José"},{nombres:"Adriana"},{nombres:"Monica"}];
	$scope.agregarNombre = function(){
		$scope.diccionario.push({nombres:$scope.txtNombre});
		$scope.txtNombre = "";
	};	
	$scope.eliminarLista = function(){
		$scope.diccionario="";
	};
}
app.controller('controlador',entrada);