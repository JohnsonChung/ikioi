// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
!function ($){

    
    function moveFixControl(){        
        $('#fixed-forward-btn').css({
           "left": ( ($(window).width() / 2) - ( 960 / 2) - 55 )
        });
        $('#fixed-next-btn').css({
           "right": ( ($(window).width() / 2) - ( 960 / 2) - 55 )
        });
           console.log($(".article").width() + " "+  $(window).width());
    };
    $(window).load( function(){
        moveFixControl();
    });
    $(window).on( 'resize', function(){
        moveFixControl();
    });

    function favoriteBtn() {
        setTimeout( function(){$(".favorite-btn img").fadeOut(0).fadeIn(2000).attr("src", "img/coffeetimeon.png")} ,2000);
        setTimeout( function(){$(".favorite-btn img").attr("src", "img/spinner_horizontal.gif")} ,0);
    }
    $(document).ready( function() {
        $(".favorite-btn").on("click", favoriteBtn);
    });    

    function toggleContainer(target, css) {
        $(target).css(css);
    };    
    function scrollStartTrigger() {
        positionTop = $(document).scrollTop();
        var power = false;
        if ( positionTop > 45 && power === false) {
            $('#dynamic-container-top').addClass("dynamic-container-top-fixed");
            power = true;
        } else {
            $('#dynamic-container-top').removeClass("dynamic-container-top-fixed");
            power = false;
        }
    };
    function scrollEndTrigger(){        
        docHeight = $(document).height() - $(window).height();
        positionTop = $(document).scrollTop();
        var power = true;    
        if( docHeight <= positionTop){
            toggleContainer('#dynamic-container-bottom',{height:200});
            power = true;
        } else {
            if ( power != false ) {
            toggleContainer('#dynamic-container-bottom',{height:0});
            power = false;}
        }
        console.log(docHeight + ' ' + positionTop);
    };

    $(window).load( function() {
        $(window).on( 'scroll',  function(){
            // scrollStartTrigger();
            scrollEndTrigger();
        });
    });

}(window.jQuery);