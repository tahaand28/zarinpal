// $(document).ready(function () {
//     setTimeout(function () {
//         $(".loding").fadeOut(500);
//     }, 1000);
// });

$(document).ready(function () {
    $(".menu").on('click', '.has-submenu', function (e) {
        e.stopPropagation();
        $(this).toggleClass('open');
        $(this).find('img').toggleClass('rotated');
    });

    $(".menu").on('click', '.has-submenu .submenu', function (e) {
        e.stopPropagation();
    });

    $(document).click(function () {
        $('.has-submenu.open').removeClass('open')
            .find('img').removeClass('rotated');
    });
});

$(document).ready(function () {
    $('.scrolling-content')
        .mouseover(function () {
            $(this).css('animation-play-state', 'paused');
        })
        .mouseout(function () {
            $(this).css('animation-play-state', 'running');
        });
});




function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
}



$(document).ready(function () {
    $(window).scroll(function () {
        $('.services-section,.nazarat,.content-acker,.mohandas,.dark-content,.tablechat').each(function () {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();

            // اگر المان در دید قرار گرفت
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                if (!$(this).hasClass('cssanimation')) {
                    $(this).addClass('cssanimation ca__fx-blurInFromBottom');
                }
            }
        });
    });
});



$(document).ready(function () {
    $('.accordion-header').click(function () {
        $(this).parent('.accordion-item').toggleClass('active');
    });
});