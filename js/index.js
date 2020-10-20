$(document).ready(function() {
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

