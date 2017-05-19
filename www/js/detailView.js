
var DetailView = Backbone.View.extend({

  el: '#content',
  model: Result,

  render: function() {
    //this.$el.html('Detail View' + this.model.get('label'));

    var template = $("#detailViewTemplate").html();
    var html = Mustache.render(template, this.model.toJSON());
    this.$el.html(html);
    $("#content").append(this.$el);

    return this;
  }

});
