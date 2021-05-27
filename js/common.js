$(document).ready(function () {
    // +/-
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    // header scroll

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.header__content').addClass('scrolled-header');
        } else {
            $('.header__content').removeClass('scrolled-header');
        }
    });

    // show menu
    $('.burgermenu-icon').click(function () {
        $('.menurow').addClass('show');
    });

    $('.closemenu').click(function () {
        $('.menurow').removeClass('show');
    });

    // formstyler
    if ($('body *').is('select')) {
        $(function () {
            $('select').styler();
        });
    }

    // tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    // radio - delivery
    $('.dilivmethod__main input').change(function () {
        $('.dilivmethod__submain').removeClass('show');
        $(this).parent().next().addClass('show');
    });

    // 404 - parallax
    if ($('body *').is('#scene')) {
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene);
    }

     // 404 - parallax
     if ($('body *').is('#scene_reviews')) {
        var scene = document.getElementById('scene_reviews');
        var parallaxInstance = new Parallax(scene);
    }



});