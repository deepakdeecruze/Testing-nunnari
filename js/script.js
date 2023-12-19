//Owl carousel customizing

$(document).ready(function(){
  $('.owl-carousel--promo').owlCarousel({
    loop:true,
    items:1,
    dotsContainer: '#promo-dots',
    autoplay: true
  })
  $('.owl-carousel--quotes').owlCarousel({
    loop:true,
    items:1,
    dots: false,
    nav: false,
    navText: "",
    dotsContainer: '#quotes-dots',
    navContainer: '#quotes-arrows',
    autoplay: true,
    responsive : {
    720 : {
        dots : true,
        nav : true
    }}
  })
});



//Scroll header events

function yScroll(){
	var header = document.querySelector("#header");
		yPos = window.pageYOffset;
	if(yPos > 630){
		header.style.background = "rgba(0,0,0,.3)";
	} else {
		header.style.background = "none";
	}
}
window.addEventListener("scroll", yScroll);



//Active header menu item navigation

jQuery(window).scroll(function(){
        var $sections = $('section[id]');
	$sections.each(function(i,el){
        var top  = $(el).offset().top-80;
        	bottom = top +$(el).height();
        	scroll = $(window).scrollTop();
        	id = $(el).attr('id');
    	if( scroll > top && scroll < bottom){
            $('a.header-menu__link--active').removeClass('header-menu__link--active');
			$('a[href="#'+id+'"]').addClass('header-menu__link--active');
        }
    })
 });



//Smooth anchor link navigation

$("#header-menu__list").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });