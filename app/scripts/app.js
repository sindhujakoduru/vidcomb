'use strict';

/**
 * @ngdoc overview
 * @name videoDayHackApp
 * @description
 * # videoDayHackApp
 *
 * Main module of the application.
 */
angular
  .module('videoDayHackApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
