(function (module) {

  /**
  *  Module
  *
  * Description
  */
  module
  	.run(['$templateCache', function($templateCache) {
	$templateCache.put('ot-files-view.html', '<div class=row><div class=col-sm-12><div class="panel panel-default"><form name=frmSearch><div class=panel-body><div class=row><div class="{{field.columnClass || \'col-lg-4 col-sm-6 col-xs-12\'}}" ng-repeat="field in config.fields"><div class=input-group><span class=input-group-addon>{{field.name}}:</span><input class="{{field.inputClass || \'form-control\'}}" type={{field.type}} ng-model=config.fields.models[field.model] ng-if="field.type !== \'options\' && field.type !== \'textArea\' && field.type !== \'checkbox\'" required><select class="{{field.inputClass || \'form-control\'}}" ng-options="option as option.{{field.labelName}} for option in field.options" ng-model=config.fields.models[field.model] ng-if="field.type === \'options\'" required></select><textarea class="{{field.inputClass || \'form-control\'}}" type={{field.type}} ng-model=config.fields.models[field.model] ng-if="field.type === \'textArea\'" required>\n\t\t\t\t\t\t\t\t</textarea><input class=checkbox type={{field.type}} ng-model=config.fields.models[field.model] ng-if="field.type === \'checkbox\'"></div></div></div><div class=row><div class="col-lg-12 col-sm-12 col-xs-12"><button class="btn btn-primary btn-sm pull-right" ng-click=vai() ng-disabled=frmSearch.$invalid>{{config.search.label}}</button></div></div></div></form></div></div></div>');
}])

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

}) (angular.module ('ot-files-manager', []));


