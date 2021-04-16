$(document).ready(function() {

  if($(window).width() > 812) {
    $('#dummy-target-web').attr('id', 'homepage-image-2');
    $('#web-title-target').attr('id', 'homepage-header');
    console.log('web id entered');
  } else {
    $('#dummy-target-mobile').attr('id', 'homepage-image-2');
    $('#mobile-title-target').attr('id', 'homepage-header');
    console.log('mobile id entered');
  }

  // Project Item Animation 1
  // $('.project-content').on('mouseover', function() {

  //   var thisMouse = this.id; // assign id value
  //   TweenMax.to(this, 1, {width: '15vw', transformOrigin:"left", ease: "circ.out"});
  //   showProjectTitle(thisMouse, true); // show project inside .project-content
    

  // }).on('mouseleave', function() {

  //   var thisMouse = this.id; // assign id value
  //   TweenMax.to(this, 1, {width: '.75vw', ease: "circ.out"});
  //   showProjectTitle(thisMouse, false); // hide project inside .project-content

  // })

  // Project Item Animation 2
  $('.selected-project-item').on('mouseover', function() {

    var thisMouse = this.id; // assign id value
    TweenMax.to(this, 1, {width: '12vw', transformOrigin:"left", ease: "circ.out"});
    TweenMax.to(this, 1, {height: '12vw', transformOrigin:"top", ease: "circ.out", padding: "16px"});
    showProjectTitle(thisMouse, true); // show project inside .project-content

  }).on('mouseleave', function() {

    var thisMouse = this.id; // assign id value
    TweenMax.to(this, 1, {height: '15px', transformOrigin:"top", ease: "circ.out"});
    TweenMax.to(this, 1, {width: '7.5vw', transformOrigin:"left", ease: "circ.out", padding: "0px"});
    showProjectTitle(thisMouse, false); // hide project inside .project-content

  })

  function showProjectTitle(projectID, onSwitch) {

    var selectedProject = '';
    var imageRevealDiv = '';
    var imageRevealID = '';

    switch(projectID) {
      case 'project1':
        selectedProject = document.querySelectorAll('#project1-name');
        imageRevealDiv = CSSRulePlugin.getRule("#project-image-item-1:after");
        imageRevealID = $("#project-image-img-1");
        console.log('selectedProject is 1');
        break;

      case 'project2':
        selectedProject = document.querySelectorAll('#project2-name');
        imageRevealDiv = CSSRulePlugin.getRule("#project-image-item-2:after");
        imageRevealID = CSSRulePlugin.getRule("#project-image-item-2");
        console.log('selectedProject is 2');
        break;

      case 'project3':
        selectedProject = document.querySelectorAll('#project3-name');
        imageRevealDiv = CSSRulePlugin.getRule("#project-image-item-3:after");
        imageRevealID = CSSRulePlugin.getRule("#project-image-item-3");
        console.log('selectedProject is 3');
        break;

      case 'project4':
        selectedProject = document.querySelectorAll('#project4-name');
        imageRevealDiv = CSSRulePlugin.getRule("#project-image-item-4:after");
        imageRevealID = CSSRulePlugin.getRule("#project-image-item-4");
        console.log('selectedProject is 4');
        break;

      case 'project5':
        selectedProject = document.querySelectorAll('#project5-name');
        imageRevealDiv = CSSRulePlugin.getRule("#project-image-item-5:after");
        imageRevealID = CSSRulePlugin.getRule("#project-image-item-5");
        console.log('selectedProject is 5');
        break;

    }

    if(onSwitch == true) {
      TweenMax.to(selectedProject, .75, {visibility: "visible", ease: "circ.out"}); // animate project content
      showProjectImageItem(imageRevealDiv, imageRevealID, true); // reveal image
      console.log('selectedProject is ' + projectID);
    } else {
      TweenMax.to(selectedProject, .75, {visibility: "hidden", ease: "circ.out"}); // animate project content
      showProjectImageItem(imageRevealDiv, imageRevealID, false); // hide image
      console.log('hide image' + projectID);
    }
  }

  // Project Image Item Reveal
  const imageRevealTL = new TimelineLite(); // create animation timeline
  const imageHideTL = new TimelineLite(); // create animation timeline

  function showProjectImageItem(divSelected, imgSelected, revealTrigger) {
    if(revealTrigger == true) {
      TweenMax.to(divSelected, 0, {width: '0%', ease:"circ.out"}); 
      TweenMax.from(imgSelected, 0.75, {transform: "scale(2)", ease:"circ.out"}); // if revealTrigger is 'true', reveal image
    } else {
      TweenMax.to(divSelected, 0.75, {width: '100%', ease:"circ.out"})
      TweenMax.to(imgSelected, 0.75, {transform: "scale(1)", ease:"circ.out"});  // if revealTrigger is 'falase', hide image
    }
    
  }

  // Custom cursor for main statements
  const getElementPos = document.querySelector('#container-above');
  const cursorRound = $('.cursor-here');
  var containerSelector = $('#container-above');
  var rect = getElementPos.getBoundingClientRect();

  // console.log(rect.top, rect.right, rect.bottom, rect.left);

  var containerWidth = window.innerWidth - rect.top;
  var containerHeight = window.innerHeight - rect.left;
  var clipSize = 5;

  $('.home-statement').on('mouseover', function() {
    clipSize = 400;
    var idLocation = 'home-statment'
    console.log('this.class: ' + idLocation);
  }).on('mouseleave', function() {
    clipSize = 10;
  })

  document.addEventListener('mousemove', (e) => {

    
    var xCord = e.pageX;
    var yCord = e.pageY;

    // console.log(xCord + ', ' + yCord);


    $('#container-above').css('clip-path', 'circle( ' + clipSize +'px at ' + (xCord + 10) + 'px ' + (yCord + 25) + 'px)');

    
  })


  // change face
  $('#homepage-head').on('mouseover', function() {
    console.log('you are here');
    $('#homepage-head').text('Let\'s–');
  }).on('mouseleave', function() {
    $('#homepage-head').text('We can–');
  })

  var bgImage = ['assets/home-1.JPG', 'assets/home-2.JPG', 'assets/home-3.JPG', 'assets/home-4.JPG','assets/home-5.jpg', 'assets/home-0.JPG'];
  var homeString = ['design, because it matters.','thrive under constraints.', 'understand real lives.', 'make something unforgettable.', 'define moments that matter.', 'bridge the gap between people.']
  var imageHead = document.getElementById('homepage-image-2');
  var imageInt = 0;

  setInterval(function() {
        imageHead.style.backgroundImage = "linear-gradient(to bottom, transparent 50%, black 100%),url(" + bgImage[imageInt] + ")";
        $('#homepage-header').text( homeString[imageInt]);

        imageInt = imageInt + 1;
        if (imageInt == bgImage.length) {
          imageInt =  0;
        }
  }, 5000);
})

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
      gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", {transformOrigin: "center", force3D: true});


