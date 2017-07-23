/* globals angular */

angular.module('resume', [
  'angular.filter',
  'global.footer',
  'resume.header',
  'resume.intro',
  'resume.main',
  'resume.sidebar',
  'resume.service',
  'portfolio.service',
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
          controller: 'HeaderController',
          templateUrl: '../../assets/partials/resume/header.html'
        },
        'resumeIntroView': {
          controller: 'IntroController',
          templateUrl: '../../assets/partials/resume/intro.html'
        },
        'resumeMainView': {
          controller: 'MainController',
          templateUrl: '../../assets/partials/resume/main.html'
        },
        'resumeSidebarView': {
          controller: 'SidebarController',
          templateUrl: '../../assets/partials/resume/sidebar.html'
        },
        'footerView': {
          controller: 'FooterController',
          templateUrl: '../../assets/partials/global/footer.html'
        }
      }
    });
});
