<div class="wrap">

    <h1 class="wp-heading-inline">Avadare General Settings</h1>

    <?php settings_errors(); ?>

    <div class="avadare_inner_wrapper">
        <form method="post" action="options.php">

            <?php settings_fields( 'avadare-general-logo-group' ); ?>
            
            <?php do_settings_sections( 'avadare-logo' ); ?>

            <?php submit_button( 'Update Logo' ); ?>
            
            <hr class="wp-header" />
            
        </form>
    </div> 

    <div class="avadare_inner_wrapper">
        <form method="post" action="options.php">

            <?php settings_fields( 'avadare-general-settings-group' ); ?>
            
            <?php do_settings_sections( 'avadare-general' ); ?>

            <?php submit_button(); ?>
            
            <hr class="wp-header" />
            
        </form>
    </div> 

    <div class="avadare_inner_wrapper">
        <form method="post" action="options.php">

            <?php settings_fields( 'avadare-general-social-group' ); ?>
            
            <?php do_settings_sections( 'avadare-social' ); ?>

            <hr class="wp-header" />

            <?php submit_button(); ?>
            
        </form>
    </div> 


</div>
