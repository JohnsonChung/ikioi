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
    function moveTop(){      
        if( ($(document).scrollTop()+$(window).height())   >= 1024) {
            $("#fixed-top-btn").stop().animate({"right": "15px"}, 500);
        } else {
            $("#fixed-top-btn").stop().animate({"right":"-60px"}, 300);  
        }
        console.log($(document).scrollTop());
    }  
    $(window).load( function(){
        moveFixControl();
        $("#fixed-top-btn").css({"right":"-50px"});  
    });
    $(window).on( 'resize', function(){
        moveFixControl();
    });
    $(window).on( 'scroll', function(){        
        moveTop();
    })


    function favoriteBtn() {
        $(".favorite-btn img")
            .attr("src", "img/coffeetimeon.png");
        $(".favorite-btn")
            .css({right:-40, opacity:0});
        $(".favorite-btn").animate({"right":"10px",opacity: 1},300);
        $(".favorite-btn").on("mouseover", function(){
            $(".favorite-btn img").attr("src", "img/coffeetimeOnCancle.png");
        })
        $(".favorite-btn").on("mouseout", function(){
            $(".favorite-btn img").attr("src", "img/coffeetimeon.png");
        })
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

// transit Play
!function ($){
    $(document).ready( function(){        
        var form = $('.replyForm');
        var tform = $('.replyForm .contentForm');

        tform.bind( "focus", function() {
            form.toggleClass("open");
            form.stop()
                .transition({x:80}, 200)
                .transition({x:00}, 500);
        })
        $('.btn-submit').bind( "click", function() {
            form.toggleClass("open");
            tform.empty();
            tform.stop().transition({});
        })
    });

}(window.jQuery);