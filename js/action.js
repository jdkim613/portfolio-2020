$(document).ready(function() {
  console.log("it works")

  const myEmail = 'jdkim613@gmail.com';

  // change face
  $('#head').on('mouseover', function() {
    $('#email-copied').text('Click me...');
  }).on('mouseleave', function() {
    $('#head').attr('src', 'assets/face-0.png');
    $('#email-copied').text('Hover me...');
  })


  // email copy
  $('#head').on('click', function() {
    $('#head').attr('src', 'assets/face-1.png');
    emailToClipboard('jdkim613@gmail.com');
    $('#email-copied').text('Email copied!');
  })


  const emailToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

  // more project nav
  $('#more-projects').on('click', function() {

    console.log('clicked for more');

    // $('.more-projects-nav').toggleClass('disappear');
    $('.more-projects-nav').toggleClass('slide-appear');
    $('.sliding-nav').toggleClass('no-event');
    $('body').toggleClass('fixed-position');

    if(!$('.navigation-items').hasClass('white-font')) {
      $('.navigation-item').addClass('white-font');
    } else {
      $('.navigation-item').removeClass('white-font');
    }

    // if ($('.more-projects-nav').hasClass('slide-appear') == false) {
    //
    // } else {
    //   $('.header-content > *').removeClass('white-font');
    // }
  })

  // Project Toggle
  $('.project-item').on('mouseover', function() {

    $('#project-title, #project-attr').css('display', 'block'); // show the hidden block
    $('#project-title-index, #project-attr-index').css('display', 'block');
    var thisMouse = this.id; // assign id value
    changeProjectTitle(thisMouse); // change the title based on the value
    appendEmoji(thisMouse);


    $('#nav-image-container').addClass('fade-in'); // make visible
    $('#nav-image-container').css('opacity', '1');

  }).on('mouseleave', function() {
    var thisMouse = this.id;
    $('#project-title, #project-attr').css('display', 'none');
    $('#project-title-index, #project-attr-index').css('display', 'none');
    removeEmoji(thisMouse);

    $('#nav-image-container').toggleClass('fade-in'); // make invisible
    $('#nav-image-container').css('opacity', '0');

  })

  function appendEmoji(project) {
    var appendThis;

    switch(project) {
      case 'project1':
        appendThis = " 😎";
        break;

      case 'project2':
        appendThis = " 👤";
        break;

      case 'project3':
        appendThis = " 🏆";
        break;
    }

    console.log("appendThis called! + " + project);
    $("#" + project).append(appendThis);
  };

  function removeEmoji(project) {
    var removedEmoji = $("#" + project).text(function(_,txt) {
      return txt.slice(0, -2);
    })

    console.log("new string" + removedEmoji);
  }

  function changeProjectTitle(project) {

    var projectTitle;
    var projectAttr;
    var projectImg;

    switch(project) {
      case 'project1':
        projectTitle = 'Internship – 10 Weeks';
        projectAttr = 'UX, XR, Consulting';
        projectImg = 'assets/hololens-project.png';
        console.log('project 1 selected');
        break;

      case 'project2':
        projectTitle = 'Independent Project – 12 Weeks';
        projectAttr = 'Design Research';
        projectImg = 'assets/persona-project.png';
        console.log('project 2 selected');
        break;

      case 'project3':
        projectTitle = 'Creative Jam – 48 Hours';
        projectAttr = 'Experience Design';
        projectImg = 'assets/creativejam-project.png';
        console.log('project 3 selected');
        break;
      case 'project4':
        projectTitle = 'Campaign – 2 Weeks';
        projectAttr = 'Branding Strategy';
        console.log('project 4 selected');
        break;
    }

    $('#project-title, #project-title-index').text(projectTitle);
    $('#project-attr, #project-attr-index').text(projectAttr);
    $('#nav-project-image').attr('src', projectImg);

  }

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
      $("#image-item-switch-2").click(function() {
        $("#image-item-0").attr("src", "https://sparmsdc-static.s3.amazonaws.com/uploads/2019/02/maxresdefault.jpg");
        console.log("switching to image 2");
      });

      // Add img Shawdow
      $( ".case-item img" ).hover(
        function() {
          $(this).addClass( "image-shadow" );
        }, function() {
          $(this).removeClass( "image-shadow" );
        });

      // Changing Case Titles
      // function cases(caseID, question, type, attr) {
      //   this.caseID = caseID;
      //   this.question = question;
      //   this.type = type;
      //   this.attr = attr;
      // }
      //
      // var caseItemsArray = [
      //   cases("caseZero", "How might we question?", "Independent Project |", "UX, Branding"),
      //   cases("caseOne", "I like we question?", "Internship |", "UX, Branding"),
      //   cases("caseTwo", "Question needs to be longer than below?!", "Coursework |", "UX, Branding"),
      //   cases("caseThree", "Meow the question?", "Work |", "UX, Branding"),
      //   cases("caseFour", "Monkey isn't a question?", "Freenlance |", "UX, Branding"),
      //   cases("caseFive", "Ah. The question?", "Unassigned |", "UX, Branding"),
      // ]

      //

      var caseZero = new Array("How might we question?", "Independent Project |", "UX, Branding");
      var caseOne = new Array("I like we question?", "Internship |", "UX, Branding");
      var caseTwo = new Array("Meow the question?", "Work |", "UX, Branding");
      var caseThree = new Array("Question needs to be longer than below?!", "Coursework |", "UX, Branding");
      var caseFour = new Array("Monkey isn't a question?", "Freenlance |", "UX, Branding");
      var caseFive = new Array("Ah. The question?", "Unassigned |", "UX, Branding");

      var caseItems = new Array(caseZero, caseOne, caseTwo, caseThree, caseFour, caseFive);
      var caseNum = null;

      function changeCaseTitles(caseNumber) {
          $(".case-title").removeClass("not-visible");
          $(".site-subtitle-type").removeClass("not-visible");
          $(".site-subtitle-attr").removeClass("not-visible");
          $(".case-title").text(caseItems[caseNumber][0]);
          $(".site-subtitle-type").text(caseItems[caseNumber][1]);
          $(".site-subtitle-attr").text(caseItems[caseNumber][2]);
          console.log("Case title 0")
      };

      function removeCaseTitles() {
        $(".case-title").addClass("not-visible");
        $(".site-subtitle-type").addClass("not-visible");
        $(".site-subtitle-attr").addClass("not-visible");
        console.log("default state")
      }

      $("#case-0").hover(function() {
        changeCaseTitles(0);
      }, function() {
        removeCaseTitles()
      });

      $("#case-1").hover(function() {
        changeCaseTitles(1);
      }, function() {
        removeCaseTitles()
      });

      $("#case-2").hover(function() {
        changeCaseTitles(2);
      }, function() {
        removeCaseTitles()
      });

      $("#case-3").hover(function() {
        changeCaseTitles(3);
      }, function() {
        removeCaseTitles()
      });

      $("#case-4").hover(function() {
        changeCaseTitles(4);
      }, function() {
        removeCaseTitles()
      });

      $("#case-5").hover(function() {
        changeCaseTitles(5);
      }, function() {
        removeCaseTitles()
      });


  });
