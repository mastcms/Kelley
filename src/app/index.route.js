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
        controller: 'MlsController',
        controllerAs: 'MlsController'
      }).when('/background', {
        templateUrl: 'app/main/background.html',
        controller: 'BackgroundController',
        controllerAs: 'BackgroundController'
      }).when('/sellers', {
        templateUrl: 'app/main/sellers.html',
        controller: 'SellerController',
        controllerAs: 'SellerController'
      }).when('/buyers', {
        templateUrl: 'app/main/buyers.html',
        controller: 'BuyerController',
        controllerAs: 'BuyerController'
      }).when('/testimonials', {
        templateUrl: 'app/main/testimonials.html',
        controller: 'TestimonialsController',
        controllerAs: 'TestimonialsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
