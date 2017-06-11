angular.module('sportStoreApp')
	.config(function ($routeProvider) {
		$routeProvider.when('/complete',{
			templateUrl: '../views/thanks.html'
		});

		$routeProvider.when('/placeorder',{
			templateUrl: '../views/placeOrder.html'
		});

		$routeProvider.when('/checkout',{
			templateUrl: '../views/checkoutSummary.html'
		});

		$routeProvider.when('/products',{
			templateUrl: '../view/productList.html'
		});

		$routeProvider.otherwise({
			templateUrl: '../view/productList.html'
		});
	});