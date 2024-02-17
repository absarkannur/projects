<section class="container-fluid content-profile-section" id="Profile">
    <div class="row">
        <div class="col-sm">
            <div class="container">

                <div class="profile-block" style="background-color:<?php echo $attributes['profile-bg-color']; ?>">

                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <h1 class="main-header white"><?php echo $attributes['profile-header']; ?></h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm ">
                                <?php echo $attributes['profile-description']; ?>
                            </div>
                        </div>
                    </div>

                    <img src="<?php echo esc_url( $attributes['profile-image']['url'] ); ?>" class="bg_image" alt="">
                </div>

            </div>
        </div>
    </div>
</section>