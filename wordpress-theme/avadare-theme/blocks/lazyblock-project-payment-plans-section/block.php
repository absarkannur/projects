<section class="container-fluid content-project-payment-section" id="Payment" style="border-top: solid 1px #eee;">
        <div class="row">
            <div class="col-sm">
            
                <div class="container">

                    <?php if( $attributes['payment-plans'] ): ?>
                    <div class="row justify-content-center mb-3">
                        <div class="col-md text-center heading-section ftco-animate fadeInUp ftco-animated">
                            <h2 class="mb-4">Payment Plans</h2>
                        </div>
                    </div>

                    <div class="row d-flex pb-5 contact-info">
                        
                        <!-- Plans -->
                        <?php echo $attributes['payment-plans']; ?>

                        <div class="col-md-4 no-float">
                            <div class="payment_plan mb-3">
                                <a href="<?php echo $attributes['page-url']; ?>" class="booknow-btn">Book Now</a>
                            </div>
                        </div>

                    </div>

                    <?php endif; ?>

                    <div class="row justify-content-center mb-3">
                        <div class="col-md text-center heading-section ftco-animate fadeInUp ftco-animated">
                            <h2 class="mb-4">We accept all types of payments</h2>
                        </div>
                    </div>

                    <div class="row d-flex pb-5 contact-info justify-content-md-center">

                        <div class="col-md-6">
                            <div class="row">

                                <?php if ( $attributes['bank'] ) : ?>
                                    <div class="col-sm no-float">
                                        <div class="text-center mb-3">
                                            <div class="icon-small pl-2 no-float">
                                                <img src="<?php echo get_template_directory_uri();?>/images/bank.png" class="no-float">
                                            </div>
                                            <span><b>Bank Transfer</b></span>
                                        </div>
                                    </div>
                                <?php endif; ?>

                                <?php if ( $attributes['credit-card'] ) : ?>
                                    <div class="col-sm no-float">
                                        <div class="text-center mb-3">
                                            <div class="icon-small pl-2 no-float">
                                                <img src="<?php echo get_template_directory_uri();?>/images/credit-card.png" class="no-float">
                                            </div>
                                            <span><b>Credit Card</b></span>
                                        </div>
                                    </div>
                                <?php endif; ?>

                                <?php if ( $attributes['cheques'] ) : ?>
                                    <div class="col-sm no-float">
                                        <div class="text-center mb-3">
                                            <div class="icon-small pl-2 no-float">
                                                <img src="<?php echo get_template_directory_uri();?>/images/cheque.png" class="no-float">
                                            </div>
                                            <span><b>Cheques</b></span>
                                        </div>
                                    </div>
                                <?php endif; ?>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </section>