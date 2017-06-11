angular.module('sportStoreApp')
	.controller('checkoutCtrl', ['$scope', 'cart',function ($scope,cart) {
		$scope.cartData = cart.getProducts();

		$scope.total = function() {
			var total = 0,cartData = $scope.cartData;
			for (var i = 0; i < cartData.length; i++) {
				total += cartData[i].price * cartData[i].count;
			}
			return total;
		};

		$scope.remove = function(id) {
			cart.removeProduct(id);
		};
	}])