$(document).ready(function() {

    //nav animations
    setTimeout(function() {
        $('#social').css("animation", "fadeInFromRight 1s forwards");
        $('ul').css("animation","fadeInFromLeft 1s forwards")
    }, 1000);

    //art hover zoom
    $('#art img').hover(function(){
        $(this).attr("src", $(this).attr('alt-src'));
    }, function(){
        $(this).attr("src", $(this).attr('org-src'));
    })

    //art click Pop Up
    $('#art img').click(function(){
        var modalImg = document.getElementById('img01');
        var captionTxt = document.getElementById('caption');

        $('.modal').css("display", "block");
        modalImg.src = $(this).attr('full');

        captionTxt.innerHTML = $(this).attr('alt');
    })

    //close pop up
    $('.close').click(function() {
        $('.modal').css("display", "none");
    })

    $('.modal').click(function() {
        $('.modal').css("display", "none");
    })

    //form validation
    $('#valid').submit(function(){
        var name = $('#name').val();
        var email = $('#email').val();
        var msg = $('#message').val();

        if (name == false) {
            $('p.name').show();
            $('#name').addClass('invalid');
            return false;
        }
        else if (email == false) {
            $('p.name').hide();
            $('#name').removeClass('invalid');
            $('p.email').show();
            $('#email').addClass('invalid');
            return false;
        }
        else if (msg == false) {
            $('p.email').hide();
            $('email').removeClass('invalid');
            $('p.message').show();
            $('#message').addClass('invalid');
            return false;
        } else {
            $('p').hide();
        }
    })
})

var dtanim = bodymovin.loadAnimation({
    container: document.getElementById('dt-anim'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'data.json'
})