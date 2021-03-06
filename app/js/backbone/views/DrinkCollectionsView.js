var DrinkView = require('./DrinkView.js');
module.exports = Backbone.View.extend({
	tagName: 'div',
	initialize: function() {
		this.collection.on('reset', this.render(), this);
	},
	render: function() {
		this.collection.each(function(drink){
			var drinkView = new DrinkView({model:drink});
			this.$el.append(drinkView.el);
		},this);
		return this;
	}

});
