(function () {
  'use strict';

  angular.module('TableComponent',[])
    .controller('TableComponentController', ['$scope', '$element', '$attrs', '$http',
      function ($scope, $element, $attrs, $http) {

      	var tableConfig = {},
      		getDataParams = {};

      	$scope.pageTool = {};

	 	$scope.isPageToolShow = false;

	 	$scope.isSearchBarShow = false;

	 	tableConfig = JSON.parse($attrs.tableConfig);

	 	$scope.isPageToolShow = tableConfig.pagetool;

	 	$scope.isSearchBarShow = tableConfig.searchbar;


      	function getTableData(method,url,params){

      		$http({

				method: method,

				url: url,

				params:params

			}).success(function(data) {
				
				console.log(data)

				var dataLength = data.length;

				$scope.data = data;

				// console.log(dataLength/5)

				$scope.pageTool['totalPage'] = Math.ceil(dataLength/3);

			}).error(function(data) {

				console.log("fail")

			});

      	}

      	$scope.init = function(){

      		getTableData('get',tableConfig.getDataUrl)

      	}

      	$scope.goToFirstPage = function(){

      		getDataParams = {};

      		getDataParams['page'] = 1;

      		getDataParams['keyword'] = null;

      		console.log(getDataParams)

      		getTableData('get',tableConfig.getDataUrl,getDataParams)

      	}

      	$scope.searchData = function(){

      		getDataParams = {};

      		getDataParams['page'] = 1;

      		getDataParams['keyword'] = $scope.keyword;

      		console.log(getDataParams)

      		getTableData('get',tableConfig.getDataUrl,getDataParams)

      	}

      }
    ]);
})();
