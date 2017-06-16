/* globals angular */

angular.module('resume.main', [])
  .controller('MainController', function ($scope, Resume) {
    $scope.name = 'Main';
    $scope.data = {};
    Resume.getProjects().then(function (projects) {
      $scope.data.projects = projects;
    });
    Resume.getWorkHistory().then(function (workHistory) {
      $scope.data.workHistory = workHistory;
    });
  });
