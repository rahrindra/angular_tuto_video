'use strict';

var items = [
	{'name': 'film 1', 'category_id': 1},
	{'name': 'film 2', 'category_id': 1},
	{'name': 'music 1', 'category_id': 2}
];

app.service('itemProvider', function() {
	this.getItems = function() {
		return items;
	}
});