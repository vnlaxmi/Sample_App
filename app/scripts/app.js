'use strict';

/**
 * @ngdoc overview
 * @name nuvisoInitialApp
 * @description
 * # nuvisoInitialApp
 *
 * Main module of the application.
 */
angular
  .module('nuvisoInitialApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'CarouselDemoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
