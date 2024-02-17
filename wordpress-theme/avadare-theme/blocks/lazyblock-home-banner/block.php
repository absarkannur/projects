<?php if ( isset( $attributes['banner-image']['url'] ) ) : ?>
    <section data-parallax="scroll" class="container-fluid banner-section parallax-window" >
        
        <?php if ( $attributes['banner-overlay-transparent'] ) : ?>
            <span class="overlay" style="background-color: <?php echo $attributes['banner-overlay-color']; ?>"></span>
        <?php endif; ?>

    </section>
    <script>
        $('.parallax-window').parallax({imageSrc: '<?php echo esc_url( $attributes['banner-image']['url'] ); ?>' });
    </script>
<?php endif; ?>