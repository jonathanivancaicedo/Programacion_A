// Creación del módulo
var app = angular.module('app', ['ngRoute','ngResource']);


// Configuración de las rutas
app.config(function($routeProvider) {

    $routeProvider
        .when('/p2', {
            templateUrl : 'pages/pagina2.html',
            controller  : 'controlador2'
        })
        .when('/p3', {
            templateUrl : 'pages/pagina3.html',
            controller  : 'controlador3'
        })
        .when('/p4', {
            templateUrl : 'pages/pagina4.html',
            controller  : 'controlador4'
        })
        .when('/p5', {
            templateUrl : 'pages/pagina5.html',
            controller  : 'controlador5'
        })
        .when('/p6', {
            templateUrl : 'pages/pagina6.html'           
        })  
        .when('/p7', {
            templateUrl : 'pages/pagina7.html',
            controller  : 'controlador7'
        }) 
        .when('/p9', {
            templateUrl : 'pages/pagina9.html',
            controller  : 'controlador9'
        })   
        .when('/p10', {
            templateUrl : 'pages/pagina10.html',
            controller  : 'controlador10'
        })
        .otherwise({
            redirectTo: '/p2'
        });

});


app.factory('listaNombres',function(){
    return [{nombres:"Jonathan"},{nombres:"Maria"},{nombres:"Vanessa"}];

});

app.factory('listaDiccionario',function(){
    return [{nombre:"Vanessa",telefono:"123456",materia:"Programacion Avanzada"},
            {nombre:"Maria",telefono:"987456",materia:"Etica"}];

});

app.factory("listado",function($resource){
    return $resource("datos.json", {}, {get:{method:"GET",isArray:true}});    


});
app.factory('listado_libros', function($resource){
    return $resource("https://whispering-woodland-9020.herokuapp.com/getAllBooks", {}, {get:{method:'GET',isArray:false}});
})


app.controller('controlador2',function($scope){
    $scope.nombres = "María José";
    $scope.lista = ["a","b","c"];
    $scope.diccionario = [  {materia:"programación Avanzada",creditos:10},
                            {materia:"Ensamblador", creditos:10},
                            {materia:"Contabilidad", creditos:10}];
});

app.controller('controlador3',function($scope,listaNombres){    
    $scope.diccionario = [{nombres:"María José"},{nombres:"Adriana"},{nombres:"Monica"}];
    $scope.agregarNombre = function(){
        $scope.diccionario.push({nombres:$scope.txtNombre});
        $scope.txtNombre = "";
    };  
    $scope.eliminarLista = function(){
        $scope.diccionario="";
    };

});

app.controller('controlador4',function($scope,listaDiccionario){
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

});

app.controller('controlador5',function($scope,listaDiccionario){
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
});

/*app.controller('controlador6',function($scope,listaDiccionario){
    $scope.diccionario=listaDiccionario;
    $scope.agregar=function(){

        $scope.diccionario.push({nombre:$scope.nombresEntrada,telefono:$scope.telefonoEntrada,materia:$scope.carreraEntrada});      

        $scope.nombresEntrada="";
        $scope.telefonoEntrada="";
        $scope.carreraEntrada="";
        
        $scope.formVisibility=false;
        console.log($scope.formVisibility)
    };

    $scope.ordenar=function(order){
        $scope.ordenado=order;
    };

    $scope.formVisibility=false;
    $scope.ShowForm=function(){
        $scope.formVisibility=true;
        console.log($scope.formVisibility)
    }
});*/


app.controller('controlador7',function($scope,listado){
    $scope.mensaje="Valida";
    $scope.lista=listado.get();    

});

app.controller("controlador9",function ($scope,$http){
    $http.get('datos.json').success(function(data){
     $scope.datos=data;
    });
});
app.controller("controlador10",function ($scope,listado_libros){
    $scope.datos=listado_libros.get();
    $scope.ordenar = function(opcion){
        $scope.filtro = opcion;
    };
});