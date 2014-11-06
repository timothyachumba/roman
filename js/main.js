$(document).ready(function() {

  $(".menu ol li div a").mouseenter(function(ev) {

    var $target = $(ev.target);
    var elementId = $target.attr('class').split(' ')[0];

    if (!$target.hasClass('project-link')) {
      $target = $target.closest('.project-link');
    }
    $('.preview').addClass('hidden');
    $('.preview#' + elementId).removeClass('hidden');
  });

  $(".menu ol li div a").mouseleave(function(ev) {

    var $target = $(ev.target);

    if (!$target.hasClass('project-link')) {
      $target = $target.closest('.project-link');
    }
    $('.preview').addClass('hidden');
  });

  function togglePanel(){

    var $panel = $('.panel');

    $panel.toggleClass('active');
  };

  $(".panel-link").click(function() {
    togglePanel();
  });

  $(".panel .close").click(function() {
    togglePanel();
  });

});
