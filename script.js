/* global $ */

/* eslint-env jquery */



/* For the Sticky navigation */


$(document).ready(function () {
    
    $('.js--section-features').waypoint(function(direction) {
      if ( direction == "down") {
          $('nav').addClass('sticky');
    } else {
          $('nav').removeClass('sticky');
        }  
        
    }, {
  offset: '60px;'
});
    
  
/*Scroll on buttons*/
$('.js--scroll-to-plans').click(function () {
   $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
});

$('.js--scroll-to-start').click(function () {
   $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
});
    
    
/* Navigation scroll */
    
    
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
   
/*Animation to scroll*/  
    
/*Mobil Navigation*/

   $('.js--nav-icon').click(function() {
       var nav = $('.js--main-nav'); 
       var icon = $('.js--nav-icon i');
        
       
       if (icon.hasClass('ion-navicon-round')) {
           icon.addClass('ion-close-round');
           icon.removeClass('ion-navicon-round');
       } else {
           icon.addClass('ion-navicon-round');
           icon.removeClass('ion-close-round');
       }
    }); 
    
        
$(".js--nav-icon").click(() => {
    const nav = $(".js--main-nav");
    nav.slideToggle(200); /* def uses display: !value + css slide drawer */
 
    const icon = $(".js--nav-icon ion-icon");
 
    console.log(icon[0].name);
 
    if (icon[0].name === "menu-outline") {
        icon[0].name = "close-outline";
    } else {
        icon[0].name = "menu-outline";
    }
});    
    
$(window).resize(function(){

var nav = $('.js--main-nav');

var icon = $('.js--nav-icon i');

if ($(window).width() > 767){

nav.css("display", "block");

icon.addClass('ion-close-round');

icon.removeClass('ion-navicon-round');

} else {

nav.css("display", "none");

icon.addClass('ion-navicon-round');

icon.removeClass('ion-close-round');

}

});

});