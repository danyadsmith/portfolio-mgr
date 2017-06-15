/* globals angular */

angular.module('resume.service', [])
  .factory('Resume', function ($http) {
    var data;

    var getUserData = function (userID) {
      userID = userID || 1;
      return $http({
        method: 'GET',
        url: '/api/users/' + userID
      }).then(function (response) {
        data = response.data;
        console.log(JSON.stringify(data));
        return data;
      });
    };

    var getCommunityService = function (userID) {
      userID = userID || 1;
      return $http({
        method: 'GET',
        url: '/api/users/' + userID + '/services'
      }).then(function (response) {
        data = response.data;
        console.log(JSON.stringify(data));
        return data;
      });
    };

    var getCredentials = function (userID) {
      userID = userID || 1;
      return $http({
        method: 'GET',
        url: '/api/users/' + userID + '/credentials'
      }).then(function (response) {
        data = response.data;
        console.log(JSON.stringify(data));
        return data;
      });
    };

    var getProjects = function (userID) {
      userID = userID || 1;
      return $http({
        method: 'GET',
        url: '/api/users/' + userID + '/projects'
      }).then(function (response) {
        data = response.data;
        console.log(JSON.stringify(data));
        return data;
      });
    };

    var getSkills = function (userID) {
      userID = userID || 1;
      return $http({
        method: 'GET',
        url: '/api/users/' + userID + '/skills'
      }).then(function (response) {
        data = response.data;
        console.log(JSON.stringify(data));
        return data;
      });
    };

    var getWorkHistory = function (userID) {
      userID = userID || 1;
      return $http({
        method: 'GET',
        url: '/api/users/' + userID + '/jobs'
      }).then(function (response) {
        data = response.data;
        console.log(JSON.stringify(data));
        return data;
      });
    };

    return {
      getUserData: getUserData,
      getCommunityService: getCommunityService,
      getCredentials: getCredentials,
      getProjects: getProjects,
      getSkills: getSkills,
      getWorkHistory: getWorkHistory
    };
  });
