$(function() {

    /**
     * Youtube Video Background
     */

	(function(){
    
        $(function(){
            $("#videoBackground").mb_YTPlayer();
        });
    
        $('#video-play').click(function(event) {
            event.preventDefault();
            if ($(this).hasClass('fa-play')) {
                $('#videoBackground').playYTP();
            } else {
                $('#videoBackground').pauseYTP();
            }
            $(this).toggleClass('fa-play fa-pause');
            return false;
        });
    
        $('#video-volume').click(function(event) {
            event.preventDefault();
            $('#videoBackground').YTPToggleVolume();
            $(this).toggleClass('fa-volume-off fa-volume-up');
            return false;
        });
    })();

    /**
     * Hamburger Menu
     */    
    
    $('.menubtn').on('click', function(){
        $(this).toggleClass('opened');
        $('.navmenu').toggleClass('opened');
    });

});

$(document).on("scroll", function(){
    console.log("This is a scroll trigger");
        if ( $(document).scrollTop()>10 ) {   
            $('.navbar-brand .large').css("font-size", "3rem");
            $('.navbar-brand .small').css({"font-size": "1.5rem", "margin-top" : "-1rem"});
            $('nav.navbar').css({"background": "rgba(220,220,220,0.6)", "border-bottom" : "1px solid rgba(200,200,200,0.7)"});
        } else {
            $('.navbar-brand .large').css("font-size", "6rem");
            $('.navbar-brand .small').css({"font-size": "2.5rem", "margin-top" : "-2.75rem"});
            $('nav.navbar').css({"background" : "transparent", "border-bottom" : "none"});
        }
});