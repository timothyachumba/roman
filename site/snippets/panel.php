<?php if (strlen($page->info()) != 0): ?>
<div class="panel-container">
  <div class="about panel">
    <a class="panel-link" href="#"><?php echo $title ?></a>
    <a class="close"></a>
    <div class="clearfix"></div>
    <div class="panel-content">
      <div>
      <?= kirbytext($page->about()) ?>
      </div>
    </div>
  </div>
</div>
<?php endif ?>