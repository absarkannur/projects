//
(function() {

    jQuery(document).ready(function($) {

        var mediaUploader;

        $('.avadare_upload_logo').on('click', function(e) {
            e.preventDefault();

            if (mediaUploader) {
                mediaUploader.open();
                return;
            }

            mediaUploader = wp.media.frames.file_frame = wp.media({
                title: 'Choose a logo',
                button: {
                    text: 'Choose logo',
                },
                multiple: false,
            });

            mediaUploader.on('select', function() {
                var attachment = mediaUploader.state().get('selection').first().toJSON();
                $('#avadar_selected_logo').val(attachment.url);
            });

            mediaUploader.open();

        });

    });

})($);