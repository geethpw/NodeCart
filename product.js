var mongoose = require('mongoose');
var Category = require('./category');
var fx = require('./fx');

var productSchema = {
	name: { type: String, requrie: true },

	// Pictures must start with http://"

	pictures: [{ type: String, match: /^http:\/\//i }],

	price: {
		amount: {
			type: Number,
			required: true
			set: function(v) {
				this.internal.approximatePriceUSD = v / (fc() [this.price.currency] || 1);
				return v;
			}
		},

		//only 3 suppported currencies for now
		currency: {
			type: String,
			enum: ['USD', 'EUR', 'GBP'],
			required: true,
			set: function(v) {
				this.internal.approximatePriceUSD = this.price.amount / (fx()[v] || 1);
				return v;
			}
		}

	},

	category: Category.categorySchema,
	internal: {
		approximatePriceUSD: Number
	}
};