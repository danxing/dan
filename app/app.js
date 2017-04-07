//定义路由
angular.module('myapp',['ng','ngRoute'])
.config(function($routeProvider){
   $routeProvider
    .when('/nav1', {
    templateUrl: 'template/one.html',
/*    controller: 'firstCtrl'*/
    })
    .when('/nav2', {
    templateUrl: 'template/two.html',
/*    controller: 'secondCtrl'*/
    })
    .when('/nav3', {
    templateUrl: 'template/three.html',
/*    controller:"thirdCtrl"*/
    })
    .when('/nav4', {
           templateUrl: 'template/four.html',
       /*    controller:"fourthCtrl"*/
       })
    .otherwise('/nav1');
})