<section class="container-fluid no-padding banner-inner-section" style="background-image: url('<?php echo esc_url( $attributes['inner-banner-image']['url'] ); ?>');">
    
    <?php if ( $attributes['inner-banner-sub-header'] ) : ?>

        <span class="header-prop-title">
            <?php echo $attributes['inner-banner-header']; ?>
            <span class="sub-header-prop-title"><?php echo $attributes['inner-banner-sub-header']; ?></span>
        </span>
    
    <?php else: ?>

        <span class="header-title"><?php echo $attributes['inner-banner-header']; ?></span>

    <?php endif; ?>

</section>