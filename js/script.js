$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});

//animated on scroll
AOS.init({
  offset: 200,
  duration: 2000
});

//Countup 
$(document).ready(function(){
  $(".counter-Up").counterUp({
    delay: 10,
    time: 1200
  });
});

//MOBILE MENU
function openNav(){
  document.getElementById("myNav").style.width = "100%"
}
function closeNav(){
  document.getElementById("myNav").style.width = "0"
}



