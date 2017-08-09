/* globals angular */

angular.module('blog', [
  'global.footer',
  'blog.main',
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
    .state('blogHome', {
      name: 'blog',
      url: '/blog/',
      views: {
        'blogHeaderView': {
          //controller: 'HomeController',
          templateUrl: '../../assets/partials/blog/header.html'
        },
        'blogSidebarView': {
          controller: 'BlogController',
          templateUrl: '../../assets/partials/blog/sidebar.html'
        },
        'blogMainView': {
          controller: 'BlogController',
          templateUrl: '../../assets/partials/blog/main.html'
        },
        'blogPaginationView': {
          controller: 'BlogController',
          templateUrl: '../../assets/partials/blog/pagination.html'
        },
        'footerView': {
          controller: 'FooterController',
          templateUrl: '../../assets/partials/global/footer.html'
        }
      }
    })
    .state('blogCategory', {
      name: 'blog',
      url: '/blog/:categoryID',
      views: {
        'blogHeaderView': {
          //controller: 'HomeController',
          templateUrl: '../../assets/partials/blog/header.html'
        },
        'blogSidebarView': {
          controller: 'BlogController',
          templateUrl: '../../assets/partials/blog/sidebar.html'
        },
        'blogMainView': {
          controller: 'BlogController',
          templateUrl: '../../assets/partials/blog/main.html'
        },
        'blogPaginationView': {
          controller: 'BlogController',
          templateUrl: '../../assets/partials/blog/pagination.html'
        },
        'footerView': {
          controller: 'FooterController',
          templateUrl: '../../assets/partials/global/footer.html'
        }
      }
    });
});
