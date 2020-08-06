$(document).ready(function() {
  // change face
  $('#homepage-head').on('mouseover', function() {
    console.log('you are here');
    $('#homepage-head').text('We will–');
  }).on('mouseleave', function() {
    $('#homepage-head').text('We can–');
  })
})
