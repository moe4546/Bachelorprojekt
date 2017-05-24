
var ResultListView = Backbone.View.extend({
  el: '#content',
  className: 'listView',
  model: ResultCollection,
  render: function() {
	$("#content").html("");
    var self = this;
    this.model.each(function(result) {
      var view = new ResultView({ model: result });
      self.$el.append(view.render().$el);
    });

    return this;
  },
});
