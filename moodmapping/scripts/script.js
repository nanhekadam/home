$(document).ready(function() {
  $('.screenshots').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      // {
      //   breakpoint: 991,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3
      //   }
      // }, // Tablet
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, // Large Mobile
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      } // Small Mobile
    ]

  });
});
