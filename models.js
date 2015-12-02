var mongoose = require('mongoose');

module.exports  =function(qagner) {
	mongoose.connect('mongodb://localhost:27017/test');

	var Category = mongoose.model('Category', require('./Category'), 'categories');
	var Product = mongoose.model('Product', require('./product'), 'products');

	var models = {
		Category: Category,
		Product: Product
	};
	

	wagner.factory('Category', function() {
		return Category;
	});

	return  {
		Category: Category;
	};
};