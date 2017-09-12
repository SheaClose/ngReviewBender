angular
  .module('app')
  .controller('breweryCtrl', function($scope, $stateParams, breweryService) {
    breweryService.findBrewery($stateParams.zip).then(function(response) {
      $scope.breweries = response;
    });
  });
