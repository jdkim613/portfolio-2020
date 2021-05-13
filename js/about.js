$(document).ready(function() {

     // Preload images using Preload.js
     queue.loadFile({id:'cj-image-0', src:'assets/about/prof.jpg'})


    // Setting the max width of .experience-attr to whatever is longest
    var maxWidthAttr = 0;
    $('.experience-attr').each(function(i) {
        if(this.offsetWidth > maxWidthAttr) {
            maxWidthAttr = this.offsetWidth;
        }
    })

    $('.experience-attr').width(maxWidthAttr + 5);

    var navBarTL = gsap.timeline();

    $('#biography-selection').on('click', function() {
        if(!$(this).hasClass('navbar-item-selected')) {
            $(this).addClass('navbar-item-selected');
            $(this).siblings().removeClass('navbar-item-selected');


            TweenMax.to($('#bio-content-resume-swap'), {duration: 0.5, opacity: 0, left: 150, ease: 'circ.out'});
            TweenMax.to($('#bio-content-biography-swap'), {duration: 0.5, opacity: 1,  left: 0, ease: 'circ.out'});

        } else {
            console.log('biography already selected');
        };
    });

    $('#resume-selection').on('click', function() {
        if(!$(this).hasClass('navbar-item-selected')) {
            $(this).addClass('navbar-item-selected');
            $(this).siblings().removeClass('navbar-item-selected');


            TweenMax.to($('#bio-content-resume-swap'), {duration: 0.5, opacity: 1, left: 0, ease: 'circ.out'});
            TweenMax.to($('#bio-content-biography-swap'), {duration: 0.5, opacity: 0, left: -150, ease: 'circ.out'});

        } else {
            console.log('resume already selected');
        };
    });

})

var imageArrayIndex = 0;
var imageIDArray = [
    {findID:'#bio-image-wrapper', assignID: 'bio-pic', assignClass: ''},
];

