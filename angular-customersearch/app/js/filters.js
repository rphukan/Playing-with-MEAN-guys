'use strict';

/* Filters */

var customerSearchAppFilters = angular.module('customerSearchAppFilters', []);

customerSearchAppFilters.filter('ageInYears', function() {
  return function(input) {
    return input + ' years';
  };
});
