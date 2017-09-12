angular.module('app').controller('homeCtrl', function($scope, $state) {
  $scope.submitForm = function(zip) {
    if (typeof +zip !== 'number' || zip.toString().length !== 5) {
      alert('Invalid Zipcode');
    } else {
      $state.go('brewery', { zip: zip });
    }
  };
});
