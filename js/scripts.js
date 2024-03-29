$(function() {
    "use strict";
    var a = $(window).width(),
        e = ($(window).height(), $(".container")),
        n = $(".card-inner"),
        s = e.data("animation-in"),
        i = e.data("animation-out");
    $(".top-menu").on("click", "a", function() {
        var a = $(window).width(),
            t = $(this).attr("href"),
            l = parseFloat($(t).offset().top),
            o = $(t),
            r = $(".top-menu li"),
            p = $(this).closest("li");
        $(".lnks .lnk.discover");
        return a >= 1024 && !p.hasClass("active") & a > 1023 & $("#home-card").length && (r.removeClass("active"), e.find(n).removeClass("animated " + s), $(e).hasClass("opened") && e.find(n).addClass("animated " + i), p.addClass("active"), e.addClass("opened"), e.find(o).removeClass("animated " + i), e.find(o).addClass("animated " + s), $(n).addClass("hidden"), $(o).removeClass("hidden"), $(o).addClass("active")), a < 1024 & $("#home-card").length && $("body,html").animate({
            scrollTop: l - 76
        }, 800), !1
    }), $(window).on("resize", function() {
        var a = $(window).width();
        $(window).height();
        a < 1024 ? ($(".card-inner").removeClass("hidden"), $(".card-inner").removeClass("fadeOutLeft"), $(".card-inner").removeClass("rotateOutUpLeft"), $(".card-inner").removeClass("rollOut"), $(".card-inner").removeClass("jackOutTheBox"), $(".card-inner").removeClass("fadeOut"), $(".card-inner").removeClass("fadeOutUp"), $(".card-inner").removeClass("animated"), $(window).on("scroll", function() {
            var a = $(window).scrollTop();
            $(".top-menu ul li a").each(function() {
                var e = $(this);
                if($(e.attr("href")).length){
                    $(e.attr("href")).offset().top - 76 <= a && ($(".top-menu ul li").removeClass("active"), e.closest("li").addClass("active"))
                }
               
            })
        }), $(".card-inner .card-wrap").slimScroll({
            destroy: !0
        }), $(".card-inner .card-wrap").attr("style", "")) : ($($(".top-menu li.active a").attr("href")).addClass("active"), !$(".page").hasClass("new-skin") && a > 1024 && $(".card-inner .card-wrap").slimScroll({
            height: "570px"
        }))
    }), a < 1024 & $("#home-card").length && $(window).on("scroll", function() {
        var a = $(window).scrollTop();
        $(".top-menu ul li a").each(function() {
            var e = $(this);
            if($(e.attr("href")).length){
                $(e.attr("href")).offset().top - 76 <= a && ($(".top-menu ul li").removeClass("active"), e.closest("li").addClass("active"))
            }
            
        })
    }), !$(".page").hasClass("new-skin") && a > 1024 && $(".card-inner .card-wrap").slimScroll({
        height: "570px"
    }), $(".lnks").on("click", ".lnk.discover", function() {
        $('.top-menu a[href="#contacts-card"]').trigger("click")
    });
    var t = $(".grid-items");
    t.imagesLoaded(function() {
        t.isotope({
            percentPosition: !0,
            itemSelector: ".grid-item"
        })
    }), $(".filter-button-group").on("click", ".f_btn", function() {
        var a = $(this).find("input").val();
        t.isotope({
            filter: "." + a
        }), $(".filter-button-group .f_btn").removeClass("active"), $(this).addClass("active")
    }), /\.(?:jpg|jpeg|gif|png)$/i.test($(".gallery-item:first a").attr("href")) && $(".gallery-item a").magnificPopup({
        gallery: {
            enabled: !0
        },
        type: "image",
        closeBtnInside: !1,
        mainClass: "mfp-fade"
    }), $(".has-popup-media").magnificPopup({
        type: "inline",
        overflowY: "auto",
        closeBtnInside: !0,
        mainClass: "mfp-fade popup-box-inline"
    }), $(".has-popup-image").magnificPopup({
        type: "image",
        closeOnContentClick: !0,
        mainClass: "mfp-fade",
        image: {
            verticalFit: !0
        }
    }), $(".has-popup-video").magnificPopup({
        disableOn: 700,
        type: "iframe",
        iframe: {
            patterns: {
                youtube_short: {
                    index: "youtu.be/",
                    id: "youtu.be/",
                    src: "https://www.youtube.com/embed/%id%?autoplay=1"
                }
            }
        },
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1,
        mainClass: "mfp-fade",
        callbacks: {
            markupParse: function(a, e, n) {
                a.find("iframe").attr("allow", "autoplay")
            }
        }
    }), $(".has-popup-music").magnificPopup({
        disableOn: 700,
        type: "iframe",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1,
        mainClass: "mfp-fade"
    }), $(".has-popup-gallery").on("click", function() {
        var a = $(this).attr("href");
        return $(a).magnificPopup({
            delegate: "a",
            type: "image",
            closeOnContentClick: !1,
            mainClass: "mfp-fade",
            removalDelay: 160,
            fixedContentPos: !1,
            gallery: {
                enabled: !0
            }
        }).magnificPopup("open"), !1
    }), $(window).on("resize", function() {
        var a = $(".skills-list.dotted .progress"),
            e = a.width();
        a.length && a.find(".percentage .da").css({
            width: e + 1
        });
        var n = $(".revs-carousel .owl-carousel");
        n.find(".revs-item").css({
            "max-width": n.width()
        })
    }), setTimeout(function() {
        var a = $(".skills-list.dotted .progress"),
            e = a.width();
        a.length && (a.append('<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'), a.find(".percentage").append('<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'), a.find(".percentage .da").css({
            width: e
        }))
    }, 1e3);
    var l = $(".skills-list.circles .progress");
    l.length && l.append('<div class="slice"><div class="bar"></div><div class="fill"></div></div>'), $(".content .title").each(function(a) {
        var e = $(this).text().split(" ");
        if (e.length > 1) {
            var n = e[0],
                s = '<span class="first-word">' + n + "</span>",
                i = $(this).html().replace(n, s);
            $(this).html(i)
        } else $(this).html('<div class="first-letter">' + $(this).html() + "</div>")
    })
});