/**
*  Module
*
* Description
*/
angular.module('demo-app', ['ot-files-manager'])
	.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
		$scope.config = {
			fields: [
				{
					name: 'User Id', type: 'text', model: 'userId', columnClass: 'col-lg-2 col-sm-6 col-xs-12', inputClass: 'form-control input-sm'
				},
				{
					name: 'Título', type: 'text', model: 'title', columnClass: 'col-lg-4 col-sm-6 col-xs-12', inputClass: 'form-control input-sm'
				},
				{
					name: 'Postagem', type: 'textArea', model: 'body', columnClass: 'col-lg-6 col-sm-6 col-xs-12', inputClass: 'form-control input-sm'
				},
				{
					name: 'Checar', type: 'checkbox', model: 'checked', columnClass: 'col-lg-1 col-sm-6 col-xs-12', inputClass: 'form-control input-sm'
				},
				{
					name: 'Tipo', type: 'options', model: 'tipo', labelName: 'title', columnClass: 'col-lg-5 col-sm-6 col-xs-12', inputClass: 'form-control input-sm', options: []
				}
			],
			search: {label: 'Pesquisar', url: 'http://jsonplaceholder.typicode.com/posts', method: 'post'},
			delete: {label: 'Deletar', url: '', method: 'delete'},
			download: {label: 'Download', url: '', method: 'get'},
			preview: {label: 'Visualizar', url: '', method: 'get'}
		};

		(function(){
			$http.get('http://jsonplaceholder.typicode.com/posts').then(function (data) {
				 console.log(data);
				 $scope.config.fields[4].options = data.data;
			}).catch(function (err) {
				 console.error(err);
			})
		}());
	}]);