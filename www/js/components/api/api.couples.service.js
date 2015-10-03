(function (module) {
  'use strict';

  module.factory('CouplesAPI', function (Restangular) {

    var vm = {
      create: create,
      get: get,
      getAll: getAll,
      update: update
    };

    return vm;

    /**
     * POST on /users
     * @param {object} data
     * @return {promise} -> An user
     */
    function create(data) {
      return Restangular.all('comparisons').post(data);
    }

    /**
     * GET on /users/{ID}
     * @param {int} id
     * @return {promise} -> An user
     */
    function get(id, headers) {
      return Restangular.one('comparisons', id).get(null, headers);
    }

    function getAll(userID) {
      return Restangular.all('couples').getList();
    }

    /**
     * PUT on /users/{ID}
     * @param {int} id, {object} data
     * @return {promise} -> An user
     */
    function update(id, outcome) {
      console.log(id);
      return Restangular.one('comparisons', id).customPUT({outcome: outcome});
    }

  });

}(angular.module('hotlikeme.api')));