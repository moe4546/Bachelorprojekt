
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
	  
	  Backbone.on("destroyOld", this.destroy, this);
  },
  
  onSwipe: function(e) { 
	  console.log(window.testResults.indexOf(this.model));
	  
	  if(e.gesture.direction == 2) {
		  // Vorwärts Swipen
		  if(window.testResults.indexOf(this.model) == window.testResults.length-1) {
			  // Letzter Artikel in liste
			  return;
			  // Ruckelanimation
		  }
		  //lade nächsten Artikel
		  	var nextIndex = window.testResults.indexOf(this.model)+1;
		    var route = "detailView/" + nextIndex;
		    window.router.navigate(route, {trigger: true });
		    this.destroy;
		  
	  }
	  else if(e.gesture.direction == 4) {
		  // Rückwärts swipen
		 
	  }
  },
  
  destroy: function() {
	  console.log("destroy old");
	  this.undelegateEvents();
	  this.$el.removeData().unbind();
	  //this.remove();  
	  
	  Backbone.View.prototype.remove.call(this);
  },

});
