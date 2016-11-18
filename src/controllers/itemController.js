'use strict';

var items = [
	{'name': 'film 1', 'category_id': 1},
	{'name': 'film 2', 'category_id': 1},
	{'name': 'music 1', 'category_id': 2}
];

app.
	controller('itemIndex', function($scope) {

	})
	.controller('itemList', function($scope) {
		$scope.items = items;
	})
	.controller('itemCreate', function($scope) {
		
	})
	.controller('itemRemove', function($scope) {
		
	})
;