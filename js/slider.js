var options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 60,
        y2: 45,
        x3: 15
    }
    };
    var $carousel = $('.flickity-slider').flickity();

    // var carousel = document.querySelector('[data-carousel]');
    // var slides = document.getElementsByClassName('.carousel-cell');
    $("#flickity-next").on('click', function() {
        console.log('prev')
        $carousel.flickity('previous');
      });
      // previous wrapped
      $("#flickity-previous").on('click', function() {
          console.log('Next')
        $carousel.flickity( 'next' );
      });
    // console.log(carousel)
    // console.log(slides)
    // var flkty = new Flickity(options,carousel);


    // flkty.on('scroll', function () {
    // flkty.slides.forEach(function (slide, i) {
    //     console.log("Hello World ")
    //     var image = slides[i];
    //     var x = (slide.target + flkty.x) * -1/3;
    //     image.style.backgroundPosition = x + 'px';
    // });
    // });