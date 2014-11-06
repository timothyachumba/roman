<nav class="menu">
  <ol class="rows">
    <?php $count = 0; ?>
    <?php foreach($pages->find('projects')->children() as $project): ?>
      <?php $count++; ?>
      <li>
        <div>
          <a class="<?= $project->uid() ?> project-link">
            <span class="number"><?= $count ?></span>
            <span class="name"><?= $project->title() ?></span>
          </a>
        </div>
      </li>
    <?php endforeach ?>
  </ol>
</nav>