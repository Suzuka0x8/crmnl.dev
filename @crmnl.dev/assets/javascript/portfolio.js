/*

by Cranki and Kxzz

*/

"use strict";

(function () {
    var timeouts = [];

    window.mobileAndTabletcheck = function() {
        var check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    };

    $(document).ready(function () {
        var links = [
            {
                name: 'We are currently in the process of completely remaking our website, cheat and loader in order to release in old freshness for RAGEMP, ALTV and FIVEM!',
                link: 'DAYmDBeVKR'
            },
        ];

        for (var i in links) {
            var link = links[i];

            $('#marquee').append('<a href="https://discord.gg/' + link.link + '" target="_BLANK">' + link.name + '</a>');

            link = $('#marquee').children('a').last();

                        if (i != links.length - 1)
                $('#marquee').append('  ');

        }

        if (window.mobileAndTabletcheck()) {
            $("#background").replaceWith('<div id="background" style="background-image: url(https://crmnl.pw/ss/wvve.png);"></div>');

            app.shouldIgnoreVideo = true;
        }

        app.titleChanger();
        app.iconChanger([
            "assets/others/rose1.jpg",
            "assets/others/rose2.jpg",
            "assets/others/rose3.jpg",
            "assets/others/rose4.jpg",
            "assets/others/rose5.jpg",
            "assets/others/rose6.jpg",
            "assets/others/rose7.jpg",
            "assets/others/rose8.jpg",
            "assets/others/rose1.jpg",
        ]);
        skipIntro();
    });

    if ($.cookie('videoTime')) {
        app.videoElement.currentTime = $.cookie('videoTime');
        app.audioElement.currentTime = $.cookie('videoTime');
    }

    document.addEventListener('contextmenu', function (event) {
        event.preventDefault()
    });

    $(window).on('keydown', function () {
        if (event.keyCode == 123)
            return false;
        else if (event.ctrlKey && event.shiftKey && event.keyCode == 73)
            return false;
        else if (event.ctrlKey && event.KeyCode == 73)
            return false;
        else if (event.ctrlKey && event.shiftKey && event.KeyCode == 74)
            return false;
        else if (event.ctrlKey && event.keyCode == 74)
            return false;
    });

    document.body.onkeyup = function (e) {
        if (e.keyCode == 32 && app.skippedIntro)
        {
            if (app.backgroundToggler)
            {
                app.videoElement.play();
                app.audioElement.play();
            }
            else
            {
                app.videoElement.pause();
                app.audioElement.pause();
            }

            return app.backgroundToggler = !app.backgroundToggler;
        }
    }

    $('html').on('contextmenu', function (event) {
        var img = document.createElement("img");
        img.src = "assets/others/logo_default.png";
        img.width = 100;
        img.height = 100;
        img.alt = "crmnl.pw";
        img.style = "position: absolute; left: " + event.pageX + "px; top: " + event.pageY + "px; z-index: 10";
        img.className = "troll" + ( (app.skippedIntro) ? "" : " trollface-light" );

        document.body.appendChild(img);
    });

    setInterval( function () {
        $(".troll").remove();
    }, 600);


    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function ()
            {
                $(this).removeClass('animated ' + animationName);
            });
            return this;
        }
    });


    var skipIntro = function () {

        if (app.skippedIntro)
            return;

        app.skippedIntro = true;

        timeouts.forEach(function (timeout) {
            clearTimeout(timeout);
        });


        $('#main').fadeOut(100, function () {

            $("#main").remove();

            $('#marquee').marquee({
                duration: 15000,
                gap: 420,
                delayBeforeStart: 1000,
                direction: 'left',
                duplicated: true
            });

            setTimeout(function () {
                $('.brand-header').animateCss(app.effects[ Math.floor(Math.random() * app.effects.length) ]);
            }, 200);

            setTimeout(function () {
                var typed = new Typed("#brand",
                {
                    strings: app.brandDescription,
                    typeSpeed: 40,
                    onComplete: function() {
                        clearCursor()
                    }
                });
            }, 1350);

            setTimeout(function () {
                if (!app.shouldIgnoreVideo) {
                    app.videoElement.play();
                    app.audioElement.play();
                }

                app.videoElement.addEventListener("timeupdate", function () {
                    $.cookie('videoTime', app.videoElement.currentTime, { expires: 1 });
                }, false);

                $('.marquee-container').css('visibility', 'visible').hide().fadeIn(100);

                $('.marquee-container').animateCss('zoomIn');

                $('.container').fadeIn();

                $('.background').fadeIn(200, function () {
                    if (!app.shouldIgnoreVideo)
                        $("audio").animate({volume: app.musicVolume}, app.musicFadeIn);
                });
            }, 100);
        });
    };

    var clearCursor = function () {
        return $("span").siblings(".typed-cursor").css("opacity", "0");
    }
})()