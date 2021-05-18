$(document).ready(function() {

  // Preload images using Preload.js
  queue.loadFile({id:'hololens-image-0', src:'assets/hololens-image.png'});
  // queue.loadFile({id:'hololens-image-1', src:'assets/hololens/hololens-video-01.gif'});
  queue.loadFile({id:'hololens-image-2', src:'assets/hololens/hype-cycle.png'});
  queue.loadFile({id:'hololens-image-3', src:'assets/hololens/affinity-diagramming.png'});
  queue.loadFile({id:'hololens-image-4', src:'assets/hololens/adjacencies.png'});
  queue.loadFile({id:'hololens-image-5', src:'assets/hololens/barista.jpg'});
  queue.loadFile({id:'hololens-image-6', src:'assets/hololens/instruction-breakdown.png'});
  // queue.loadFile({id:'hololens-image-7', src:'assets/hololens/guides-editing.gif'});
  // queue.loadFile({id:'hololens-image-8', src:'assets/hololens/guides-placement.gif'});
  // queue.loadFile({id:'hololens-image-9', src:'assets/hololens/cardboard-prototype.gif'});
  queue.loadFile({id:'hololens-image-10', src:'assets/hololens/hololens-testing.jpeg'});
  // queue.loadFile({id:'hololens-image-11', src:'assets/hololens/hololens-demo.gif'});

  $(".image-selector-item").click(
    function() {
      if ($( this ).hasClass("selected") == true) {
        console.log("this is already selected"); // debug
      } else {
        $(this).removeClass( "unselected" ).siblings().removeClass("selected");
        $(this).addClass("selected").siblings().addClass("unselected");
      }
    });

    // Changing Requirement card
    $("#image-item-switch-feasibility").click(function() {
      changeReqContent(0);
      $("#image-item-business-req").attr("src", "assets/hololens/feasibility.png");
      console.log("switching to feasibility");
    });
    $("#image-item-switch-viability").click(function() {
      changeReqContent(1);
      $("#image-item-business-req").attr("src", "assets/hololens/viability.png");
      console.log("switching to viability");
    });
    $("#image-item-switch-translatability").click(function() {
      changeReqContent(2);
      $("#image-item-business-req").attr("src", "assets/hololens/translatability.png");
      console.log("switching to translatability");
    });
    $("#image-item-switch-affordability").click(function() {
      changeReqContent(3);
      $("#image-item-business-req").attr("src", "assets/hololens/affordability.png");
      console.log("switching to affordability");
    });

    function changeReqContent(item) {

      var reqHeader;
      var reqBody;

      switch(item) {
        case 0:
          reqHeader = 'Feasilibity';
          reqBody = 'First, we looked at whether the concept was feasible. Understanding the technical limitations of the HoloLens was important. The HoloLens 1 was uncomfortable and lacked precision so we ruled out any cases that required fine movements and long periods of use.';
          console.log('project 1 selected');
          break;

        case 1:
          reqHeader = 'Viability';
          reqBody = 'Then, the concept had to show enough market potential. We analyzed whether the concept could bring in any significant revenue for the company and if there was strong growth in the industry.';
          console.log('project 2 selected');
          break;

        case 2:
          reqHeader = 'Transatability';
          reqBody = 'Next, we looked at whether the use case was translatable to any adjacent markets. The demo should inspire a large segment of the population rather than be acute to a specific market.';
          console.log('project 3 selected');
          break;
        case 3:
          reqHeader = 'Affordability';
          reqBody = 'We also looked at the practicality and the affordability of the demo since it would be luggage around to showcases around the globe in conventions. Subsequently, we ruled out heavy machinery, automotive, or any other concepts that we couldn’t fit comfortably in a box.';
          console.log('project 4 selected');
          break;
      }

      $('#req-item-header').text(reqHeader);
      $('#req-item-body').text(reqBody);
    }

});

var imageArrayIndex = 0;
var imageIDArray = [
    {findID:'#hero-image-container', assignID: 'image-item-hololens-header', assignClass: 'title-image'},
    // {findID:'#image-container-hl-0', assignID: 'image-item-hl-0', assignClass:'border-round'},
    {findID:'#image-container-hl-1', assignID: 'image-item-hl-1', assignClass: 'border-round'},
    {findID:'#image-container-hl-2', assignID: 'image-item-hl-2', assignClass: 'border-round'},
    {findID:'#image-container-hl-3', assignID: 'image-item-hl-3', assignClass: 'border-round'},
    {findID:'#image-container-hl-4', assignID: 'image-item-hl-4', assignClass: 'border-round image-shadow'},
    {findID:'#image-container-hl-5', assignID: 'image-item-hl-5', assignClass: 'border-round'},
    // {findID:'#image-container-hl-6', assignID: 'image-item-hl-6', assignClass: 'image-item-double border-round image-shadow'},
    // {findID:'#image-container-hl-7', assignID: 'image-item-hl-7', assignClass: 'image-item-double border-round image-shadow'},
    // {findID:'#image-container-hl-8', assignID: 'image-item-hl-8', assignClass: 'border-round'},
    {findID:'#image-container-hl-9', assignID: 'image-item-hl-9', assignClass: 'border-round'},
    // {findID:'#image-container-hl-10', assignID: 'image-item-hl-10', assignClass: 'border-round'}
];