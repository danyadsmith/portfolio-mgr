/* globals angular */

angular.module('homepage', [
  'homepage.main',
  'homepage.about',
  'resume.service',
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
          templateUrl: '../../assets/partials/home/header.html'
        },
        'aboutView': {
          controller: 'AboutController',
          templateUrl: '../../assets/partials/home/about.html'
        }
      }
    });
});
