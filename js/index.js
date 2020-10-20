$(document).ready(function() {
  // change face
  $('#homepage-head').on('mouseover', function() {
    console.log('you are here');
    $('#homepage-head').text('Let\'s–');
  }).on('mouseleave', function() {
    $('#homepage-head').text('We can–');
  })

  var bgImage = ['assets/home-0.jpg', 'assets/home-1.jpg', 'assets/home-2.jpg', 'assets/home-3.jpg', 'assets/home-4.jpg',];
  var homeString = ['design, because it matters.', 'bridge the divide between people.', 'make something unforgettable.', 'thrive under constraints.', 'change the world.']
  var imageHead = document.getElementById('homepage-image-2');
  var imageInt = 0;

  setInterval(function() {
        imageHead.style.backgroundImage = "linear-gradient(to bottom, transparent 50%, black 100%),url(" + bgImage[imageInt] + ")";
        $('#homepage-header').text( homeString[imageInt]);

        imageInt = imageInt + 1;
        if (imageInt == bgImage.length) {
          imageInt =  0;
        }
  }, 3000);


})
