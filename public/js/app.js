var myApp=angular.module('myApp', ['ui.router','tien.clndr']);

myApp.config(function($stateProvider,$urlRouterProvider){
	$stateProvider

	.state('app',{
		url:'/',
		views:{
	        'content': {
	            templateUrl : 'pages/register.html',
	            controller  : 'registerController'
	        }
	    }
		
	})
	.state('app.login',{
		url:'login',
		views:{
	        'content@': {
	            templateUrl : 'pages/login.html',
	            controller  : 'loginController'
	        }
	    }
		
	})

	.state('app.admin',{
		url:'admin',
		views:{
	        'content@': {
	            templateUrl : 'pages/admin.html',
	            controller  : 'adminController'
	        }
	    }
		
	})
	$urlRouterProvider.otherwise('/');
});

