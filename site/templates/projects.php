<?php snippet('header') ?>
<div class="container">
  <header>
    <h1><?= $site->title() ?></h1>
  </header>
  <?php snippet('menu') ?>
  <div class="previews">
    <?php foreach($pages->find('projects')->children()->visible() as $project): ?>
      <div class="preview hidden" style="background-image: url(<?= $project->images()->first()->url(); ?>)" id="<?= $project->uid() ?>">
      </div>
    <?php endforeach ?>
  </div>
  <?php snippet('panel', array('title' => 'About')) ?>
</div>