/* globals angular */

angular.module('resume.sidebar', [])
  .controller('SidebarController', function ($scope, Resume) {
    $scope.name = 'Sidebar';
    $scope.data = {};
    Resume.getUserData().then(function (userProfile) {
      $scope.data.user = userProfile;
    });
  });
