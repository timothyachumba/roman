<nav class="menu">
  <ol class="rows">
    <?php foreach($pages->find('projects')->children() as $project): ?>
      <li>
        <div>
          <a href="#" class="<?= $project->uid() ?> project-link">
            <span class="number">1</span>
            <span class="name"><?= $project->title() ?></span>
          </a>
        </div>
      </li>
    <?php endforeach ?>
  </ol>
</nav>