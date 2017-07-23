/* globals angular */

angular.module('blog-categories', [
  'global.footer',
  'blog-categories.main',
  'blog.service',
  'portfolio.service',
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
      url: '/blog/categories/',
      views: {
        'blogHeaderView': {
          //controller: 'HomeController',
          templateUrl: '../../assets/partials/blog/categories/header.html'
        },
        'blogSidebarView': {
          controller: 'BlogPostsByCategoryController',
          templateUrl: '../../assets/partials/blog/categories/sidebar.html'
        },
        'blogMainView': {
          controller: 'BlogPostsByCategoryController',
          templateUrl: '../../assets/partials/blog/categories/main.html'
        },
        'footerView': {
          controller: 'FooterController',
          templateUrl: '../../assets/partials/global/footer.html'
        }
      }
    });
});
