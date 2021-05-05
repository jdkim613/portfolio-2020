$(document).ready(function() {

  console.log('loaded action.js top');

  // Footer Email Signifier 
  var emailTL = new TimelineMax({paused: true});
  

  const myEmail = 'jdkim613@gmail.com';

  // change face
  $('#head').on('mouseover', function() {
    $('#email-copied').text('Click me...');
  }).on('mouseleave', function() {
    $('#head').attr('src', 'assets/face-0.png');
    $('#email-copied').text('Hover me...');
  })


  // email copy
  $('#head, #email-copy-link').on('click', function() {
    $('#head').attr('src', 'assets/face-1.png');
    emailTL.play();
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

  // animate email signifier and move it back down
  emailTL.to('.email-copied-signifier', 0.5, {top: '0%', ease: Power4.easeOut});
  TweenMax.to('.email-copied-signifier', 0.5, {top: '100%', ease: Power4.easeOut, delay: 1}, 2);

  console.log('email copied');
};

 // more project nav
  $('.interactive-menu-button a').click(function() {
    $(this).toggleClass('active');
    $('.more-projects-nav').toggleClass('slide-appear');
    $('.sliding-nav').toggleClass('no-event');
    $('body').toggleClass('fixed-position');

    var idFinder = false;

    if(!$('.navigation-items').hasClass('white-font') || !$('.navigation-items').hasClass('yes-change')) {
      $('.about-page h3').css('color', '#FFF');
      $('.navigation-items').toggleClass('white-font');
      $('#logo').attr('src', 'assets/logo-2020-2.png');
    } else {
      $('.about-page h3').css('color', '#333333');
      $('.navigation-items').toggleClass('white-font');
      $('#logo').attr('src', 'assets/logo.png');
    }

    console.log('this ' + this);
  });

 
  // Project Toggle
  $('.project-item, .project-content').on('mouseover', function() {

    $('#project-title, #project-attr').css('display', 'block'); // show the hidden block
    $('#project-title-index, #project-attr-index').css('display', 'block');
    var thisMouse = this.id; // assign id value
    changeProjectTitle(thisMouse); // change the title based on the value

    // appendEmoji(thisMouse);


    $('#nav-image-container').addClass('fade-in'); // make visible
    $('#nav-image-container').css('opacity', '1');

  }).on('mouseleave', function() {

    var thisMouse = this.id;
    $('#project-title, #project-attr').css('display', 'none');
    $('#project-title-index, #project-attr-index').css('display', 'none');

    // removeEmoji(thisMouse);

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

      // footer text variable 
      var variableStringArray = ['design, because it matters.', 'thrive under constraints.', 'work with real people.', 'make something unforgettable.', 'define moments that matter.'];
      var imageInt = 0;

      setInterval(function () {
        // imageHead.style.backgroundImage = "linear-gradient(to bottom, transparent 50%, black 100%),url(" + bgImage[imageInt] + ")"; // obsolete
        $('#footer-text-variable').text(variableStringArray[imageInt]);
    
        imageInt = imageInt + 1;
        if (imageInt == variableStringArray.length) {
          imageInt = 0;
        }
      }, 2000);


    // Random statement generator 
    var statementContainer = [
      { statement: 'Right thing in the right place for the right person for the right task at the right moment for the right price.',
        author: '– Bill Buxton',
        type: 'quote'
      },
      { statement: 'Know thy user, know thy are not the user.',
        author: '– Arnie Lund',
        type: 'quote'
      },
      { statement: '"You are making me rethink about my entire life in this project"',
        author: '– Peter Lin',
        type: 'Review'
      },
      { statement: 'Anyone can cook.',
        author: '– Auguste Gusteau, Ratatouille',
        type: 'quote'
      },
      { statement: 'Right thing in the right place for the right person for the right task at the right moment for the right price.',
        author: '– Bill Buxton',
        type: 'quote'
      }
      // { statement: '',
      //   author: '',
      //   type: ''
      // }
    ];

    var randNumb = Math.floor(Math.random() * statementContainer.length);

    function addRandStatement(chosenIndex) {
      if(chosenIndex > 10) {
        $('#preload-statement-number').text('#' + (chosenIndex + 1));
      } else {
        $('#preload-statement-number').text('#0' + (chosenIndex + 1));
      }

      $('#preload-statement-type').text(statementContainer[chosenIndex].type);
      $('#preload-statement').text(statementContainer[chosenIndex].statement);
      $('#preload-statement-author').text(statementContainer[chosenIndex].author);
    };

    addRandStatement(randNumb);

  });

  // Test function
  function thisTestFunc() {
    console.log("this test works!");
  }

  // Preload Functions
  var transitionTL = gsap.timeline();
  let progress = $('#preload-bar');

  var imageIndex = 0;
  var appendIndex = '#test-img-container-' + imageIndex;

  var queue = new createjs.LoadQueue(false);

  queue.on('progress', event => {

    let progress = Math.floor(event.progress * 100);
    var progressGage = (progress * 0.7);
    TweenMax.to($('#preload-bar'), { duration: 1, width: progressGage + 'vw', ease: 'circ.out' }, 1)


    if (progress == 100) {
      console.log('all done');
    }

  })

  queue.on('complete', event => {
    transitionTL.to($('#preload-case-wrapper > *'), { duration: 0.75, position: 'absolute', right: '100vw' }, 2)
    .to($('#preload-case-wrapper'), { duration: 0.75, width: 0, ease: 'circ.out' }, 2.5);
  })

  console.log('loaded action.js');
  queue.on('fileload', handleFileComplete);

  function handleFileComplete(event) {

    var item = event.item;
    var type = item.type;

    if (type == createjs.Types.IMAGE) {
      // prepend the preloaded image into the selected element -> selector is stored in individual js files
      $(imageIDArray[imageArrayIndex].findID).prepend(event.result);

      if(!imageIDArray[imageArrayIndex].assignClass == '') {
        $(imageIDArray[imageArrayIndex].findID + '> img').attr('class', imageIDArray[imageArrayIndex].assignClass)
      }

      if(!imageIDArray[imageArrayIndex].assignID == '') {
        $(imageIDArray[imageArrayIndex].findID + '> img').attr('id', imageIDArray[imageArrayIndex].assignID)
      }
      
      // ++imageIndex;
      // appendIndex = '#test-img-container-' + imageIndex;
      ++imageArrayIndex;
    }
  }
