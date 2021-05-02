$(document).ready(function() {

    // Comment out below on live production
    $('#password-protection-overlay').hide();


    // image load calling Preload.js
    queue.loadFile({id:'test-image-1', src:'https://hatrabbits.com/wp-content/uploads/2018/10/risky-assumptions.jpg'})
    queue.loadFile({id:'test-image-2', src:'https://hatrabbits.com/wp-content/uploads/2018/10/risky-assumptions.jpg'})
    queue.loadFile({id:'test-image-3', src:'https://hatrabbits.com/wp-content/uploads/2018/10/risky-assumptions.jpg'})
});

