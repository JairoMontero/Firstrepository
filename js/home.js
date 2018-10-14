$(document).ready( function(){


  $('.scrolltop').click(function(){
    $('html, body').animate({ scrollTop: 0 },1000);
  });



  $('.nav-link').on('click',function(){
    var link = $(this);

    $('html, body').stop().animate({ scrollTop: $(link.attr('href')).offset().top }, 1000);
  });



  $(window).on('scroll', function(){

    if( $(window).scrollTop() >= 800 ){
      //has esta acción
      $('.scrolltop').addClass('activo');

    }else{
      //has esta otra accion
      $('.scrolltop').removeClass('activo');

    } 

  });


  $('.galeria').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    nextArrow: '<div class="next"><i class="fas fa-chevron-right"></i><div>',
    prevArrow: '<div class="prev"><i class="fas fa-chevron-left"></i><div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]

  });





});


// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: -12.068137, lng: -77.060954};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 16,
        center: uluru
      });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
    position: uluru, map: map
  });
}
