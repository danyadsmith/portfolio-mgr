/* globals angular */

angular.module('contact', [
  'global.footer',
  'contact.main',
  'contact.form',
  'profile.service',
  'ui.router'
])
.config(function ($stateProvider, $locationProvider) {
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
  $stateProvider
    .state('contact', {
      name: 'contact',
      url: '/contact/',
      views: {
        'contactHeaderView': {
          controller: 'HomeController',
          templateUrl: '../../assets/partials/contact/header.html'
        },
        'contactFormView': {
          controller: 'FormController',
          templateUrl: '../../assets/partials/contact/form.html'
        },
        'footerView': {
          controller: 'FooterController',
          templateUrl: '../../assets/partials/global/footer.html'
        }
      }
    });
});
