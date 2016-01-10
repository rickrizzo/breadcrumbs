var crumbModule = angular.module('crumbModule', []);

console.log("MAIN CONTROLLER");

function mainController($scope) {
  // show all points
  $http.get('/api/crumbs')
    .success(function(data) {
      $scope.crumbs = data;
    }).error(function(err) {
      console.log('ERROR: ' + err);
    });
}