/* globals angular */

angular.module('homepage', [
  'homepage.main',
  'homepage.about',
  'homepage.portfolio',
  'portfolio.service',
  'ui.router'
])
.config(function ($stateProvider, $locationProvider) {
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false,
      rewriteLinks: true
    });
  $stateProvider
    .state('homepage', {
      name: 'homepage',
      url: '/',
      views: {
        'headerView': {
          controller: 'HomeController',
          templateUrl: '../../assets/partials/home/header.html'
        },
        'aboutView': {
          controller: 'AboutController',
          templateUrl: '../../assets/partials/home/about.html'
        },
        'portfolioView': {
          controller: 'PortfolioController',
          templateUrl: '../../assets/partials/home/portfolio.html'
        }
      }
    });
});
