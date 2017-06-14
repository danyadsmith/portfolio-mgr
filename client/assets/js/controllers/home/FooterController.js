/* globals angular */

angular.module('homepage.footer', [])
  .controller('FooterController', function ($scope, Profile) {
    $scope.name = 'Footer';
    $scope.data = {};
    Profile.getSocialProfiles().then(function (socialProfiles) {
      $scope.data.profiles = socialProfiles;
    });
  });
