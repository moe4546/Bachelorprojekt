
var HeaderView = Backbone.View.extend({
	el: "#header",
	
	render: function() {
		return this;
	},
	
	events: {
		'click #toggleIcon': 'toggleMenu',
		'click #backIcon': 'back',
	},
	
	toggleMenu: function() {
		alert("toggle menu");
	},
	
	back: function() {
		// go to Result View
		window.router.navigate("resultView", {trigger: true });
		// Modify Header
		$("#toggleIcon").css("display", "block");
		$("#backIcon").css("display", "none");
		//trigger destroy in old Detail View
		Backbone.trigger("destroyOld");
		
		
	},
});