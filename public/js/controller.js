var app = angular.module('trialApp', []);

app.controller('device_controller', function($scope, $http) {
	$http.get('/devices/all')
	.success(function(data, status, headers, config) {
		$scope.rows = data;
	});
});

app.controller('about_controller', function($scope, $http) {
	$http.get('/')
	.success(function(data, status, headers, config) {
		$scope.msg = data;
	});
});