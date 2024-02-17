<section class="container-fluid content-project-details-section" id="Amenities">
        <div class="row">
            <div class="col-sm">

                <div class="container">
                    <div class="row">
                        <div class="col-sm-24 col-md-24">
                            <div class="portfolio-carousel owl-carousel owl-theme">

                                <?php
                                    foreach( $attributes['portfolio-page-gallery'] as $image ) {

                                        $url = $image['url'];
                                        $alt = $image['title'];

                                        if ( isset( $image['id'] ) ) {
                                            // echo wp_get_attachment_image( $image['id'] );
                                            echo '<img src="'. $url .'" alt="'. $alt .'" />';
                                        }
                                    }
                                ?>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>