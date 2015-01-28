$(document).ready(function() {

  $(".menu ol li div a").mouseenter(function(ev) {

    var $target = $(this);
    var elementId = $target.attr('class').split(' ')[0];

    if (!$target.hasClass('project-link')) {
      $target = $target.closest('.project-link');
    }
    $('.preview').addClass('hidden');
    $('.preview#' + elementId).removeClass('hidden');
  });

  $(".menu ol li div a").mouseleave(function(ev) {

    var $target = $(this);

    if (!$target.hasClass('project-link')) {
      $target = $target.closest('.project-link');
    }
    $('.preview').addClass('hidden');
  });

  function toggleAboutPanel(){

    var $panel = $('.panel.about');

    $panel.toggleClass('active');
  };

  function toggleProjectPanel(){

    var $panel = $('.panel.project');

    $panel.toggleClass('active');
  };

  function hideProjectPanel(){

    var $panel = $('.panel');

    $panel.toggleClass('hidden');
  };

  $(".panel.about .panel-link").click(function() {
    toggleAboutPanel();
  });

  $(".panel.about .close").click(function() {
    toggleAboutPanel();
  });

  $(".panel.project .panel-link").click(function() {
    toggleProjectPanel();
  });

  $(".panel.project .close").click(function() {
    toggleProjectPanel();
  });

});
