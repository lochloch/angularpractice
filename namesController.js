var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope){
    $scope.names = [
        {name:'Jani', country:'Narway'},
        {name:'Hege', country:'Sweden'},
        {name:'Kai', country:'Denmark'}
    ];
});