//:)

$(function() {

    // Page Loader
    function imgLoadedCallback() {
        showPage();
    }

    function preloadimages(n) {
        function o() {
            ++a == n.length && imgLoadedCallback()
        }
        for (var e = [], a = 0, t = (n = "object" != typeof n ? [n] : n, 0); t < n.length; t++) e[t] = new Image, e[t].src = n[t], e[t].onload = function() {
            a / n.length * 100, o()
        }, e[t].onerror = function() {
            o()
        }
    }! function() {
        for (var n = document.getElementsByTagName("img"), o = [], e = 0; e < n.length; e++) o.push(n[e].src);
        preloadimages(o)
        if (o.length == 0) {
            showPage();
        }
    }();

    function showPage() {
        $('.loader-dash').hide();
        WayToSite();
    }


    // Scroll Position
    var WayToSite = function() {

        $('#Count').waypoint(function(direction) {

            $('.count-value .number').counterUp({
                delay: 10,
                time: 1000
            });

        }, { offset: '90%' });

    }


    // Smooth Scroll
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });


    $('.services_list.owl-carousel').owlCarousel({
        loop: false,
        margin: 50,
        nav: true,
        items: 1,
        dots: false
    });

    $('.project-carousel.owl-carousel').owlCarousel({
        loop: false,
        margin: 50,
        nav: true,
        items: 1,
        dots: false
    });

    $('.portfolio-carousel.owl-carousel').owlCarousel({
        loop: false,
        margin: 50,
        nav: true,
        items: 2,
        dots: false
    });

    // _____________ AJAX _______________

    // Ajax Contact Form
    // $('.js_contact_form').submit(function(e) {
    //     e.preventDefault();
    //     $(this).find('.btn').attr({
    //         disabled: 'disabled'
    //     });
    //     //activate on first click only to avoid hiding again on multiple clicks
    //     if (!e.detail || e.detail == 1) {
    //         var form_data = $(this).serialize();
    //         var url_api = "api/ap_contact.php";
    //         $.ajax({
    //             method: "POST",
    //             url: url_api,
    //             data: form_data,
    //             dataType: 'json'
    //         }).done(function(msg) {
    //             swal(" ", msg[1], msg[0]).then(function() {
    //                 window.location.reload();
    //             });
    //         });
    //     }
    // });
    // Ajax Career Submission - 
    // $('.js_career_form').submit(function(e) {
    //     e.preventDefault();
    //     $(this).find('.btn').attr({
    //         disabled: 'disabled'
    //     });
    //     //activate on first click only to avoid hiding again on multiple clicks
    //     if (!e.detail || e.detail == 1) {
    //         var url_api = "api/ap_career.php";
    //         $.ajax({
    //             method: "POST",
    //             url: url_api,
    //             dataType: 'json',
    //             data: new FormData(this),
    //             processData: false,
    //             contentType: false
    //         }).done(function(msg) {
    //             swal(" ", msg[1], msg[0]).then(function() {
    //                 window.location.reload();
    //             });
    //         });
    //     }
    // });

    $(document).on('scroll', function( e ){
        var top = Math.round( $(window).scrollTop() );
        if( top > 1500 ){
            $('.to_top').fadeIn();
        } else {
            $('.to_top').fadeOut();
        }
    });

    $('.to_top').click(function(){
        $(window).scrollTop(0);
    });


});