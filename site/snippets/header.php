<!DOCTYPE html>
<html lang="en">
<head>

  <title><?php echo html($site->title()) ?> - <?php echo html($page->title()) ?></title>
  <meta charset="utf-8" />
  <meta name="description" content="<?php echo html($site->description()) ?>" />
  <meta name="keywords" content="<?php echo html($site->keywords()) ?>" />
  <meta name="robots" content="index, follow" />

  <?php echo css(array(
    'css/plugins/scalablelightbox.css',
    'css/styles.css'
  )) ?>

  <!-- Scripts -->

  <?php echo js(array(
    'js/libs/jquery.js',
    'js/libs/modernizr.js',
    'js/libs/hammer.js',
    'js/plugins/scalablelightbox.js',
    'js/main.js',
  )) ?>

  <? if($page->hasImages()): ?>
    <link rel="image_src" href="<?= $page->images()->first()->url(); ?>">
  <? endif ?>

</head>

<body class="<?=$site->page()->uri(); ?>">
