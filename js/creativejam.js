$(document).ready(function() {

    console.log('loaded cj.js')

    // Preload images using Preload.js
    // queue.loadFile({id:'cj-image-0', src:'assets/creativejam/creativejam_wt2.gif'})
    // queue.loadFile({id:'cj-image-1', src:'assets/creativejam/storytelling.gif'})
    // queue.loadFile({id:'cj-image-2', src:'assets/creativejam/collaborate.gif'})
    // queue.loadFile({id:'cj-image-3', src:'assets/creativejam/contextual-photos.gif'})
    // queue.loadFile({id:'cj-image-4', src:'assets/creativejam/AR-Feed.gif'})
    queue.loadFile({id:'cj-image-5', src:'assets/creativejam/sharing-separately.gif'})

    $('div#cj-image-0 > img').addClass('border-round image-shadow');
})

var imageArrayIndex = 0;
var imageIDArray = [
    // {findID:'#hero-image', assignID: '', assignClass: ''},
    // {findID:'#image-container-cjstory', assignID: ''},
    // {findID:'#cj-image-0', assignID: '', assignClass: 'border-round image-shadow'},
    // {findID:'#cj-image-1', assignID: '', assignClass: 'border-round image-shadow'},
    // {findID:'#cj-image-2', assignID: '', assignClass: 'border-round image-shadow'},
    {findID:'#image-container-share-separate', assignID: 'image-item-cj-0', assignClass: 'border-round image-shadow'}
];