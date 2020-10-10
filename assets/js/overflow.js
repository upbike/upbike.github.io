if($(window).innerWidth() > 768) {

  $(".nice-scroll").niceScroll({
    cursorborder:"",
    cursorcolor:"#ffffff",
    boxzoom:false,
    cursorwidth: 13,
    autohidemode:false,
    background: 'rgba(0, 0, 0, 0.3)',
    cursorborderradius:0,
    horizrailenabled: false
  });

  $(".about-section, .blog-details").niceScroll({
    cursorborder:"1px solid rgba(120, 120, 120, 0.9)",
    cursorcolor:"rgba(120, 120, 120, 0.9)",
    boxzoom:false,
    cursorwidth: 8,
    autohidemode:false,
    background: 'rgba(0, 0, 0, 0.1)',
    cursorborderradius:0,
  });

}
