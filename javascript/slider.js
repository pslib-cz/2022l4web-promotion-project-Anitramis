let slider = tns({        
    speed: 1000,
    controls: false,
    navPosition: "bottom",
    gutter: 20,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 8000,
    mouseDrag: true,
    rewind: true
  });

let feedback = tns({
  container: ".feedback-slider",
  nav: false,
  speed: 1000,
  autoplay: true,
  autoplayTimeout: 10000,
  autoplayButtonOutput: false,
  controls: ".feedback-controls",
  prevButton: ".prev",
  nextButton: ".next",
  mouseDrag: true,
  loop: true,
  gutter: 40

});