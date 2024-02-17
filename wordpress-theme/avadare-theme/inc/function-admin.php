<?php

    // AVADARE Admin Page
    // ______________________________________________

    function avadare_add_admin_page() {

        add_menu_page( 
            "Avadare Admin Options" ,
            "Avadare", 
            "manage_options", // Permission
            "avadare-general", // Slugs
            "avadare_theme_create_page", // Function
            get_template_directory_uri(). '/images/admin-icon.png', 99 );

        add_submenu_page( 
            "avadare-general", // Parent Menu Slug
            "Avadare General", // Menu Title 
            "General", // Menu Name
            "manage_options", // Permission
            "avadare-general", // Slug
            "avadare_theme_create_page" // Function
        );

        // Activate custom settings
        add_action( 'admin_init', 'avadare_general' );

        // Social
        add_action( 'admin_init', 'avadare_social' );

        // Site Logo
        add_action( 'admin_init', 'avadare_logo' );


    }

    function avadare_logo(){
        register_setting( 'avadare-general-logo-group', 'avadare_logo' );
        add_settings_section( 'avadare-general-logo', 'Website Logo', '', 'avadare-logo' );
        add_settings_field( 'avadare-logo', 'Site Logo', 'avadare_general_avadare_logo', 'avadare-logo', 'avadare-general-logo');
    }

    function avadare_general_avadare_logo(){

        $avadare_logo = esc_attr( get_option( 'avadare_logo' ) );

        echo '<input style="width: 40%" type="button" value="Upload Logo" class="button button-secondary avadare_upload_logo" />
            <input type="hidden" name="avadare_logo" id="avadar_selected_logo" value="'. $avadare_logo .'" />';

        if( $avadare_logo ){
            echo '<div style="text-align: center;border: dashed 1px #999;min-height: 100px;width: calc( 40% - 2px ) ;margin-top: 10px;padding: 5px;box-sizing: border-box;">
                <img src="'. $avadare_logo .'" style="height:100px;" />
            </div>';
        }

    }

    // --------------------------------------

    function avadare_social(){

        register_setting( 'avadare-general-social-group', 'avadare_instagram' );
        register_setting( 'avadare-general-social-group', 'avadare_facebook' );

        add_settings_section( 'avadare-general-social', 'Social Media', '', 'avadare-social' );

        add_settings_field( 'avadare-instagram', 'Instagram', 'avadare_general_social_instagram', 'avadare-social', 'avadare-general-social');
        add_settings_field( 'avadare-facebook', 'Facebook', 'avadare_general_social_facebook', 'avadare-social', 'avadare-general-social');

    }

    function avadare_general_social_facebook(){
        $avadare_facebook = esc_attr( get_option( 'avadare_facebook' ) );
        echo '<input type="url" style="width: 40%" type="text" name="avadare_facebook" value="'. $avadare_facebook .'" />';
        
        if(  $avadare_facebook ){
            echo '<a style="font-size:12px;padding: 0 10px;" target="_blank" href="'. $avadare_facebook .'">View</a>';
        }
    
    }

    function avadare_general_social_instagram(){
        $avadare_instagram = esc_attr( get_option( 'avadare_instagram' ) );
        echo '<input type="url" style="width: 40%" type="text" name="avadare_instagram" value="'. $avadare_instagram .'" />';
        
        if( $avadare_instagram ){
            echo '<a style="font-size:12px;padding: 0 10px;" target="_blank" href="'. $avadare_instagram .'">View</a>';
        }
        
    }

    // --------------------------------------

    function avadare_general(){
    
        register_setting( 'avadare-general-settings-group', 'avadare_address' );
        register_setting( 'avadare-general-settings-group', 'avadare_phone' );
        register_setting( 'avadare-general-settings-group', 'avadare_email' );
        register_setting( 'avadare-general-settings-group', 'avadare_website' );
        
        register_setting( 'avadare-general-settings-group', 'avadare_careers_mail' );
        register_setting( 'avadare-general-settings-group', 'avadare_sales_mail' );

        add_settings_section( 'avadare-general-settings', 'Company Information', '', 'avadare-general' );

        add_settings_field( 'avadare-address', 'Address', 'avadare_general_settings_address', 'avadare-general', 'avadare-general-settings');
        add_settings_field( 'avadare-phone', 'Phone', 'avadare_general_settings_phone', 'avadare-general', 'avadare-general-settings');
        add_settings_field( 'avadare-website', 'Website', 'avadare_general_settings_website', 'avadare-general', 'avadare-general-settings');
        add_settings_field( 'avadare-email', 'General Email', 'avadare_general_settings_email', 'avadare-general', 'avadare-general-settings');

        add_settings_field( 'avadare-careers', 'Careers Email', 'avadare_general_settings_careers_email', 'avadare-general', 'avadare-general-settings');
        add_settings_field( 'avadare-sales', 'Sales Email', 'avadare_general_settings_sales_email', 'avadare-general', 'avadare-general-settings');
        
    }

    function avadare_general_settings_address(){
        $avadare_address = esc_attr( get_option( 'avadare_address' ) );
        echo '<Input style="width: 40%" type="text" name="avadare_address" value="'. $avadare_address .'" />';
    }

    function avadare_general_settings_phone(){
        $avadare_phone = esc_attr( get_option( 'avadare_phone' ) );
        echo '<Input style="width: 40%" type="text" name="avadare_phone" value="'. $avadare_phone .'" />';
    }
    
    function avadare_general_settings_email(){
        $avadare_email = esc_attr( get_option( 'avadare_email' ) );
        echo '<Input type="email" style="width: 40%" type="text" name="avadare_email" value="'. $avadare_email .'" />';
    }

    function avadare_general_settings_website(){
        $avadare_website = esc_attr( get_option( 'avadare_website' ) );
        echo '<Input type="url" style="width: 40%" type="text" name="avadare_website" value="'. $avadare_website .'" />';
    }

    function avadare_general_settings_careers_email(){
        $avadare_careers_mail = esc_attr( get_option( 'avadare_careers_mail' ) );
        echo '<Input type="email" style="width: 40%" type="text" name="avadare_careers_mail" value="'. $avadare_careers_mail .'" />';
    }

    function avadare_general_settings_sales_email(){
        $avadare_sales_mail = esc_attr( get_option( 'avadare_sales_mail' ) );
        echo '<Input type="email" style="width: 40%" type="text" name="avadare_sales_mail" value="'. $avadare_sales_mail .'" />';
    }

    // _____________________________________________________________________________________________________________
    
    add_action( 'admin_menu', 'avadare_add_admin_page' );

    function avadare_theme_create_page() {
        // Generate Geneal page
        require get_template_directory() . './inc/templates/avadare-general.php';
    }
