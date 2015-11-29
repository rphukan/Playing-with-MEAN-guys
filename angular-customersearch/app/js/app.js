'use strict';

/* App Module */

var customerSearchApp = angular.module('customerSearchApp', ['ngRoute', 'customerSearchAppControllers', 'customerSearchAppFilters']);
 
customerSearchApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/customer', {
        templateUrl: 'templates/customer-list.html',
        controller: 'customerListController'
      }).
      when('/customer/:customerId', {
        templateUrl: 'templates/customer-detail.html',
        controller: 'customerDetailController'
      }).
      otherwise({
        redirectTo: '/customer'
      });
  }]);
