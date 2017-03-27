//
$.fn.nVideoSwitcher = function( opts ){
  var self = this;
  return this.each(function( i, el ){
    var _opts = $.extend({
      i: i,
      el: el
    }, opts);
    new nVideoSwitcher(_opts);
  });
}


/*
## functions
*/




/*
## nVideoSwitcher
*/

function nVideoSwitcher( opts ) {
  _.bindAll(this, "switchVideo");
  this.opts = $.extend({
    
  }, opts);
  
  this.$el = $(opts.el);
  
  this.$iframe = this.$el.find("iframe");
  this.$button = this.$el.find("button");
  
  this.$button.click(this.switchVideo);
}


/*
### window resize
*/

nVideoSwitcher.prototype.switchVideo = function(e){
  var $me = $(e.currentTarget),
      url = $me.attr("data-url");
  this.$iframe.attr("src", url);
}
