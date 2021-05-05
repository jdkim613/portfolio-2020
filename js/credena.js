$(document).ready(function() {

    // Comment out below on live production
    // $('#password-protection-overlay').hide();

    

    // image load calling Preload.js
    queue.loadFile({id:'test-image-1', src:'https://hatrabbits.com/wp-content/uploads/2018/10/risky-assumptions.jpg'})
    queue.loadFile({id:'test-image-2', src:'https://hatrabbits.com/wp-content/uploads/2018/10/risky-assumptions.jpg'})
    queue.loadFile({id:'test-image-3', src:'https://hatrabbits.com/wp-content/uploads/2018/10/risky-assumptions.jpg'})
});

var imageArrayIndex = 0;
var imageIDArray = [
    {findID:'#hero-image', assignID: '', assignClass: ''},
    {findID:'#image-container-cjstory', assignID: ''},
    {findID:'#cj-image-0', assignID: '', assignClass: 'border-round image-shadow'},
    {findID:'#cj-image-1', assignID: '', assignClass: 'border-round image-shadow'},
    {findID:'#cj-image-2', assignID: '', assignClass: 'border-round image-shadow'},
    {findID:'#image-container-share-separate', assignID: 'image-item-cj-0', assignClass: 'border-round image-shadow'}
];

