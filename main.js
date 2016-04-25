var UserView = Backbone.View.extend({
  tagName: 'h1',
  render: function() {
    var html = "Suck my balls"
    this.$el.html(html);
    return this;
  }
});

var userView = new UserView();
$(document.body).append(userView.render().el)
