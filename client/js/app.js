/* globals angular */

angular.module('portfolio', [
  'portfolio.home',
  'ui.router'
])
.config(function ($stateProvider, $locationProvider) {
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
  $stateProvider
    .state('home', {
      name: 'home',
      url: '/',
      views: {
        'headerView': {
          controller: 'HomeController',
          templateUrl: '../partials/home/header.html'
        },
        'aboutView': {
          controller: 'AboutController',
          templateUrl: '../partials/home/about.html'
        }
      }
    });
});
