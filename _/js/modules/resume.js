/* globals angular */

angular.module('resume', [
  'global.footer',
  'resume.main',
  'resume.about',
  'resume.service',
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
    .state('resume', {
      name: 'resume',
      url: '/resume/',
      views: {
        'resumeHeaderView': {
          controller: 'HomeController',
          templateUrl: '../../assets/partials/resume/header.html'
        },
        'resumeAboutView': {
          controller: 'AboutController',
          templateUrl: '../../assets/partials/resume/about.html'
        },
        'footerView': {
          controller: 'FooterController',
          templateUrl: '../../assets/partials/global/footer.html'
        }
      }
    });
});
