/* globals angular */

angular.module('blog', [
  'global.footer',
  'blog.home',
  'blog.main',
  'blog.sidebar',
  'blog.service',
  'profile.service',
  'ui.router',
  'yaru22.md'
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
          controller: 'BlogSidebarController',
          templateUrl: '../../assets/partials/blog/sidebar.html'
        },
        'blogMainView': {
          controller: 'BlogMainController',
          templateUrl: '../../assets/partials/blog/main.html'
        },
        'footerView': {
          controller: 'FooterController',
          templateUrl: '../../assets/partials/global/footer.html'
        }
      }
    })
});
