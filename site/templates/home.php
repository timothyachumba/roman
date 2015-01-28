<?php snippet('header') ?>

<div class="container">

  <header>
    <h1><?= $site->title() ?></h1>
  </header>
  <?php snippet('menu') ?>
  <div class="previews">
    <?php foreach($pages->find('projects')->children() as $project): ?>
      <div class="preview hidden" style="background-image: url(<?= $project->images()->first()->url(); ?>)" id="<?= $project->uid() ?>">
      </div>
    <?php endforeach ?>
  </div>

  <?php foreach($pages->find('projects')->children() as $project): ?>
    <div class="panel-container">
      <div class="project panel hidden <?= $project->uid() ?>">
        <a class="close"></a>
        <a class="panel-link" href="#">Info</a>
        <div class="panel-content">
          <div>
          <?= kirbytext($project->info()) ?>
          </div>
        </div>
      </div>
    </div>
  <?php endforeach ?>

</div>

<?php snippet('scalablelightbox') ?>