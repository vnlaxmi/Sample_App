angular.module('nuvisoInitialApp', []).controller('loginCtrl', function($scope, $model){

	$scope.login = function() {

		var uName = $scope.userName;
		var passwd = $scope.password;

		console.log(uName, passwd);

	}




});