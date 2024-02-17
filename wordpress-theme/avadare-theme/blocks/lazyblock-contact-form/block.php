<section class="container-fluid content-contact-section" id="Contact">
    <div class="row">
        <div class="col-sm">

            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <form action="#" class="js_contact_form">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Your Name" name="user_name" required="">
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Your Email" name="user_mail" required="">
                            </div>
                            <div class="form-group">
                                <input pattern="[0-9]{10}" minlength="10" maxlength="10" type="text" class="form-control" placeholder="Phone Number eg: 0562123456" name="mobile" required="">
                            </div>
                            <div class="form-group">
                                <select class="form-control" placeholder="M" name="inquiry" required="">
                                    <option value="Sales" selected="">Sales Inquiry</option>
                                    <option value="job">Job Inquiry</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <textarea name="message" cols="30" rows="7" class="form-control" placeholder="Message" required=""></textarea>
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5">
                            </div>
                        </form>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <div class="google_map" id="google_map"></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
<script>
    var pyrmont = { lat: <?php echo $attributes['contact-google-map-latitude']; ?>, lng: <?php echo $attributes['contact-google-map-longitude']; ?> };
    initMap( pyrmont );
</script>