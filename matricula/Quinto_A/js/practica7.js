var app=angular.module("app",["ngResource"]);

app.controller("controlador",function ($scope,listado){   
    $scope.lista=listado.get();
    $scope.dato="hola";
});


app.factory("listado",function($resource){
    return $resource("js/datos.json", {}, {get:{method:"GET",isArray:true}});    
})