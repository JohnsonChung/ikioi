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
        positionTop = ($(window).scrollTop() + $(window).height() ) - ( $(window).height() / 2 );
        $('#fixed-forward-btn').css({
           "left": ( ($(window).width() / 2) - ( 960 / 2) - 35 )
        });
        $('#fixed-next-btn').css({
           "right": ( ($(window).width() / 2) - ( 960 / 2) - 35 )
        });
           console.log($(".article").width() + " "+  $(window).width());
    };
    $(window).load( function(){
        moveFixControl();
    });
    $(window).on( 'resize', function(){
        moveFixControl();
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