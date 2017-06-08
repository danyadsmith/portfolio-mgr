/* globals angular */

angular.module('blog', [
  'blog.main',
  'blog.about',
  'ui.router'
])
.config(function ($stateProvider, $locationProvider) {
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
  $stateProvider
    .state('blog', {
      name: 'blog',
      url: '/blog/',
      views: {
        'blogHeaderView': {
          controller: 'HomeController',
          templateUrl: '../../assets/partials/blog/header.html'
        },
        'blogAboutView': {
          controller: 'AboutController',
          templateUrl: '../../assets/partials/blog/about.html'
        }
      }
    });
});
