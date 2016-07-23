
var app=angular.module("app",["ngResource"]);

app.controller("controlador",function ($scope,listado){
    $scope.mensaje="Valida";
    $scope.lista=listado.get();

});


app.factory("listado",function($resource){
    //$http es un servicio htttp , hace lo mismo que 
    //return $resource("js/pf.json", {}, {get:{method:"GET",isArray:false}});
    return $resource("js/datos.json", {}, {get:{method:"GET",isArray:true}});    


});