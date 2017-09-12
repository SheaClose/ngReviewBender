angular.module('app').controller('homeCtrl', function($scope, $state) {
  $scope.submitForm = function(zip) {
    $state.go('brewery', { zip });
  };
});
