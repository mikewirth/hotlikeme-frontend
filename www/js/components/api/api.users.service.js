(function (module) {
  'use strict';

  module.factory('UsersAPI', function (Restangular) {

    var vm = {
      create: create,
      get: get,
      update: update,
      updateSettings: updateSettings
    };

    return vm;

    /**
     * POST on /users
     * @param {object} data
     * @return {promise} -> An user
     */
    function create(data) {
      return Restangular.all('users').post(data);
    }

    /**
     * GET on /users/{ID}
     * @param {int} id
     * @return {promise} -> An user
     */
    function get(id, headers) {
      return Restangular.one('users', id).get(null, headers);
    }

    /**
     * PUT on /users/{ID}
     * @param {int} id, {object} data
     * @return {promise} -> An user
     */
    function update(id, data) {
      return Restangular.one('users', id).customPUT(data);
    }

    /**
     * PUT on /users/{ID}/settings
     * @param {int} id, {object} data
     * @return {promise} -> settings
     */
    function updateSettings(id, data) {
      return Restangular.one('users', id).all('settings').customPUT(data);
    }

  });

}(angular.module('hotlikeme.api')));