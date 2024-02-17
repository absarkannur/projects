<?php

    add_action( "admin_enqueue_scripts", "avadare_admin_scripts_load" );

    function avadare_admin_scripts_load( $hook ){

        if( $hook != 'toplevel_page_avadare-general' ){ return false;}
        
        wp_register_script( 
            "avadare_admin_scripts",
            get_template_directory_uri() . "/assets/js/admin_scripts.js",
            array( 'jquery' ), false, true );

        wp_enqueue_script( "avadare_admin_scripts" );

    }

    