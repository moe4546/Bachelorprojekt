
var AppRouter = Backbone.Router.extend({

  routes: {
	'': 'openResultView',
    'resultView': 'openResultView',
    'detailView': 'openDetailView',
    'detailView/:itemId': 'openItemId',
  },

  openDetailView: function(options) {
    // var view = new DetailView({});
    // view.render();
  },

  openResultView: function() {
	// config Menu
	
	var view = new ResultListView({ model: window.testResults });
	
	view.render();
	$("#toggleIcon").css("display", "block");
    $("#backIcon").css("display", "none");
  },

  openItemId: function(itemId) {
	// Clean up old Detail Views
	
	// create new View
    var view = new DetailView({ model: window.testResults.at(itemId) });
    view.render();
    
    // config Menu
    $("#toggleIcon").css("display", "none");
    $("#backIcon").css("display", "block");
  }

});
