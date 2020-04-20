$(document).ready(function() {
  console.log("it works")

  // Image Toggle
  $( ".image-selector-item" ).hover(
    function() {
      if ($( this ).hasClass("selected") == true) {
        // console.log("this is already selected"); // debug
      } else {
        $(this).addClass( "hover-over" );
      }
    }, function() {
      $(this).removeClass( "hover-over" );
    });

    $(".image-selector-item").click(
      function() {
        if ($( this ).hasClass("selected") == true) {
          // console.log("this is already selected"); // debug
        } else {
          $(this).removeClass( "unselected" ).siblings().removeClass("selected");
          $(this).addClass("selected").siblings().addClass("unselected");
        }
      });

      // Changing Images 1
      $("#image-item-switch-0").click(function() {
        $("#image-item-0").attr("src", "https://dynamics365cdn.azureedge.net/cvt-df1a53f60e0c95ad8766638639a309f77f978efd9f3526a9196ad0f4fbc0b652/pictures/pages/mixed-reality/guides/Panel2_2880x1200.jpg");
        console.log("switching to image 0");
      });
      $("#image-item-switch-1").click(function() {
        $("#image-item-0").attr("src", "https://dynamics365cdn.azureedge.net/cvt-9ef69ce73be714a74b9e06cc74cf0f693cefeaa446678982fc8a93dc3d767c38/pictures/pages/mixed-reality/remote-assist/hero_1826x1026.jpg");
        console.log("switching to image 1");
      });

      // Add img Shawdow
      $( ".case-item img" ).hover(
        function() {
          $(this).addClass( "image-shadow" );
        }, function() {
          $(this).removeClass( "image-shadow" );
        });

  });
