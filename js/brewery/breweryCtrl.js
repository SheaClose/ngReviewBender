angular
  .module('app')
  .controller('breweryCtrl', function($scope, breweryService, $stateParams) {
    breweryService.findBrewery($stateParams.zip).then(function(response) {
      if (response.length) {
        $scope.breweries = response;
      }
    });
  });
