<section class="container-fluid content-careers-section" id="Careers">
    <div class="row">
        <div class="col-sm">

            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-4">
                        <h2><?php echo $attributes['careers-header']; ?></h2>
                        <p><?php echo $attributes['careers-description']; ?></p>
                    </div>
                    <div class="col-sm-12 col-md-8">

                        <?php get_template_part( 'template-parts/content/form', 'careers' ); ?>

                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
