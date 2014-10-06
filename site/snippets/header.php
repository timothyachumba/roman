<!DOCTYPE html>
<html lang="en">
<head>

  <title><?php echo html($site->title()) ?> - <?php echo html($page->title()) ?></title>
  <meta charset="utf-8" />
  <meta name="description" content="<?php echo html($site->description()) ?>" />
  <meta name="keywords" content="<?php echo html($site->keywords()) ?>" />
  <meta name="robots" content="index, follow" />

  <?php echo css('css/styles.css') ?>

  <!-- Scripts -->
  <?
    $isProduction = (strpos($site->url(), 'romanpullvermuller.com') > 0);
    if ($isProduction) {
      $mainJS = 'main.build';
    }
    else {
      $mainJS = 'main';
    }
  ?>
  <script type="text/javascript" src="/js/vendor/require.js"></script>
  <script type="text/javascript">
    window.require = requirejs.config({
      'baseUrl': '/js',
      'context': 'rp'
    });
  </script>
  <script type="text/javascript" src="/js/<?= $mainJS ?>.js?v=<?= time(); ?>"></script>

  <? if($page->hasImages()): ?>
    <link rel="image_src" href="<?= $page->images()->first()->url(); ?>">
  <? endif ?>

</head>

<body class="<?=$site->uri()->path()->first();?>">

  <header>
    <h1><?= $site->title() ?></h1>
  </header>
