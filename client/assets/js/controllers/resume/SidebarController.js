/* globals angular */

angular.module('resume.sidebar', [])
  .controller('SidebarController', function ($scope, Resume) {
    $scope.name = 'Sidebar';
    $scope.data = {};
    Resume.getCrednentials().then(function (credentials) {
      $scope.data.credentials = credentials;
    });
    Resume.getSkills().then(function (skills) {
      $scope.data.skills = skills;
    });
    Resume.getCommunityService().then(function (communityService) {
      $scope.data.communityService = communityService;
    });
  });
