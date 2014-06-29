'use strict';

/**
 * @ngdoc function
 * @name authApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the authApp
 */
angular.module('authApp')
  .controller('MainCtrl', function ($scope, Connect) {
    Connect.get(function (response) {
    	$scope.response = response;
    });
  });
