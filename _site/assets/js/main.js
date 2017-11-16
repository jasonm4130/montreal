$(function() {

    /**
     * Hamburger Menu
     */    
    
    $('.toggler-container').click(function() {
       $('.navbar-toggler').toggleClass('active');
    });

});

$(window).on("load", function() {

        $('.counter').counterUp();
    
        // Initialize Isotope
        var $grid = $('.portfolio-grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
              // use outer width of grid-sizer for columnWidth
              columnWidth: '.grid-sizer'
            }
        });

        $('.portfolio-filter').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });


        $(function() {
            $('.portfolio-grid').find('> .grid-item').each(function () {
                $(this).hoverdir({
                    hoverDelay : 75
                });
            });
        });

    /**
     * Clients Carousel
     */
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
    
    
});