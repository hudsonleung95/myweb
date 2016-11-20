var $animation_ele = $('.animat');
var $icon = $('#projs .icon');
var $projpic = $('#projs .pic');
var $window = $(window);
var prev = '0';

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

function showPic(id) {

    if (prev != '0') {
        $projpic.removeClass(prev);
        $('#projs .'+prev).removeClass('selected');
    }

    prev = id;
    
    $projpic.addClass(id);
    $('#projs .' + id).addClass('selected');
 
}

function fOut(element) {
    var opacity = 1;
    function decrease() {
        opacity -= 0.05;
        if (opacity <= 0) {
            // complete
            element.style.opacity = 0;
            return true;
        }
        element.style.opacity = opacity;
        requestAnimationFrame(decrease);
    }
    decrease();
}

function fIn(element) {
    var opacity = 0;
    function increase() {
        opacity += 0.05;
        if (opacity >= 1) {
            // complete
            element.style.opacity = 1;
            return true;
        }
        element.style.opacity = opacity;
        requestAnimationFrame(increase);
    }
    increase();
}

function moveIcon(id) {

    fOut(document.getElementById('projpic'));

    showPic(id);
   
    fIn(document.getElementById('projpic'));

    $projpic.addClass('selected');

}

$window.trigger('scroll');
$window.on('scroll resize', check_in_view);