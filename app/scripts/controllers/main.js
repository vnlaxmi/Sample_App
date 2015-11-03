'use strict';

/**
 * @ngdoc function
 * @name nuvisoInitialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nuvisoInitialApp
 */
angular.module('nuvisoInitialApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


$scope.sampleJson
    $scope.showModal=false;

    $scope.signin = function() {
    	$scope.showModal = !$scope.showModal;
    };
  });

  
