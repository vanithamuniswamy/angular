  angular.module("route", ["ngRoute"])
  .controller("ctrl",ctrl)
  .config(routeconfig)
  function ctrl($scope,$http){

  }
  function routeconfig($routeProvider){
  $routeProvider
      .when("/home", {
        templateUrl : "template/main.html"
      })
      .when("/red", {
        templateUrl : "template/red.html"
      })
      .when("/blue", {
        templateUrl : "template/blue.html"
      })
      .otherwise({redirectTo:'/home'})
    }