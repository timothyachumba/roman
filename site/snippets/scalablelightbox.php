<?php echo js('js/libs/jquery.js') ?>
<?php echo js('js/plugins/scalablelightbox.js') ?>

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
            img:     "<?php echo $page->dirname() ?>/<?php echo $image->filename() ?>",
            width:   <?php echo $image->width() ?>,
            height:  <?php echo $image->height() ?>
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
$(".menu ol li div a.<?= $page->uid() ?>").click(function(e) {
  e.preventDefault();

  $.ScalableLightbox("open", { module: "lightbox", deck: <?= $count ?> });
});
<?php endforeach ?>
</script>

<?php echo js('js/main.js') ?>