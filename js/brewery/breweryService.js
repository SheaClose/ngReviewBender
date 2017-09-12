angular.module('app').service('breweryService', function($http) {
  var baseUrl = 'https://api.brewerydb.com/v2/search/geo/point?lat=';
  var apiKey = 'key=e6dd4ca543ecb9e65e170def16b95035';
  this.findBrewery = function(zip) {
    return $http
      .get(
        'https://maps.googleapis.com/maps/api/geocode/json?address=' +
          zip +
          '&key=AIzaSyAXQB6_1o2TlMK7coZPgfuVDAdxZtPiv9c'
      )
      .then(function(response) {
        console.log(response);
        return searchByZipcode(response.data.results[0].geometry.location);
      });
  };
  function searchByZipcode({ lat, lng }) {
    return $http
      .get(baseUrl + lat + '&lng=' + lng + '&' + apiKey)
      .then(function(response) {
        this.breweries = response.data.data.filter(function(cur) {
          return cur.status === 'verified' && cur.openToPublic === 'Y';
        });
        return this.breweries;
      });
  }
});
