
var AppRouter = Backbone.Router.extend({

  routes: {
    'resultView': 'openResultView',
    'detailView': 'openDetailView',
    'detailView/:itemId': 'openItemId',
  },

  openDetailView: function(options) {
    // var view = new DetailView({});
    // view.render();
  },

  openResultView: function() {

  },

  openItemId: function(itemId) {
    var view = new DetailView({
      model: window.testResults.at(itemId),
    });
    view.render();
  }

});
