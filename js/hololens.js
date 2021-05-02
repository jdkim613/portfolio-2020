$(document).ready(function() {

  // Preload images using Preload.js
  queue.loadFile({id:'hololens-image-0', src:'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg'})
  queue.loadFile({id:'hololens-image-1', src:'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg'})
  queue.loadFile({id:'hololens-image-2', src:'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg'})

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
