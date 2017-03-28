
jQuery(document).ready(function() {

    /*
        Background slideshow
    */
    $('.coming-soon').backstretch([
      "assets/img/backgrounds/1.JPG"
    , "assets/img/backgrounds/2.jpg"
    , "assets/img/backgrounds/3.jpg"
    , "assets/img/backgrounds/4.jpg"
    , "assets/img/backgrounds/5.jpg"
    , "assets/img/backgrounds/6.JPG"
    , "assets/img/backgrounds/8.JPG"
    , "assets/img/backgrounds/9.JPG"
    , "assets/img/backgrounds/10.JPG"
    , "assets/img/backgrounds/11.JPG"
    , "assets/img/backgrounds/12.JPG"
    , "assets/img/backgrounds/13.JPG"
    , "assets/img/backgrounds/15.JPG"
    , "assets/img/backgrounds/17.JPG"
    ], {duration: 3000, fade: 750});

    /*
	    Countdown initializer
	*/
	var now = new Date(2017, 02, 28, 00, 00);
	var countTo = 0 * 0 * 0 * 0 * 0 + now.valueOf();    
	$('.timer').countdown(countTo, function(event) {
		$(this).find('.days').text(event.offset.totalDays);
		$(this).find('.hours').text(event.offset.hours);
		$(this).find('.minutes').text(event.offset.minutes);
		$(this).find('.seconds').text(event.offset.seconds);
	});

    /*
        Tooltips
    */
    $('.social a').tooltip();

});
