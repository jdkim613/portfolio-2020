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

  $('.project-content').on('mouseover', function() {

    var thisMouse = this.id; // assign id value
    TweenMax.to(this, 1, {width: '15vw', transformOrigin:"left", ease: "circ.out"});
    showProjectTitle(thisMouse, true); // show project inside .project-content
    

  }).on('mouseleave', function() {

    var thisMouse = this.id; // assign id value
    TweenMax.to(this, 1, {width: '.75vw', ease: "circ.out"});
    showProjectTitle(thisMouse, false); // hide project inside .project-content

  })

  function showProjectTitle(projectID, onSwitch) {

    var selectedProject = '';

    switch(projectID) {
      case 'project1':
        selectedProject = document.querySelectorAll('#project1-name');
        console.log('selectedProject is 1');
        break;

      case 'project2':
        selectedProject = document.querySelectorAll('#project2-name');
        console.log('selectedProject is 2');
        break;

      case 'project3':
        selectedProject = document.querySelectorAll('#project3-name');
        console.log('selectedProject is 3');
        break;

    }

    if(onSwitch == true) {
      TweenMax.to(selectedProject, .75, {opacity: '100%', ease: "circ.out"}); // animate project content
      console.log('selectedProject is ' + projectID);
    } else {
      TweenMax.to(selectedProject, .75, {opacity: '0%', ease: "circ.out"}); // animate project content
    }
  }

  // Custom cursor for main statements
  const cursorRound = document.querySelector('.cursor-here');
  document.addEventListener('mousemove', (e) => {
    cursorRound.style.left = e.pageX + 'px';
    cursorRound.style.top = e.pageY + 'px';
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

