(function() {
	angular.module('myNodeApp', ['ui-router'])
		.config(function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/');



		});
})();