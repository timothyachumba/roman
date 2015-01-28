<!DOCTYPE html>
<html lang="en">
<head>

  <title><?php echo html($site->title()) ?> - <?php echo html($page->title()) ?></title>
  <meta charset="utf-8" />
  <meta name="description" content="<?php echo html($site->description()) ?>" />
  <meta name="keywords" content="<?php echo html($site->keywords()) ?>" />
  <meta name="robots" content="index, follow" />

  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />


  <?php echo css(array(
    'css/plugins/scalablelightbox.css',
    'css/styles.css'
  )) ?>

  <!-- Scripts -->

  <?php echo js('js/libs/jquery.js') ?>
  <?php echo js('js/plugins/scalablelightbox.js') ?>
  <?php echo js('js/main.js') ?>

  <?php echo js('js/libs/modernizr.js') ?>

  <? if($page->hasImages()): ?>
    <link rel="image_src" href="<?= $page->images()->first()->url(); ?>">
  <? endif ?>

</head>

<body>
  <div class="container">
