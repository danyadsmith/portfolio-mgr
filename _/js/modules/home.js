/* globals angular */

angular.module('homepage', [
  'global.footer',
  'homepage.main',
  'homepage.about',
  'homepage.blog',
  'homepage.portfolio',
  'blog.service',
  'portfolio.service',
  'profile.service',
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
        },
        'recentBlogView': {
          controller: 'BlogController',
          templateUrl: '../../assets/partials/home/recent-blog-post.html'
        },
        'footerView': {
          controller: 'FooterController',
          templateUrl: '../../assets/partials/global/footer.html'
        }
      }
    });
});
