<h2>Get In Touch</h2>
<form action="#" class="js_contact_form">
    <div class="form-group">
        <input type="text" class="form-control trans" placeholder="Your Name" name="user_name" required="">
    </div>
    <div class="form-group">
        <input type="email" class="form-control trans" placeholder="Your Email" name="user_mail" required="">
    </div>
    <div class="form-group">
        <input pattern="[0-9]{10}" minlength="10" maxlength="10" type="text" class="form-control trans" placeholder="Phone Number eg: 0562123456" name="mobile" required="">
    </div>
    <div class="form-group">
        <select class="form-control trans" placeholder="M" name="inquiry" required="">
            <option value="Sales" selected="">Sales Inquiry</option>
            <option value="job">Job Inquiry</option>
        </select>
    </div>
    <div class="form-group">
        <textarea name="message" class="form-control trans" placeholder="Message" required=""></textarea>
    </div>
    <div class="form-group">
        <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5">
    </div>
</form>
<script>

        (function(){

            $('.js_contact_form').submit(function( e ){
                e.preventDefault();

                $(this).find('.btn').attr({
                    disabled: 'disabled'
                });
                    
                var endPoint = '<?php echo admin_url('admin-ajax.php'); ?>';
                var form_data = new FormData(this);
                var form = $( this ).serialize();

                form_data.append('action', 'enquiry');
                form_data.append('nonce', '<?php echo wp_create_nonce('avadare_dv_ghalia'); ?>');
                form_data.append('enquiry', form);
                
                console.log( form_data );

                $.ajax( endPoint, {
                    type: 'POST',
                    data: form_data,
                    processData: false,
                    contentType: false,
                    cache: false,
                    dataType: 'json',
                    success: function( res ){
                        alert( res.data );
                        window.location.reload();
                    },
                    error: function( err ){
                        alert( err.responseJSON.data );
                        window.location.reload();
                    }
                });

            });

        })( $ );

</script>