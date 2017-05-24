
// Picture Examples for Bachelorarbeit

// Views

var TodoView = Backbone.View.extend({
	
	el: "#container",
	className: "element",
	tagName: "li",

	render: function() {
		$el.html(this.model.get("title"));
	},
	
	events: {
		"click .button": "btnClick",
		"dblclick img": "openImg",
	},
	
	btnClick: function() {
		
	},
	
	openImg: function() {
		
	},
	
});



