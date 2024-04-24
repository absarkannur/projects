// : )

$(function(){
    
    var whatsapp = false;
    
    $(document).ready(function(){
        
        // load Whatsapp icon
        setTimeout(function(){
            $('.whatsapp').show();
        }, 2000 );

        var scroll = $(window).scrollTop();
        
        if( scroll >= 1300 ) {
            $('.banner-fixed').show();
        } else {
            $('.banner-fixed').hide();
        }

    });

    $(window).scroll(function(){
        
        var scroll = $(window).scrollTop();

        if( scroll >= 1300 ) {
            $('.banner-fixed').show();
        } else {
            $('.banner-fixed').hide();
        }
        
    });

    // -------

    $(document).on('click', function( e ){	

        if( !$(e.target).parentsUntil('navbar-nav').hasClass('navbar-nav') && 
            !$(e.target).parentsUntil('navbar-toggler').hasClass('navbar-toggler')){

            $('.navbar-toggler').removeClass('collapsed');
            $('.navbar-collapse').removeClass('show');

        }
        
    });

    $('.whatsapp').click(function(){
        soundPlay.play();
    });

});