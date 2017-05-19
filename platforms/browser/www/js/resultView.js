
var ResultView = Backbone.View.extend({

  tagName: 'div',
  className: 'resultView',

  render: function() {

    var template = $("#resultTemplate").html();
    var html = Mustache.render(template, this.model.toJSON());
    this.$el.html(html);
    $("#content").append(this.$el);

    return this;
  },

  events: {
    "click": "itemClicked",
  },

  itemClicked: function(e) {

    var index = window.testResults.indexOf(this.model);
    var route = "detailView/" + index;
    window.router.navigate(route, {trigger: true });
  }

});
