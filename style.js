// Header Değişimi

$(function(){
$ (window).scroll(function(){
		if($(this).scrollTop()>60){
			$('.header').addClass('sabitheader');
		}else{
			$('.header').removeClass('sabitheader');
		}
	});

});


// Yavaş Kaydırma

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});