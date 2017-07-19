/* globals angular */

angular.module('blog-posts', [
  'global.footer',
  'blog-posts.main',
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
      url: '/blog/posts/',
      views: {
        'blogHeaderView': {
          //controller: 'HomeController',
          templateUrl: '../../assets/partials/blog/posts/header.html'
        },
        'blogSidebarView': {
          controller: 'BlogPostsController',
          templateUrl: '../../assets/partials/blog/posts/sidebar.html'
        },
        'blogMainView': {
          controller: 'BlogPostsController',
          templateUrl: '../../assets/partials/blog/posts/main.html'
        },
        'footerView': {
          controller: 'FooterController',
          templateUrl: '../../assets/partials/global/footer.html'
        }
      }
    });
});
