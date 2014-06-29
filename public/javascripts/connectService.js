'use strict';

/**
 * @ngdoc service
 * @name authApp.Connect
 * @description
 * # Connect
 * Factory in the authApp.
 */
angular.module('authApp')
  .factory('Connect', function ($resource) {
    return $resource('https://graph.facebook.com/piotr.fryga/feed');
  });
