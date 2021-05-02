$(document).ready(function() {

    // uncomment this function for production
    // document.addEventListener('contextmenu', event => event.preventDefault());

    // change the header text to white
    $('.navigation-item h3').css('color', '#FFF');
    $('.body-content').css('overflow', 'hidden');

    // animate the preview image
    TweenMax.from($('#preview-case-image'), {duration: 1.5, margin: '15vh 0', opacity: 0, ease: 'circ.out'});

    const thePassword = 'password';

    // set the width of password input box
    var setInputWidth = $('#password-statement').width();
    $('#password-input-area').css('width', setInputWidth);
    $('#submit-button-container').css('left', setInputWidth);

    // microinteraction for lock botton
    $('#locked-page-icon').on('mouseover', function() {
        rotateLock();
    })

    function rotateLock() {
        TweenMax.to($('#locked-page-icon'), {duration: 0.75, rotation: -360, ease: 'circ.out'});
        TweenMax.to($('#locked-page-icon'), {duration: 0, rotation: 360, ease: 'circ.out'});

        console.log('mouse over lock');
    }


    // detect key change
    $('#password-input-area').keyup(function() {
        detectPasswordInput();
    })

    function detectPasswordInput() {

        // show submit button
        if ($('#password-input-area').val().length > 0) {
            TweenMax.to($('#submit-password'), {duration: 0.25, top: 0, ease: 'circ.out'});
            console.log($('#password-input-area').val());
        } else {
            TweenMax.to($('#submit-password'), {duration: 0.25, top: 30, ease: 'circ.out'});
        }
    }

    // detect when enter is pressed
    $('#password-input-area').keypress(function(event){
        passwordEnter(event);  
    })

    function passwordEnter(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        var inputID = $('#password-input-area');
        var userPWInput = inputID.val();
        var shakeTL = gsap.timeline();

        var correctPWTL = gsap.timeline();
        var hideOverlayTL = gsap.timeline();

        if(keycode == '13') {

            if(userPWInput == thePassword) {

                // animate unlock
                correctPWTL.to($('#locked-page-icon'), {duration: 0.5, rotation: +360, ease: 'circ.out'})
                .to($('#locked-page-icon'), {duration: 0, attr:{src:'assets/icons/password-icon-unlocked.svg'}}, -0.25);

                // hide overlay
                hideOverlayTL.to($('#submit-password'), {top: 0, left: 10, opacity: 0, ease: 'circ.out'})
                .to($('#password-protection-overlay'), {duration: 1, opacity: 0})
                .to($('#password-protection-overlay'), {duration: 0, display: 'none'})
                .to($('#logo'), {duration: 0.25, attr:{src:'assets/logo.png'}}, -0.25);

                // change the menu colors
                TweenMax.to($('.navigation-item h3'), {duration: 0.5, color: '#333333'});
                $('#hamburger-menu').attr('id', 'hamburger-menu-1');
                $('.body-content').css('overflow', 'scroll');

                // console.log('password is correct');

            } else {

                // indicate wrong password
                $('#password-input-area').val('');
                $('#password-input-area').attr('placeholder', 'Wrong password 😣');
                shakeTL.to(inputID, 0.075, {x: "+=10", yoyo: true, repeat: 5})
                .to(inputID, 0, {x: '0'});
                rotateLock();
                console.log('password is incorrect');
            }

        }

    }

});
