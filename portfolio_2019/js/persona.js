$(document).ready(function() {

  // Image Toggle
  // $( ".image-selector-item" ).hover(
  //   function() {
  //     if ($( this ).hasClass("selected") == true) {
  //       // console.log("this is already selected"); // debug
  //     } else {
  //       $(this).addClass( "hover-over" );
  //     }
  //   }, function() {
  //     $(this).removeClass( "hover-over" );
  //   });

    $(".image-selector-item").click(
      function() {
        if ($( this ).hasClass("selected") == true) {
          console.log("this is already selected"); // debug
        } else {
          $(this).removeClass( "unselected" ).siblings().removeClass("selected");
          $(this).addClass("selected").siblings().addClass("unselected");
        }
      });

      // Changing Images 1
      $("#image-item-switch-pcscope").click(function() {
        $("#image-item-pc-1").attr("src", "assets/persona/persona-scope.png");
        console.log("switching to image 0");
      });
      $("#image-item-switch-pctimeline").click(function() {
        $("#image-item-pc-1").attr("src", "assets/persona/persona-timeline.png");
        console.log("switching to image 1");
      });

      // Changing Image 2
      $("#image-item-switch-transformation").click(function() {
        $("#image-item-pc-2").attr("src", "assets/persona/student-change.png");
        console.log("switching to image 1");
      });
      $("#image-item-switch-biases").click(function() {
        $("#image-item-pc-2").attr("src", "assets/persona/biased-research.png");
        console.log("switching to image 1");
      });
      $("#image-item-switch-irreplaceability").click(function() {
        $("#image-item-pc-2").attr("src", "assets/persona/replacing-humans.png");
        console.log("switching to image 1");
      });

      // Changing Persona card
      $("#image-item-switch-pcfront").click(function() {
        $("#image-item-pc-3").attr("src", "assets/persona/persona-front.png");
        console.log("switching to image persona front");
      });
      $("#image-item-switch-pcback").click(function() {
        $("#image-item-pc-3").attr("src", "assets/persona/persona-back.png");
        console.log("switching to image persona back");
      });
});
