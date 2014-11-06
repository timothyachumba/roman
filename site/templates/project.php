<?php snippet('header') ?>
<div class="container">
  <div class="index">
    <header>
      <h1>Index</h1>
      <a href="#" class="bigclose index-close"></a>
    </header>
    <div class="grid-container">
      <ul class="grid">
      <?php foreach($page->images() as $image): ?>
        <li>
          <a href="#">
            <img src="<?php echo $image->url() ?>" alt="">
          </a>
        </li>
      <?php endforeach ?>
      </ul>
    </div>
  </div>
  <header>
    <h1><a href="#" class="index-link">Index</a></h1>
    <a href="#" class="bigclose index-close"></a>
  </header>
  <div class="slider">
    <div class="slide">
      <img src="http://roman.localhost/content/projects/01-switzerland/56.jpg" data-adaptive-background='1'>
    </div>
  </div>
  <?php snippet('panel', array('title' => 'Info')) ?>
  <a href="/" class="bigclose"></a>
</div>
