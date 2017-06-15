/* globals angular */

angular.module('resume.intro', [])
  .controller('IntroController', function ($scope, Resume) {
    $scope.name = 'Intro';
    $scope.data = {};
    Resume.getUserData().then(function (userProfile) {
      $scope.data.user = userProfile;
    });
  });
