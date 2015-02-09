<!DOCTYPE html>
<html lang="en">
<head>

  <title><?php echo html($site->title()) ?> - <?php echo html($page->title()) ?></title>
  <meta charset="utf-8" />
  <meta name="description" content="<?php echo html($site->description()) ?>" />
  <meta name="keywords" content="<?php echo html($site->keywords()) ?>" />
  <meta name="robots" content="index, follow" />

  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

  <link href="http://webfonts.radimpesko.com/RP-W-54d3df45934c2b77e7000005.css" rel="stylesheet" type="text/css">

  <?php echo css(array(
    'css/plugins/scalablelightbox.css',
    'css/styles.css'
  )) ?>

  <?php echo js('js/libs/modernizr.js') ?>

  <?php if($page->hasImages()): ?>
    <link rel="image_src" href="<?php echo $page->images()->first()->url(); ?>">
  <?php endif ?>

</head>

<body>
  <div class="container">
