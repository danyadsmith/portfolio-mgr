/* globals angular */

angular.module('blog', [
  'blog.main',
  'blog.sidebar',
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
        'blogSidebarView': {
          controller: 'SidebarController',
          templateUrl: '../../assets/partials/blog/sidebar.html'
        }
      }
    });
});
