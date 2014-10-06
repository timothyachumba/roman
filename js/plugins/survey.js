$(function() {

  // Analytics helper

  function trackEvent (section, area, action) {

    return _gaq.push(['_trackEvent', section, area, action]);
  }

  // Analytics initializer

  function initAnalyticsTracking () {

    $('[data-track]').each(function () {

      var $this = $(this);
      var parts = $this.attr('data-track').split(':');

      $this.on('mousedown', function () {
        trackEvent(parts[0], parts[1], parts[2]);
      });
    });
  }

  initAnalyticsTracking();

});