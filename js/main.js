$(function (){
	$(window).scroll(function() {
    	$('.skill_travel').each(function(){
        	var imagePos = $(this).offset().top;

        	var topOfWindow = $(window).scrollTop();
            	if (imagePos < topOfWindow+650) {
                	$(this).addClass("fadeInDown");
            }
    	});
	});
	$(window).scroll(function() {
    	$('.skill_taim').each(function(){
        	var imagePos = $(this).offset().top;

        	var topOfWindow = $(window).scrollTop();
            	if (imagePos < topOfWindow+650) {
                	$(this).addClass("fadeInLeft");
            }
    	});
	});
	$(window).scroll(function() {
    	$('.skill_values').each(function(){
        	var imagePos = $(this).offset().top;

        	var topOfWindow = $(window).scrollTop();
            	if (imagePos < topOfWindow+650) {
                	$(this).addClass("fadeInRight");
            }
    	});
	});
})