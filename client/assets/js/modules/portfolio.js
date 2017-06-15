/* globals angular */

angular.module('portfolio', [
  'global.footer',
  'portfolio.main',
  'portfolio.service',
  'portfolio.gallery',
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
    .state('portfolio', {
      name: 'portfolio',
      url: '/portfolio/',
      views: {
        'portfolioHeaderView': {
          controller: 'HomeController',
          templateUrl: '../../assets/partials/portfolio/header.html'
        },
        'portfolioGalleryView': {
          controller: 'GalleryController',
          templateUrl: '../../assets/partials/portfolio/gallery.html'
        },
        'footerView': {
          controller: 'FooterController',
          templateUrl: '../../assets/partials/global/footer.html'
        }
      }
    });
});
