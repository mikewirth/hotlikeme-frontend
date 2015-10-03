(function (module) {
  'use strict';

  module.factory('ComparisonsAPI', function (Restangular) {

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
      return Restangular.all('comparisons').getList({"evaluator": userID});
    }

    /**
     * PUT on /users/{ID}
     * @param {int} id, {object} data
     * @return {promise} -> An user
     */
    function update(id, data) {
      return Restangular.one('comparisons', id).customPUT(data);
    }

  });

}(angular.module('hotlikeme.api')));