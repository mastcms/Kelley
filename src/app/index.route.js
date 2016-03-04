(function() {
  'use strict';

  angular
    .module('kelley')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).when('/mls', {
        templateUrl: 'app/main/mls.html',
        controller: '',
        controllerAs: ''
      }).when('/background', {
        templateUrl: 'app/main/background.html',
        controller: '',
        controllerAs: ''
      }).when('/sellers', {
        templateUrl: 'app/main/sellers.html',
        controller: '',
        controllerAs: ''
      }).when('/buyers', {
        templateUrl: 'app/main/buyers.html',
        controller: '',
        controllerAs: ''
      }).when('/testimonials', {
        templateUrl: 'app/main/testimonials.html',
        controller: '',
        controllerAs: ''
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
