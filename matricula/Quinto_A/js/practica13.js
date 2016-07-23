var app = angular.module("app", ['ngResource']);

app.controller('controlador',function($scope,$window,materias,alumno){
	$scope.alumno = alumno.get();
	$scope.materias = materias.get();
	$scope.ingresar = function(){
		$window.location.href = 'ingresar.html';
	}
	$scope.verificar = function(){
		$scope.cedula = cedula;
		$scope.alumno = alumno.objects.all();
		for(var i=0;i<alumno.length();i++){
			if ( cedula == alumno.cedula[i]){
				alert('Ya se encuentra matriculado');
				$window.location.href = 'practica13.html';
			}else{
				alert('No se encuentra matriculado');
				$window.location.href = 'practica13.html';
			}	
		}
	}
	

});

app.factory('materias',['$resource',function($reosurce){
	return $resource('http://127.0.0.1:8000/webservice/materias/', {},{get:{method:'GET,'pararms:{},isArray:true}});
}]);


app.factory('alumno',function(){
	return $resource('http://127.0.0.1:8000/webservice/alumnos/',{},{get:{method:'GET',pararms:{},isArray:true}});
});

