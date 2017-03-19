(function () {
  'use strict';

  angular.module('TableComponent')
    .directive('tableComponent', ['$window', '$document', '$timeout', '$q',
      function ($window, $document, $timeout, $q) {
        return {
        	 restrict: 'A',
        	 replace: true,
        	 // template: '<p>Hello World</p>',
        	 scope: true,
        	 controller: 'TableComponentController',
        	 link: function (scope, element, attrs, controllersArr) {

        	 }
        };
      }
    ]);
})();
