var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.myFormData = {};
  $scope.myFormData.userEmail = "this is initial value I am putting..";
  console.log($scope);
  $scope.isEmailValid = function () {
      console.log($scope.myFormData);
    if ($scope.myFormData.userEmail && $scope.myFormData.userEmail.length > 5) return true;
    else return false;
  }
});