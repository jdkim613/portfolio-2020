$(document).ready(function () {

  if ($(window).width() > 812) {
    $('#dummy-target-web').attr('id', 'homepage-image-2');
    $('#web-title-target').attr('id', 'homepage-header');
    console.log('web id entered');
  } else {
    $('#dummy-target-mobile').attr('id', 'homepage-image-2');
    $('#mobile-title-target').attr('id', 'homepage-header');
    console.log('mobile id entered');
  }

    // Preload images for better performance
    var indexImages = [];
  
    function preload() {
        for (var i = 0; i < arguments.length; i++) {
            indexImages[i] = new Image();
            indexImages[i].src = preload.arguments[i];
            indexImages[i].id = 'project-image-img-1';
        }
    }
  
    //-- usage --//
    preload(

      // load more photos here
        'assets/index/wip.gif',
        'assets/index/adobexairbnb.gif',
        'assets/index/student-persona.gif',
        'assets/index/hololens-4.gif',
        'assets/index/credena.gif',
        'assets/index/sony-2.gif',
        'assets/index/branding.gif'
        
    )

  // Project Item Animation 2
  $('.selected-project-item, project-name-container').on('mouseover', function () {


    var thisMouse = this.id; // assign id value
    


    var thisChild = $(this).find("div");
    var thisParent = $(this).parent('.selected-project-item');
    console.log('thisMouse = ' + thisMouse);

    TweenMax.to(this, 1, { width: '12vw', transformOrigin: "left", ease: "circ.out" });
    TweenMax.to(this, 1, { height: '12vw', transformOrigin: "top", ease: "circ.out", padding: "16px" });
    showProjectTitle(thisMouse, true); // show project inside .project-content

    showProjectImageItem();

  }).on('mouseleave', function () {

    var thisMouse = this.id; // assign id value
    TweenMax.to(this, 1, { height: '15px', transformOrigin: "top", ease: "circ.out" });
    TweenMax.to(this, 1, { width: '7.5vw', transformOrigin: "left", ease: "circ.out", padding: "0px" });
    showProjectTitle(thisMouse, false); // hide project inside .project-content
    hideProjectImageItem();
    console.log('mouse left');

  })

// More Project Microinteraction
  $('#view-project-button').on('mouseover', function() {
    TweenMax.to($('#view-project-button img'), {duration: 0.75, rotation: -360, ease: 'circ.out'});
    TweenMax.to($('#view-project-button img'), {duration: 0, rotation: 360, ease: 'circ.out'});
  })

// Change the project image
  function showProjectTitle(projectID, onSwitch) {

    var selectedProject = '';
    var imageRevealSource = '';
    var preloadedImageKey = '';

    switch (projectID) {
      case 'project1':
        // AdobeXAirbnb
        selectedProject = document.querySelectorAll('#project1-name');
        // imageRevealSource = 'assets/index/adobexairbnb.gif';
        preloadedImageKey = 1;

        console.log('selectedProject is 1');
        break;

      case 'project2':
        // Persona
        selectedProject = document.querySelectorAll('#project2-name');
        // imageRevealSource = 'assets/index/student-persona.gif';
        preloadedImageKey = 2;

        console.log('selectedProject is 2');
        break;

      case 'project3':
        // HoloLens
        selectedProject = document.querySelectorAll('#project3-name');
        // imageRevealSource = 'assets/index/hololens-4.gif';
        preloadedImageKey = 3;

        console.log('selectedProject is 3');
        break;

      case 'project4':
        // Credena
        selectedProject = document.querySelectorAll('#project4-name');
        // imageRevealSource = 'assets/index/credena.gif';
        preloadedImageKey = 4;

        console.log('selectedProject is 4');
        break;

      case 'project5':
        // Sony
        selectedProject = document.querySelectorAll('#project5-name');
        // imageRevealSource = 'assets/index/sony-2.gif';
        preloadedImageKey = 5;

        console.log('selectedProject is 5');
        break;

      case 'project6':
        // Branding Works
        selectedProject = document.querySelectorAll('#project6-name');
        // imageRevealSource = 'assets/index/branding.gif';
        preloadedImageKey = 6;

        console.log('selectedProject is 5');
        break;

      case 'project-more':
        // Branding Works
        selectedProject = document.querySelectorAll('#projectmore-name');
        // imageRevealSource = 'assets/index/wip.gif';
        preloadedImageKey = 0;

        console.log('selectedProject is work-in-progress');
        break;

    }

    // Change the source using preloaded images
    $("#project-image-img-1").attr('src', indexImages[preloadedImageKey].src);
    

    if (onSwitch == true) {
      
      TweenMax.to(selectedProject, .75, { visibility: "visible", ease: "circ.out" }); // animate project content
    } else {
      TweenMax.to(selectedProject, .75, { visibility: "hidden", ease: "circ.out" }); // animate project content
    }
  }

  // Project Image Item Reveal
  const imageRevealTL = new TimelineLite(); // create animation timeline
  const imageHideTL = new TimelineLite(); // create animation timeline

  // function showProjectImageItem(divSelected, imgSelected, revealTrigger) {
  //   if(revealTrigger == true) {
  //     // TweenMax.to(divSelected, 0, {width: '0%', ease:"circ.out"}); 
  //     TweenMax.to(divSelected, 1, {opacity: '0%', ease:"circ.out"}); 
  //     TweenMax.from(imgSelected, 1, {transform: "scale(2)", ease:"circ.out"}); // if revealTrigger is 'true', reveal image
  //   } else {
  //     // TweenMax.to(divSelected, 0.5, {width: '100%', ease:"circ.out"})
  //     TweenMax.to(divSelected, .25, {opacity: '100%', ease:"circ.out"}); 
  //     TweenMax.to(imgSelected, 1, {transform: "scale(1)", ease:"circ.out"});  // if revealTrigger is 'falase', hide image
  //   }
  // }

  // const projectImageDiv = CSSRulePlugin.getRule("#project-image-item-1:after"); // create variable for ImageDiv
  const projectImageID = $('#project-image-img-1'); // create variable for ImageID

  function showProjectImageItem() {
    TweenMax.to(projectImageID, 1, { opacity: '100%', ease: "circ.out" });
    TweenMax.from(projectImageID, 1, { transform: "scale(2)", ease: "circ.out" }); // if revealTrigger is 'true', reveal image
    console.log('reveal image');
  }

  // Project Image Item Hide
  function hideProjectImageItem() {
    TweenMax.to(projectImageID, 1, { opacity: '0%', ease: "circ.out" });
    TweenMax.to(projectImageID, 1, { transform: "scale(1)", ease: "circ.out" });  // if revealTrigger is 'false', hide image
    console.log('hide image');
  }

  // Custom cursor for main statements
  const getElementPos = document.querySelector('#container-above');
  const cursorRound = $('.cursor-here');
  var containerSelector = $('#container-above');
  // var rect = getElementPos.getBoundingClientRect();

  // console.log(rect.top, rect.right, rect.bottom, rect.left);

  // var containerWidth = window.innerWidth - rect.top;
  // var containerHeight = window.innerHeight - rect.left;
  var clipSize = 5;

  $('.home-statement').on('mouseover', function () {
    clipSize = 400;
    var idLocation = 'home-statment'
    console.log('this.class: ' + idLocation);
  }).on('mouseleave', function () {
    clipSize = 10;
  })

  document.addEventListener('mousemove', (e) => {


    var xCord = e.pageX;
    var yCord = e.pageY;

    // console.log(xCord + ', ' + yCord);


    $('#container-above').css('clip-path', 'circle( ' + clipSize + 'px at ' + (xCord + 10) + 'px ' + (yCord + 25) + 'px)');


  })


  // change face
  $('#footer-text-header').on('mouseover', function () {
    console.log('you are here');
    $(this).css('font-style', 'italic');
    $(this).text('Let\'s–');
  }).on('mouseleave', function () {
    $('#footer-text-header').css('font-style', 'normal');
    $('#footer-text-header').text('We can–');
  })

  var bgImage = ['assets/home-1.JPG', 'assets/home-2.JPG', 'assets/home-3.JPG', 'assets/home-4.JPG', 'assets/home-5.jpg', 'assets/home-0.JPG'];
  var variableString = ['design, because it matters.', 'thrive under constraints.', 'work with real people.', 'make something unforgettable.', 'define moments that matter.']
  var imageHead = document.getElementById('homepage-image-2');
  var imageInt = 0;

  setInterval(function () {
    // imageHead.style.backgroundImage = "linear-gradient(to bottom, transparent 50%, black 100%),url(" + bgImage[imageInt] + ")"; // obsolete
    $('#footer-text-variable').text(variableString[imageInt]);

    imageInt = imageInt + 1;
    if (imageInt == bgImage.length) {
      imageInt = 0;
    }
  }, 2000);

  // Skew Project Items
  let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-2, 2); // don't let the skew go beyond 20 degrees. 

  ScrollTrigger.create({
    onUpdate: (self) => {
      let skew = clamp(self.getVelocity() / -300);
      // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
      if (Math.abs(skew) > Math.abs(proxy.skew)) {
        proxy.skew = skew;
        gsap.to(proxy, { skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew) });
      }
    }
  });

  // make the right edge "stick" to the scroll bar. force3D: true improves performance
  gsap.set(".skewElem", { transformOrigin: "center", force3D: true });

  // Filter Selection
  $('.selected-filter-item').on('click', function () {

    var getThis = this;
    var getFilterID = this.id;

    changeFilterSelection(getThis, getFilterID);

    if (!$(this).hasClass('filter-item-selected')) {

      $('h2.selected-filter-item').not(this).removeClass('filter-item-selected');
      $(this).addClass('filter-item-selected');

      // console.log('the class does not exist');
    }
  })

  function changeFilterSelection(thisSelection, filterSelection) {

    var selectedFilter = ''

    switch (filterSelection) {
      case 'filter-all':
        selectedFilter = 'all';
        break;

      case 'filter-ux':
        selectedFilter = '.ux-case';
        break;

      case 'filter-visual':
        selectedFilter = '.visual-case';
        break;

      case 'filter-research':
        selectedFilter = '.research-case';
        break;

      case 'filter-thoughts':
        selectedFilter = '.thoughts-case';
        break;
    }

    console.log('selectedFilter = ' + selectedFilter);

    var unselectedFilters = $('#selected-project-container div.selected-project-item').not(selectedFilter);

    if (selectedFilter == 'all') {

      // if the 'all' filter is selected, show all project items
      // $('#selected-project-container div.selected-project-item').css('display', 'block');
      TweenMax.to($('#selected-project-container div.selected-project-item'), 0.5, { width: '7.5vw', margin: '0 1vw', display: 'block', ease: 'circ.out' });

    } else {
      // else

      if (!$(thisSelection).hasClass('filter-item-selected')) {

        $('h2.selected-filter-item').not(this).removeClass('filter-item-selected'); // remove class 'filter-item-selected'
        $(this).addClass('filter-item-selected'); // add class 'filter-item-selected' to toggle between filters

        // choose all project items without filter class and hide
        TweenMax.to(unselectedFilters, 0.5, { width: '0px', margin: '0px', display: 'none', ease: "circ.out" });
        TweenMax.to(selectedFilter, 0.5, { width: '7.5vw', margin: '0 1vw', display: 'block', ease: 'circ.out' });

        // unselectedFilters.css('display', 'none');
        // $(selectedFilter).css('display', 'block');

      }
    }

  }

})



