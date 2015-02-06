<?php snippet('header') ?>

  <header>
    <h1 class="logo"><a href="/"><?= $site->title() ?></a></h1>
  </header>

  <?php snippet('menu') ?>

  <div class="previews">
    <?php foreach($pages->find('projects')->children()->visible() as $project): ?>
      <div class="preview notVisible" style="background-image: url(<?= $project->images()->first()->url(); ?>)" id="<?= $project->uid() ?>"></div>
    <?php endforeach ?>
  </div>

  <div class="panel-container">
    <?php $count = 0; ?>
    <?php foreach($pages->find('projects')->children()->visible() as $project): ?>
      <?php $count++; ?>
      <?php if (strlen($project->info()) > 0): ?>
      <div class="project inner panel panel-<?php echo $count; ?>">
        <a class="close"></a>
        <a class="panel-link" href="#">Info</a>
        <div class="panel-content">
          <div>
          <?= kirbytext($project->info()) ?>
          </div>
        </div>
      </div>
      <?php endif ?>
    <?php endforeach ?>
    <div class="project panel about">
      <a class="panel-link" href="#">A<span class="justMobile">bout</span></a>
      <a class="close"></a>
      <div class="panel-content">
        <div>
        <?= kirbytext($page->about()) ?>
        </div>
      </div>
    </div>
  </div>

<?php snippet('footer') ?>