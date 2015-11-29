'use strict';

/* Controllers */

var customerSearchAppControllers = angular.module('customerSearchAppControllers', []);

customerSearchAppControllers.controller('customerListController', ['$scope', '$http', function ($scope, $http) {
 	var promise = $http.get('stub/customerList.json');
	promise.success(function(data) {
		$scope.customers = data;
	});
	promise.error(function(error) {
		console.log(error);
	});	

	$scope.orderProperty = 'type';  
}]);

customerSearchAppControllers.controller('customerDetailController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	var promise = $http.get('stub/customerDetail-' + $routeParams.customerId + '.json');
	promise.success(function(data) {
		$scope.customer = data;
	});
	promise.error(function(error) {
		console.log(error);
	});	
}]);


