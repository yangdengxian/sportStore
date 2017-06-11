angular.module('sportStoreApp')
	.constant('prouductListActiveClass', 'btn-primary')
	.constant('pageCount', 4)
	.controller('productListCtrl', ['$scope','$filter','prouductListActiveClass','pageCount','cart',function ($scope,$filter,prouductListActiveClass,pageCount,cart) {
		var selectedCategory = null;

		$scope.selectedPage = 1;
		$scope.pageSize = pageCount;

		$scope.selectCategory = function(newCategory) {
			selectedCategory = newCategory;
			$scope.selectedPage = 1;
		};

		$scope.selectPage = function(newPage) {
			$scope.selectedPage = newPage;
		};

		$scope.categoryFilterFn = function(product) {
			return selectedCategory == null ||
				product["category"] == selectedCategory;
		};

		$scope.getCategoryClass = function(category) {
			return selectedCategory == category ? prouductListActiveClass : '';
		};

		$scope.getSelectedPageClass = function(page) {
			return $scope.selectedPage == page ? prouductListActiveClass : '';
		};

		$scope.addProductToCart = function(product) {
			cart.addProduct(product.id,product.name,product.price);
		};
	}]);