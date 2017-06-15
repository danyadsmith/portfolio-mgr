/* globals angular */

angular.module('global.footer', [])
  .controller('FooterController', function ($scope, Profile) {
    $scope.name = 'Footer';
    $scope.data = {};
    Profile.getSocialProfiles().then(function (socialProfiles) {
      $scope.data.profiles = socialProfiles;
    });
  });
