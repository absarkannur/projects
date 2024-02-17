<section class="container-fluid content-careers-contact-section" id="Careers">
    <div class="row">
        <div class="col-sm">

            <div class="container">
                <div class="row d-flex contact-info">
                    <div class="col-md-12 mb-4">
                        <h2>Contact Information</h2>
                    </div>
                    <div class="w-100"></div>
                    <div class="col-md-3">
                        <p><span>Address:</span> <?php echo get_option( 'avadare_address' ); ?></p>
                    </div>
                    <div class="col-md-3">
                        <p><span>Phone:</span> <a href="tel://<?php echo get_option( 'avadare_phone' ); ?>"><?php echo get_option( 'avadare_phone' ); ?></a></p>
                    </div>
                    <div class="col-md-3">
                        <p>
                            <span>Email:</span>
                            <a href="mailto://<?php echo get_option( 'avadare_email' ); ?>">
                                <?php echo get_option( 'avadare_email' ); ?>
                            </a>
                        </p>
                    </div>
                    <div class="col-md-3">
                        <p><span>Website:</span> <a href="#"><?php echo get_option( 'avadare_website' ); ?></a></p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>