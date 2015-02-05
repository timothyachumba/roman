<nav class="menu">
  <div class="rows">
    <?php $count = 0; ?>
    <?php foreach($pages->find('projects')->children()->visible() as $project): ?>
      <?php $count++; ?>
      <div class="menu-item">
        <div>
          <a class="<?= $project->uid() ?> project-link">
            <span class="number"><?= $count ?></span>
            <span class="name"><?= $project->title() ?></span>
          </a>
        </div>
      </div>
    <?php endforeach ?>
  </div>
</nav>