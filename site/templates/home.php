<?php snippet('header') ?>
<?php snippet('menu') ?>
<div class="previews">
  <?php foreach($pages->find('projects')->children() as $project): ?>
    <div class="preview hidden" style="background-image: url(<?= $project->images()->first()->url(); ?>)" id="<?= $project->uid() ?>">
    </div>
  <?php endforeach ?>
</div>
<div class="about panel">
  <a class="panel-link" href="#">About</a>
  <a class="close"></a>
  <?= kirbytext($page->about()) ?>
</div>