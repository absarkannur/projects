<div class="col-sm-4 no-padding">
    <div class="card" style="width: 96%;margin: 0 auto 18px auto;">
        <?php if ( $attributes['home-portfolio-item-image']['url'] ) : ?>
            <img src="<?php echo $attributes['home-portfolio-item-image']['url']; ?>" class="card-img-top" alt="...">
        <?php endif; ?>
        <div class="card-body">
            <h5 class="card-title"><?php echo $attributes['home-portfolio-item-header']; ?></h5>
            <?php if ( $attributes['home-portfolio-item-description'] ) : ?>
                <p class="card-text"><?php echo $attributes['home-portfolio-item-description']; ?></p>
            <?php endif; ?>
            <a href="<?php echo $attributes['home-portfolio-item-view-all-url']; ?>" class="btn btn-light btn-sm" style="font-size: 12px;">View All</a>
            <a href="<?php echo $attributes['home-portfolio-item-url']; ?>" class="btn btn-primary btn-sm" style="float:right;font-size: 12px;">Learn More</a>
        </div>
    </div>
</div>