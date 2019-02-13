;(function () {
    'use strict';
    // Animations
    var contentWayPoint = function() {
        var i = 0;
        $('.reveal-on-scroll').waypoint( function( direction ) {
            if( direction === 'down' && !$(this.element).hasClass('animated') ) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function(){
                    $('body .reveal-on-scroll.item-animate').each(function(k){
                        var el = $(this);
                        setTimeout( function () {
                            el.addClass('fadeInUp animated');
                            el.removeClass('item-animate');
                        },  k * 200, 'easeInOutExpo' );
                    });
                }, 100);
            }
        } , { offset: '95%' } );
    };
    // Document on load.
    $(function(){
        // Animate
        contentWayPoint();
    });

    // Smooth scrolling
    $("a").on('click', function(event) {
        if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 850, function(){
            window.location.hash = hash;
        });
        }
    });
}());