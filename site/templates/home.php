<?php snippet('header') ?>

  <header>
    <h1 class="logo"><a href="/"><?= $site->title() ?></a></h1>
  </header>

  <?php snippet('menu') ?>

  <div class="previews">
    <?php foreach($pages->find('projects')->children() as $project): ?>
      <div class="preview notVisible" style="background-image: url(<?= $project->images()->first()->url(); ?>)" id="<?= $project->uid() ?>"></div>
    <?php endforeach ?>
  </div>

  <?php $count = 0; ?>
  <?php foreach($pages->find('projects')->children() as $project): ?>
    <?php $count++; ?>
    <div class="panel-container">
      <div class="project panel hidden panel-<?php echo $count; ?>">
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

<?php snippet('footer') ?>