$(document).ready(function() {

    // Comment out below on live production
    // $('#password-protection-overlay').hide();
    // $('#preload-case-wrapper').hide();

    

    // image load calling Preload.js
    // queue.loadFile({id:'hero-image', src:''})
    // queue.loadFile({id:'persona-0', src:'assets/credena/Denise Alt.webp'})
    // queue.loadFile({id:'persona-1', src:'assets/credena/Javi Alt.webp'})
    // queue.loadFile({id:'persona-2', src:'assets/credena/Jane Alt.webp'})
    // queue.loadFile({id:'persona-3', src:'assets/credena/Gil Alt.webp'})
    // queue.loadFile({id:'journey-0', src:'assets/credena/New Patient Journey.webpg'})
    // queue.loadFile({id:'joureny-1', src:'assets/credena/Existing Patient Journey.webpg'})
    // queue.loadFile({id:'journey-2', src:'assets/credena/Specialty Pharmacist Journey.webpg'})
    // queue.loadFile({id:'journey-3', src:'assets/credena/Retail Pharmacy Technician Journey.webpg'})

    // image switcher function

    var imageSwitchIndex = [
        {
            0: 'assets/credena/denise.webp',
            1: 'assets/credena/javi.webp',
            2: 'assets/credena/jane.webp',
            3: 'assets/credena/gil.webp',
        },
        {
            0: 'assets/credena/denise-journey.webp',
            1: 'assets/credena/javi-journey.webp',
            2: 'assets/credena/jane-journey.webp',
            3: 'assets/credena/gil-journey.webp',
        }
    ];

    $('.image-selector-item').on('click', function() {
        var getParentID = $(this).parent().attr('id').slice(-1);
        var getThisID = $(this).attr('id').slice(-1);

        // variable that stores image showcase
        var changeImageID = '#credena-image-showcase-' + getParentID;

        // variables to select items
        var srcIndex = imageSwitchIndex[getParentID][getThisID];


        // Find out which image-showcase is being used and assign the id to a variable
        $(changeImageID).attr('src', srcIndex);
    })


});

// var imageArrayIndex = 0;
// var imageIDArray = [
//     {findID:'#hero-image', assignID: '', assignClass: ''},
//     {findID:'#credena-image-showcase-container-0', assignID: 'credena-image-showcase-0', assignClass: 'border-round image-shadow'},
//     {findID:'#credena-image-showcase-container-1', assignID: 'credena-image-showcase-1', assignClass: 'border-round image-shadow'},    
// ];

