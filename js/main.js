$(document).ready(function() {

  $('.rows .menu-item').not('.animation').each(function(i){
    setTimeout(function(){
       $('.rows .menu-item').eq(i).addClass('animation');
    },300*i);
  });

  $(".menu .rows .menu-item div a").mouseenter(function(ev) {

    var $target = $(this);
    var elementId = $target.attr('class').split(' ')[0];

    if (!$target.hasClass('project-link')) {
      $target = $target.closest('.project-link');
    }
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $('.preview').addClass('notVisible');
      $('.preview#' + elementId).removeClass('notVisible');
    }


  });

  $(".menu .rows .menu-item div a").mouseleave(function(ev) {

    var $target = $(this);

    if (!$target.hasClass('project-link')) {
      $target = $target.closest('.project-link');
    }
    $('.preview').addClass('notVisible');
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

  // $(".panel.about .panel-link").click(function() {
  //   toggleAboutPanel();
  // });

  // $(".panel.about .close").click(function() {
  //   toggleAboutPanel();
  // });

  $(".panel.project .panel-link").click(function() {
    toggleProjectPanel();
  });

  $(".panel.project .close").click(function() {
    toggleProjectPanel();
  });

});
