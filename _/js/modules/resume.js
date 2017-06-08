/* globals angular */

angular.module('resume', [
  'resume.main',
  'resume.about',
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
        }
      }
    });
});
