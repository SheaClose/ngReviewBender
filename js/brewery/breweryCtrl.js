angular
  .module('app')
  .controller('breweryCtrl', function($scope, breweryService, $stateParams) {
    breweryService.findBrewery($stateParams.zip).then(function(response) {
      if (response.length) {
        console.log(response[0]);
        $scope.breweries = response;
      }
    });
  });
