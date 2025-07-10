window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // --- Options for the first carousel (e.g., results) ---
  // IMPORTANT: Use the actual ID from your HTML below
  const carousel1_ID = '#results-hcontact'; // <--- CHANGE TO YOUR FIRST CAROUSEL ID
  const options1 = {
    slidesToScroll: 5, // Consider scrolling 1 slide at a time for smoother experience
    slidesToShow: 5,   // <--- Set desired number for carousel 1
    loop: true,
    infinite: false, // Note: loop=true might make infinite=true redundant/conflicting
    pagination: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };



  // --- Options for the second carousel (e.g., examples) ---
  // IMPORTANT: Use the actual ID from your HTML below
  const carousel2_ID = '#results-humanObjComp'; // <--- CHANGE TO YOUR SECOND CAROUSEL ID
  const options2 = {
    slidesToScroll: 3, // Consider scrolling 1 slide at a time for smoother experience
    slidesToShow: 3,   // <--- Set desired number for carousel 1
    loop: true,
    infinite: false, // Note: loop=true might make infinite=true redundant/conflicting
    pagination: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const carousel3_ID = '#results-humanObj'; // <--- CHANGE TO YOUR SECOND CAROUSEL ID
  const options3 = {
    slidesToScroll: 4, // Consider scrolling 1 slide at a time for smoother experience
    slidesToShow: 4,   // <--- Set desired number for carousel 1
    loop: true,
    infinite: false, // Note: loop=true might make infinite=true redundant/conflicting
    pagination: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const carousel4_ID = '#results-ocontact'; // <--- CHANGE TO YOUR FIRST CAROUSEL ID
  const options4 = {
    slidesToScroll: 3, // Consider scrolling 1 slide at a time for smoother experience
    slidesToShow: 3,   // <--- Set desired number for carousel 1
    loop: true,
    infinite: false, // Note: loop=true might make infinite=true redundant/conflicting
    pagination: true,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  // --- Initialize Carousels Individually ---
  let activeCarousels = []; // To store instances if needed later

  // Initialize Carousel 1 if the element exists
  const carouselElement1 = document.querySelector(carousel1_ID);
  if (carouselElement1) {
    const instance1 = bulmaCarousel.attach(carousel1_ID, options1);
    if(instance1.length > 0) { // attach returns an array
        activeCarousels.push(instance1[0]);
         // Add listener specifically to this carousel if needed
         instance1[0].on('before:show', (state) => {
             console.log(`State for ${carousel1_ID}:`, state);
         });
    }
  } else {
      console.warn(`Carousel element '${carousel1_ID}' not found.`);
  }


  // Initialize Carousel 2 if the element exists
  const carouselElement2 = document.querySelector(carousel2_ID);
  if (carouselElement2) {
    const instance2 = bulmaCarousel.attach(carousel2_ID, options2);
     if(instance2.length > 0) { // attach returns an array
         activeCarousels.push(instance2[0]);
         // Add listener specifically to this carousel if needed
         instance2[0].on('before:show', (state) => {
             console.log(`State for ${carousel2_ID}:`, state);
         });
     }
  } else {
    console.warn(`Carousel element '${carousel2_ID}' not found.`);
  }

    // Initialize Carousel 3 if the element exists
    const carouselElement3 = document.querySelector(carousel3_ID);
    if (carouselElement3) {
      const instance3 = bulmaCarousel.attach(carousel3_ID, options3);
       if(instance3.length > 0) { // attach returns an array
           activeCarousels.push(instance3[0]);
           // Add listener specifically to this carousel if needed
           instance3[0].on('before:show', (state) => {
               console.log(`State for ${carousel3_ID}:`, state);
           });
       }
    } else {
      console.warn(`Carousel element '${carousel3_ID}' not found.`);
    }

      // Initialize Carousel 4 if the element exists
    const carouselElement4 = document.querySelector(carousel4_ID);
    if (carouselElement4) {
      const instance4 = bulmaCarousel.attach(carousel4_ID, options4);
        if(instance4.length > 0) { // attach returns an array
            activeCarousels.push(instance4[0]);
            // Add listener specifically to this carousel if needed
            instance4[0].on('before:show', (state) => {
                console.log(`State for ${carousel4_ID}:`, state);
            });
        }
    } else {
      console.warn(`Carousel element '${carousel4_ID}' not found.`);
    }

  // Access to bulmaCarousel instance of a specific element (this part might still be relevant)
  // Ensure #my-element is different from your carousel IDs unless intended
  let element = document.querySelector("#my-element");
  if (element && element.bulmaCarousel) {
    // bulmaCarousel instance is available as element.bulmaCarousel
    element.bulmaCarousel.on("before-show", function (state) {
      console.log("State for #my-element:", state);
    });
  }

  // Clamp function (unrelated to carousels)
  Number.prototype.clamp = function (min, max) {
    return Math.min(Math.max(this, min), max);
  };

}); // End document ready