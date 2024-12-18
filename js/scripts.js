$(function() {

    "use strict";

    $(document).on('click', 'a.go-to-id[href*="#"]:not([href="#"])', function(event) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top - 160)
            }, 1000);
            return false;
        }
        event.preventDefault();
    });



    $(window).resize(function() {
        var h1 = $(window).height();
        var h2 = $('.main-height-on-load').innerHeight();
        var h3 = $('.main-height-on-load-signup').innerHeight();
        if (h1 > h2) {
            if (h1 > 1378) {
                $('.main-height-on-load').css({
                    'min-height': '1378px'
                });
            } else {
                $('.main-height-on-load').css({
                    'min-height': h1 + 'px'
                });
            }
        }
        if (h1 > h3) {
            if (h1 > 1450) {
                $('.main-height-on-load-signup').css({
                    'min-height': '1450px'
                });
            } else {
                $('.main-height-on-load-signup').css({
                    'min-height': h1 + 'px'
                });
            }
        }
    });

    $(window).on('load', function() {
        var h1 = $(window).height();
        var h2 = $('.main-height-on-load').innerHeight();
        var h3 = $('.main-height-on-load-signup').innerHeight();

        if (h1 > h2) {
            if (h1 > 1378) {
                $('.main-height-on-load').css({
                    'min-height': '1378px'
                });
            } else {
                $('.main-height-on-load').css({
                    'min-height': h1 + 'px'
                });
            }
        }

        if (h1 > h3) {
            if (h1 > 1450) {
                $('.main-height-on-load-signup').css({
                    'min-height': '1450px'
                });
            } else {
                $('.main-height-on-load-signup').css({
                    'min-height': h1 + 'px'
                });
            }
        }


        var $preloader = $('#page-preloader'),
            $spinner = $preloader.find('.spinner');
        $spinner.delay(1500).fadeOut(500);
        $preloader.delay(1500).fadeOut(500);
    });


    $('#feel-the-wave').wavify({
        height: 80,
        bones: 14,
        amplitude: 60,
        color: '#55a5b4',
        speed: .15
    });


    $('#feel-the-wave-inset').wavify({
        height: 80,
        bones: 14,
        amplitude: 45,
        color: '#49b4ab',
        speed: .15
    });

    $('#feel-the-wave-two').wavify({
        height: 80,
        bones: 15,
        amplitude: 40,
        color: '#fafbff',
        speed: .25
    });


    $('#feel-the-wave-main2').wavify({
        height: 80,
        bones: 15,
        amplitude: 40,
        color: '#fff',
        speed: .25
    });

    $('#feel-the-wave-main3').wavify({
        height: 80,
        bones: 16,
        amplitude: 40,

        color: '#4da6ab',
        speed: .25
    });

    $('#feel-the-wave-main4').wavify({
        height: 80,
        bones: 14,
        amplitude: 30,
        color: '#5664b6',
        speed: .25
    });

    $('#feel-the-wave-main5').wavify({
        height: 80,
        bones: 16,
        amplitude: 40,
        position: 'vertical',
        color: '#4da6ab',
        speed: .25
    });

    $('#feel-the-wave-main6').wavify({
        height: 80,
        bones: 14,
        position: 'vertical',
        amplitude: 30,
        color: '#5664b6',
        speed: .25
    });


    $('.footer-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        arrows: true

    });






    function CharsStart() {
        $('.js-chart').easyPieChart({
            barColor: false,
            trackColor: false,
            scaleColor: false,
            scaleLength: false,
            lineCap: false,
            lineWidth: false,
            size: false,
            animate: 1500,

            onStep: function(from, to, percent) {
                $(this.el).find('.js-percent').text(Math.round(percent));
            }
        });
    }

    $(document).on('click', '.header__lang > a', function(event) {
        $(this).parent().find('ul').slideToggle(400);
        $(this).find('i').toggleClass('opened');
        $(this).parent().toggleClass('active');
        event.preventDefault();
    });

    $('.box-checkbox > label').change(function(event) {
        $(this).toggleClass('checked');
    });


    $(document).on('focus', '.table-form input, .table-form textarea', function(event) {
        $(this).addClass('focused');
        $(this).parent().find('span').addClass('focused');
        $(this).parent().find('label').addClass('focused');
    });

    $(document).on('focusout', '.table-form input, .table-form textarea', function(event) {
        if ($(this).val().length == 0) {
            $(this).removeClass('focused');
            $(this).parent().find('label').removeClass('focused');
            $(this).parent().find('span').removeClass('focused');
        } else {
            //$(this).parent().find('i').removeClass('focused');
        }
    });

    $('.table-form input, .table-form textarea').each(function(index, el) {
        if ($(el).val().length != 0) {
            $(el).addClass('focused');
            $(el).parent().find('label').addClass('focused');
            $(el).parent().find('span').addClass('focused');
        } else {
            $(el).removeClass('focused');
            $(el).parent().find('label').removeClass('focused');
            $(el).parent().find('span').removeClass('focused');
        }
    });







});