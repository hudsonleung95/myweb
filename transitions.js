var $animation_ele = $('.animat');
var $icon = $('#projs .icon');
var $projpic = $('#projs .pic');
var $window = $(window);

//nav bar, scroll effect
jQuery(document).ready(function ($) {

    $("nav a").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
    });
});

//track in view obj
function check_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_ele, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}

function clearClass() {
    var pic = document.getElementById('projpic');

    if (pic.classList.contains('icon1'))
        $projpic.removeClass('icon1');

    if (pic.classList.contains('icon2'))
        $projpic.removeClass('icon2');

    if (pic.classList.contains('icon3'))
        $projpic.removeClass('icon3');

    if (pic.classList.contains('icon4'))
        $projpic.removeClass('icon4');
}

function showPic(id) {
    clearClass();

    switch (id) {
        case 1:
            $projpic.addClass('icon1');
            break;
        case 2:
            $projpic.addClass('icon2');
            break;
        case 3:
            $projpic.addClass('icon3');
            break;
        case 4:
            $projpic.addClass('icon4');
            break;
    }

    

    
}

function moveIcon(id) {

    $projpic.fadeOut(1, showPic(id));

    $projpic.fadeIn();

    $projpic.addClass('selected');

}

$window.trigger('scroll');
$window.on('scroll resize', check_in_view);