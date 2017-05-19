
var Result = Backbone.Model.extend({
  initialize: function() {

  },

  validate: function(attrs) {
    if(!attrs.label) {
      return "Missing data";
    }
  },

  defaults: {
    // Attributes hash
    
    label: '',
    description: '',
    picture: '',
    date: '',
    source: '',
  },
});
