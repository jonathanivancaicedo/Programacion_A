var app=angular.module("app",[]);

app.controller("controlador",function ($scope,$http){
    $scope.mensaje="Valida";
    $http.get('js/datos.json').success(function(data){
  	 $scope.datos=data;

    });


 

  //  $scope.lista=listado.get();

});
