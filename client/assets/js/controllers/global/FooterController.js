/* globals angular */

angular.module('global.footer', [])
  .controller('FooterController', function ($scope, Profile, Portfolio) {
    $scope.name = 'Footer';
    $scope.data = {};
    Portfolio.getPortfolioItems().then(function (portfolios) {
      $scope.data.portfolios = portfolios;
    });
    Profile.getSocialProfiles().then(function (socialProfiles) {
      $scope.data.profiles = socialProfiles;
    });
    Profile.getUserData().then(function (userData) {
      $scope.data.user = userData;
    });
  });
