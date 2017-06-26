angular.module("app",["ngRoute"]) 
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'ListCtrl',
      templateUrl:'tpl/list.html'
    })
    .when('/view/:Id', {
      controller:'ViewCtrl',
      templateUrl:'tpl/view.html'
    })  
    .when('/edit/:Id', {
      controller:'EditCtrl',
      templateUrl:'tpl/detail.html'
    })
    .when('/new', {
      controller:'CreateCtrl',
      templateUrl:'tpl/detail.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})
.controller("appController",["$scope",function($scope){
 
}]);