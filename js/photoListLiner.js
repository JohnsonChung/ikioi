// 取代錯誤圖片
$(document).ready( function(){
    $('.postCon').css({"margin":"0 10px 45px 10px"});
    $('.imgCon img').css({"width":"100%", "height":"100%"});
    $('img').one('error', function(){
        $(this).unbind("error").attr("src", "broken.gif");
        console.log('img error');
    });
})
// Main
jQuery( function ($) {
    var imgAttr = [],
        imgAttrOutput = [],
        imgQuantity = 0;

    var anime = {
    	togg: function(time, delay) {
    		setTimeout(methods.$imgCon.toggle(time),delay);
    	}    	 
    };

    var methods = {
        init: function () {
            this.cacheElements();            
            this.windowResize();
            this.bindEvents();
            this.getImgAttr();
            this.exceptionJudge();
            this.getHeight();
        },
        cacheElements: function () {
            this.$imgCon = $('.imgCon');
            console.log('cacheEvent Complete!');
        },
        bindEvents: function () {
            var list = this.$imgCon;
            $('.toggle').on('click', anime.togg);
            console.log('bindEvent Complete!');
        },
        exceptionJudge: function() {
            // 更改錯誤讀取之 height width 數據
            $.each( imgAttr, function( index, value ){
                if ( imgAttr[index][2] === 'broken.gif' ){
                    imgAttr[index][0] = 100; //h
                    imgAttr[index][1] = 80; //w
                    console.log('replaced error image: ' + $(this)[0] + ' ' + $(this)[1]);
                };
            });
        },
        getImgAttr: function () {

            //將每個圖片長寬放入陣列 imgAttr[[height, width],[...]]
            this.$imgCon.find('img.postImg').each(function () {
                var w = $(this).width() + 20;
                imgAttr.push([$(this).height(), w, $(this).attr('src')]);
            });            
            //圖片數量
            // imgQuantity = this.$imgCon.find('img.postImg').size();
            imgQuantity = imgAttr.length;
            console.log('getImgAttr Complete! ' + 'There are ' + imgQuantity + ' images bean load.');
        }, //do the Math 

        getHeight: function () {
            var lineHeight = 350; //每一行最高高度
            var lineWidth = $(window).width(); //瀏覽器寬度
            var outputHeight = 0; //每一行輸出高度

            for (var i = 0; i < imgQuantity; i++) {
                var number = 0,
                    combine = 0;
                for (var j = i; j < imgQuantity; j++) {
                    combine += (imgAttr[j][1] / imgAttr[j][0]);
                    // console.log(imgAttr[j][1] , imgAttr[j][0]);
                    number++;
                    if (lineHeight >= (lineWidth / combine)) {
                        outputHeight = (lineWidth / combine);
                        // console.log( 'outputHeight: ' + outputHeight);
                        break;
                    };
                };

                //計算輸出的長寬放入陣列 imgAttrOutput[[height, width],[...]]	
                for (var k = i; k < (i + number); k++) {
                    imgAttrOutput[k] = [];
                    imgAttrOutput[k][0] = Math.min(outputHeight);
                    imgAttrOutput[k][1] = outputHeight * (imgAttr[k][1] / imgAttr[k][0]);
                };
                i += number - 1;
                // console.log('[[BrPoint ' + i + ']]');
                // console.log(imgAttr[i][2]);			
                
            };
            this.setStyle();
        }, 

        setStyle: function () {                                
            this.$imgCon.find("img").each(function (index) {
                $(this).width(imgAttrOutput[index][1] - 20).height(imgAttrOutput[index][0]);
                if( $(this).attr('src') === 'broken.gif') {
                    $(this).parents('div.postCon').toggleClass('postCon-noImage');
                }
            });            
            console.log('Set Style Complete!');
        },
        windowResize: function() {
            // 需要改進 因為只需要 listCon 的 width 為 trigger 就好
        	window.addEventListener('resize', function () {
        		setTimeout( function(){
	            methods.getHeight();
	            methods.setStyle();	        	
	        	}, 300);
        	});
		}
    };

    $(window).load( function(){ methods.init();});
    $(window).load( function() { $("div.introCon").fadeOut(2000);});
});
