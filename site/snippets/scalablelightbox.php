<script type="text/javascript">
  $(function() {

    $.ScalableLightbox({
      debug:       true,
      hash:        true,
      baseImgPath: "content/projects/",
      data: [
        <?php $count = 0; ?>
        <?php foreach($pages->children() as $page): ?>
          <?php $count++; ?>
        {
          id: <?= $count ?>,
          items: [
            <?php foreach($page->images() as $image): ?>
            {
              img: "<?php echo $page->dirname() ?>/<?php echo $image->filename() ?>",
              width: <?php echo $image->width() ?>,
              height: <?php echo $image->height() ?>
            },
            <?php endforeach ?>
          ]
        },
        <?php endforeach ?>
      ]
    });

  });

  <?php $count = 0; ?>

  <?php foreach($pages->children() as $page): ?>

    <?php $count++; ?>
    $(".menu .rows .menu-item div a.<?= $page->uid() ?>").click(function(e) {
      e.preventDefault();

      // $('.panel.<?= $page->uid() ?>').toggleClass('hidden');

      $.ScalableLightbox("open", { module: "lightbox", deck: <?= $count ?> });
    });
  <?php endforeach ?>
</script>