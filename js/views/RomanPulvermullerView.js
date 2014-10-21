define([

  'vendor/jquery',
  'vendor/underscore',
  'vendor/backbone',

  'helpers/helpers'

], function($, _, Backbone, helpers) {

  return Backbone.View.extend({

    'el': 'body',

    'events': {

      'mouseenter .menu ol li div a': 'previewProject',
      'mouseleave .menu ol li div a': 'hidePreview',
      'click .panel-link': 'showPanel',
      'click .panel .close': 'closePanel',
      'click .index-link': 'showIndex',
      'click .index-close': 'closeIndex'
    },

    'previewProject': function(ev) {

      var self = this;
      var $target = $(ev.target);

      if (!$target.hasClass('project-link')) {
        $target = $target.closest('.project-link');
      }

      var elementId = $target.attr('class').split(' ')[0];

      $('.preview').addClass('hidden');
      $('.preview#' + elementId).removeClass('hidden');

    },

    'hidePreview': function(ev) {

      var self = this;
      var $target = $(ev.target);

      if (!$target.hasClass('project-link')) {
        $target = $target.closest('.project-link');
      }

      $('.preview').addClass('hidden');

    },

    'togglePanel': function() {

      var self = this;
      var $panel = $('.panel');

      $panel.toggleClass('active');
    },

    'showPanel': function(ev) {

      var self = this;
      var $target = $(ev.target);

      self.togglePanel();
    },

    'closePanel': function() {

      var self = this;

      self.togglePanel();
    },

    'showIndex': function() {

      var self = this;
      var $index = $('.index');

      $index.addClass('active');
    },

    'closeIndex': function() {

      var self = this;
      var $index = $('.index');

      $index.fadeOut(500);

      setTimeout(function() {
        $index.removeClass('active');
      }, 500);
    },
  });
});