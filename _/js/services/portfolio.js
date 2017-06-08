/* globals angular */

angular.module('portfolio', [
  'portfolio.main',
  'portfolio.about',
  'ui.router'
])
.config(function ($stateProvider, $locationProvider) {
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
  $stateProvider
    .state('portfolio', {
      name: 'portfolio',
      url: '/portfolio/',
      views: {
        'portfolioHeaderView': {
          controller: 'HomeController',
          templateUrl: '../../assets/partials/portfolio/header.html'
        },
        'portfolioAboutView': {
          controller: 'AboutController',
          templateUrl: '../../assets/partials/portfolio/about.html'
        }
      }
    });
});
