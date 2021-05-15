$(document).ready(function() {

  // Preload images using Preload.js
  queue.loadFile({id:'persona-image-0', src:'assets/persona/persona-card-slide-0.gif'})
  queue.loadFile({id:'persona-image-1', src:'assets/persona/students.jpg'})
  queue.loadFile({id:'persona-image-2', src:'assets/persona/module-design.png'});
  queue.loadFile({id:'persona-image-3', src:'assets/persona/card-anatomy.png'});
  queue.loadFile({id:'persona-image-4', src:'assets/persona/never-stop.png'});

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

      // Changing Research card
      $("#image-item-switch-research-groups").click(function() {
        changeResearchContent(0);
        $("#image-item-pc-research").attr("src", "assets/persona/research-protopersona.png");
        console.log("switching to research group");
      });
      $("#image-item-switch-research-interviews").click(function() {
        changeResearchContent(1);
        $("#image-item-pc-research").attr("src", "assets/persona/zoom-interviews.png");
        console.log("switching to zoom interview");
      });
      $("#image-item-switch-research-coding").click(function() {
        changeResearchContent(2);
        $("#image-item-pc-research").attr("src", "assets/persona/coding-data.png");
        console.log("switching to zoom interview");
      });
      $("#image-item-switch-research-highlights").click(function() {
        changeResearchContent(3);
        $("#image-item-pc-research").attr("src", "assets/persona/highlighting-key-data.png");
        console.log("switching to zoom interview");
      });
      $("#image-item-switch-research-insights").click(function() {
        changeResearchContent(4);
        $("#image-item-pc-research").attr("src", "assets/persona/insight-forming.png");
        console.log("switching to zoom interview");
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

      // Changing Event card
      $("#image-item-switch-eventfront").click(function() {
        $("#image-item-pc-4").attr("src", "assets/persona/event-front.png");
        console.log("switching to image persona front");
      });
      $("#image-item-switch-eventback").click(function() {
        $("#image-item-pc-4").attr("src", "assets/persona/event-back.png");
        console.log("switching to image persona back");
      });

      // Changing Activity card
      $("#image-item-switch-activityfront").click(function() {
        $("#image-item-pc-5").attr("src", "assets/persona/activity-front.png");
        console.log("switching to image persona front");
      });
      $("#image-item-switch-activityback").click(function() {
        $("#image-item-pc-5").attr("src", "assets/persona/activity-back.png");
        console.log("switching to image persona back");
      });


      function changeResearchContent(item) {

        var researchHeader;
        var researchBody;

        switch(item) {
          case 0:
            researchHeader = 'Creating proto personas';
            researchBody = 'I reached out to the stakeholders on campus that work closely with students and we began brainstorming various personas. This quick exercise helped me narrowed down target personas whom I got to interview and gave me a roadmap for the future of this project.';
            console.log('project 1 selected');
            break;

          case 1:
            researchHeader = 'Conducting Zoom interviews';
            researchBody = 'Like everything else during the pandemic, Zoom became an important tool for interviewing students. The interviews were around 45 minutes long and the goal was to hear honest stories about the student experience. Opening up with a warm introduction helped the interviewees loosen up as we talked through screens. ';
            console.log('project 2 selected');
            break;

          case 2:
            researchHeader = 'Transcribing– then coding responses';
            researchBody = 'I combed through the transcriptions to edit any minor grammatical errors or to remove filler words that interfered with the overall message. Honoring the original intent of the responses while trying to clarify was one of the most difficult parts of the research process. It took around 6 minutes of editing and coding for every minute of the interview.';
            console.log('project 3 selected');
            break;
          case 3:
            researchHeader = 'Highlighting key datapoints';
            researchBody = 'After coding through the transcript, I began highlighting any substantial information for synthesis. I modified the conventional coding system to fit the narrative-styled responses. I ended up creating 11 tag categories to organize insight-rich responses.';
            console.log('project 4 selected');
            break;
          case 4:
            researchHeader = 'Formulating insights';
            researchBody = 'Using the UserBit platform was most critical at this point in the project because it allowed me to mix and match different highlights of the interviews to formulate insights. These insights directly defined the personas and the archetypes. Some personas were even created based on a critical insight found in this process.';
            console.log('project 4 selected');
            break;
        }

        $('#research-item-header').text(researchHeader);
        $('#research-item-body').text(researchBody);
      }
});

var imageArrayIndex = 0;
var imageIDArray = [
    {findID:'#image-container-hero', assignID: 'image-item-pc-header', assignClass: 'title-image'},
    {findID:'#image-container-pc-0', assignID: 'image-item-pc-0', assignClass: 'border-round image shadow'},
    {findID:'#image-container-pc-02', assignID: 'image-item-pc-02', assignClass: 'border-round image-shadow'},
    {findID:'#image-container-pc-04', assignID: 'image-item-pc-04', assignClass: 'border-round image-shadow'},
    {findID:'#image-container-pc-05', assignID: '#image-item-pc-05', assignClass: 'border-round image-shadow'},

];
