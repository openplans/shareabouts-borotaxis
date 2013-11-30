/*globals jQuery _ Handlebars Backbone */

var Shareabouts = Shareabouts || {};

(function(S, $, console){
  S.PagesNavView = Backbone.View.extend({
    events: {
      'click .internal-menu-item a': 'onPageLinkClick',
      'click #nav-bttn': 'onMobileNavClick'
    },

    render: function() {
      var data = {
            pages: this.options.pagesConfig,
            has_pages: (this.options.pagesConfig.length > 0)
          },
          template = Handlebars.templates['pages-nav'](data);
      this.$el.html(template);

      return this;
    },

    onPageLinkClick: function(evt) {
      evt.preventDefault();
      // Hide mobile list when one is selected
      $('.access').removeClass('expose');
      // Load the content
      this.options.router.navigate(evt.target.getAttribute('href'), {trigger: true});
      S.Util.log('USER', 'page-menu', 'click-link', evt.target.getAttribute('href') + " -- " + evt.target.textContent);
    },

    onMobileNavClick: function(evt) {
      evt.preventDefault();
      $('.access').toggleClass('expose');
      S.Util.log('USER', 'page-menu', ($('.access').hasClass('expose') ? 'show' : 'hide') + '-mobile-nav');
    }
  });

}(Shareabouts, jQuery, Shareabouts.Util.console));
