<section class="container-fluid content-project-details-section" id="Amenities">
        <div class="row">
            <div class="col-sm">

                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            
                            <div class="container-fluid">
                                <div class="row property-details">
                                    <?php echo $attributes['project-details-block']; ?>
                                </div>
                            </div>
                        
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <div class="project-carousel owl-carousel owl-theme">

                                <?php
                                    foreach( $attributes['project-details-gallery'] as $image ) {

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