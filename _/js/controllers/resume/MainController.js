/* globals angular */

angular.module('resume.main', [])
  .controller('MainController', function ($scope, Resume) {
    $scope.name = 'Main';
    $scope.data = {};
    Resume.getUserData().then(function (userProfile) {
      $scope.data.user = userProfile;
    });
  });
