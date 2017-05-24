
var DetailView = Backbone.View.extend({

  el: '#content',
  model: Result,

  render: function() {
	
    var template = $("#detailViewTemplate").html();
    var html = Mustache.render(template, this.model.toJSON());
    this.$el.html(html);
    $("#content").append(this.$el);
    
    // Register for swipe Event
    this.$el.hammer();

    return this;
  },
  
  events: {
	  'swipe': 'onSwipe',
  },
  
  initialize: function(options) {
	  this.bus = options.bus;
	  this.bus.on("destroyOld", this.destory, this);
  },
  
  onSwipe: function(e) { 
	  alert(window.testResults.indexOf(this.model));
	  
	  
	  if(e.gesture.direction == 2) {
		  // Vorwärts Swipen
		  if(window.testResults.indexOf(this.model) == window.testResults.length-1) {
			  alert("letzter");
		  }
		  
	  }
	  else if(e.gesture.direction == 4) {
		  // Rückwärts swipen
		 
	  }
  },
  
  destroy: function() {
	  alert("HIHI");
	  this.undelegateEvents();
	  this.$el.removeData().unbind();
	  this.$el.empty();
  },

});
