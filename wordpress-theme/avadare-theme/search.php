<?php /* Template Name: Avadare Search */ get_header(); ?>

    <?php 
        
        $page_name = get_the_title();
        $q = get_queried_object();
        $post_type = 'avadare_'.$q->post_name;

        // Query
        $req_category = isset( $_GET['cat'] ) ? addslashes( $_GET['cat'] ) : 0;
        

    ?>

    <section class="container-fluid content-search-section-header" id="Search"><div class="row"><div class="col-sm">

        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <h2><?php echo $page_name; ?></h2>
                </div>
            </div>
        </div>
        
    </div></div></section>
    <!-- <pre> -->
    <?php

        $catid = get_the_category( $post->ID );

        $args_cat = array(
            'orderby'   => 'count',
            'order'     => 'DESC',
            'child_of'  => $catid[0]->term_id
        );

        $categories = get_categories( $args_cat );

    ?>
    <section class="container-fluid content-search-section-categories no-bottom-padding" id="Search">
        <div class="row">
            <div class="col-sm">
                <div class="container">
                    <div class="row g-0">
                        <div class="col-sm">
                            <ul class="categories_list">
                                <?php foreach( $categories as $key => $category ) { ?>

                                        <?php

                                            $current_url = get_permalink( get_the_ID() );
                                            $url = $current_url .'page/1/?cat='. $category->term_id;
                                        
                                        ?>

                                    <li class="<?php echo compare_page_and_category( $category->term_id, $req_category ) ?>">
                                        <a href="<?php echo $url; ?>">
                                            <div class="box">
                                                <?php echo $category->name; ?>
                                                <span class="badge" style="background-color: #134b4b;font-size: 11px;"><?php echo $category->count; ?></span>
                                            </div>
                                        </a>
                                    </li>
                                    
                                <?php } ?>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <?php

        $side_bar = array();

        foreach ( $categories as $key => $category ) {

            
            $stack = array(
                "term_id"           => $category->term_id,
                "cat_name"          => $category->name,
                "cat_slug"          => $category->slug,
                "cat_description"   => $category->description,
                "pages"             => array(),
            );

            $args = array(
                'post_type'         => $post_type,
                'cat'               => $category->term_id,
                'order'             => 'DESC',
            );

            $page_lists = new WP_Query( $args );
            $list = $page_lists->posts;
            $pages = array();

            foreach ( $list as $key => $page ) {
                
                $temp = array(
                    "post_id"       => $page->ID,
                    "post_title"    => $page->post_title,
                    "post_date"     => $page->post_date,
                    "guid"          => $page->guid
                );
                array_push( $pages, $temp );

            }
            
            $stack['pages'] = $pages;

            array_push( $side_bar, $stack );

        }

    ?>
    <section class="container-fluid content-search-section-categories no-top-padding" id="Search">
        <div class="row">
            <div class="col-sm">
                
                <div class="container">
                    <div class="row">

                        <div class="col-sm-3">

                            <div class="accordion side-bar" id="accordionExample">

                            <?php

                                foreach ( $side_bar as $key => $side ) {
                                    
                                    ?>

                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="heading_<?php echo $key;?>">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_<?php echo $key; ?>" aria-expanded="true" aria-controls="collapse_<?php echo $key; ?>">
                                                    <?php echo $side['cat_name'];?>
                                                </button>
                                            </h2>
                                            <div id="collapse_<?php echo $key; ?>" class="accordion-collapse collapse show" aria-labelledby="heading_<?php echo $key;?>">
                                                <div class="accordion-body">
                                                    <ul class="side-nav">
                                                    <?php
                                                        foreach ( $side['pages'] as $key => $page ) {
                                                            ?>
                                                                <a href="<?php echo $page['guid']; ?>">
                                                                    <li class="side-bar-link"><?php echo $page['post_title'] ?></li>
                                                                </a>
                                                                
                                                            <?php
                                                        }
                                                    ?>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    <?php
                                }

                            ?>
                                
                            </div>
                            
                        </div>

                        <div class="col-sm-9">
                            
                            <div class="pages-list">

                                <?php

                                    $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

                                    $args = array(
                                        'post_type'         => $post_type,
                                        'cat'               => $req_category,
                                        'orderby'           => 'cat',
                                        'order'             => 'DESC',
                                        'posts_per_page'    => 10,
                                        'paged'             => $paged
                                    );
                                    
                                    $page_lists = new WP_Query( $args );
                                    $pages = $page_lists->posts;

                                    $page_data = array();

                                    foreach ( $pages as $key => $page ) {

                                        $stack = array(
                                            "id"        => $page->ID,
                                            "guid"      => $page->guid,
                                            "cat"       => $page_lists->query_vars['category_name'],
                                            "image"     => $cfs->get( "image", $page->ID ),
                                            "header"    => $cfs->get( "header", $page->ID ),
                                            "sub_header"=> $cfs->get( "sub_header", $page->ID ),
                                            "location"  => $cfs->get( "location", $page->ID ),
                                            "price"  => $cfs->get( "price", $page->ID )
                                        );

                                        array_push( $page_data, $stack );

                                    }

                                ?>

                                
                                <?php
                                    foreach ( $page_data as $key => $page ) {
                                ?>

                                    <div class="card mb-3">
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <div class="imagethmb">
                                                    <div class="imagethmb_inner">
                                                        <img class="img-fluid" src="<?php echo $page['image'] ?>" class="img-fluid rounded-start" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    
                                                    <p class="car d-text">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style="margin-top: -4px;" width="18" height="18" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16"> <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/> <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> </svg>
                                                        <?php echo $page['location'] ?>
                                                    </p>
                                                    <h4 class="card-title"><?php echo $page['header'] ?></h4>
                                                    <p class="card-text"><small class="text-muted"><?php echo $page['sub_header'] ?></small></p>
                                                    <p class="card-text"><?php echo $page['price'] ?></p>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm">
                                                <div class="card-button-group">
                                                    <a href="<?php echo $page['guid'] ?>" class="btn btn-light">View</a>
                                                    <a href="tel:<?php echo get_option( 'avadare_phone' ); ?>" class="btn btn-light">CALL</a>
                                                    <a target="_blank" href="https://api.whatsapp.com/send/?phone=<?php echo get_option( 'avadare_phone' ); ?>&text=Hi" class="btn btn-light">WHATSAPP</a>
                                                    <a href="contact-us" class="btn btn-light">ENQUIRE</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                        
                                <?php
                                    }
                                ?>


                            </div>
                            
                            <div class="pagination">
                                <?php 
                                    echo paginate_links( array(
                                        'base'         => str_replace( 999999999, '%#%', esc_url( get_pagenum_link( 999999999 ) ) ),
                                        'total'        => $page_lists->max_num_pages,
                                        'current'      => max( 1, get_query_var( 'paged' ) ),
                                        'format'       => '?paged=%#%',
                                        'show_all'     => false,
                                        'type'         => 'plain',
                                        'end_size'     => 2,
                                        'mid_size'     => 1,
                                        'prev_next'    => true,
                                        'prev_text'    => sprintf( '<i></i> %1$s', __( '<', 'text-domain' ) ),
                                        'next_text'    => sprintf( '%1$s <i></i>', __( '>', 'text-domain' ) ),
                                        'add_args'     => false,
                                        'add_fragment' => '',
                                    ) );
                                ?>
                            </div>

                        </div>


                    </div>
                </div>

            </div>
        </div>
    </section>

<?php get_footer();

function compare_page_and_category( $a,$b ){
    if( $a == $b ){
        return "list active";
    } else {
        return "list";
    }
}

