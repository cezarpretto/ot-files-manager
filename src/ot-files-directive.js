/**
*  Module
*
* Description
*/
angular.module('ot-files-manager', [])
	/* grunt-angular-inline-templates */
	.directive('otFiles', ['otFlmService', '$templateCache', function(otFlmService, $templateCache){
		return {
			restrict: 'E',
			template: $templateCache.get('ot-files-view.html'),
			scope: {
				config: '='
			},
			link: function postLink(scope, element, attrs, controller) {
				scope.config.models = {};
				// console.log(scope.config);
				scope.vai = function () {
					otFlmService.search(scope.config);
				};
			}
		};
	}])
	.service('otFlmService', ['$http', function($http){
		var self = this;

		this.search = function (config) {
			var verb = config.search.method;
			return $http({
				method: verb,
				url: config.search.url
			}).then(function (data) {
				 console.log(data);
			}).catch(function (err) {
				 console.error(err);
			});
		};
	}]);