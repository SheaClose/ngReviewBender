angular
  .module('app', ['ui.router'])
  .config(($stateProvider, $urlRouterProvider) => {
    /* Set home route */
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: `/js/home/home.html`,
        controller: 'homeCtrl'
      })
      .state('brewery', {
        url: '/brewery/:zip',
        templateUrl: `/js/brewery/brewery.html`,
        controller: 'breweryCtrl'
      });
  });
