(function ($) {
    "use strict";
    $(document).ready(function () {
        ssPreloader();
        navShow();
        hideHeader();
        textAreaCheck();
        label();
    });
    const label = ()=> {
        $('#academic_transcript').on('change', function() {
            var fileName = $(this).val().split('\\').pop();
            $('.display-acad-name').text(fileName);
        });
        $('#recommendation_letter').change(function() {
            var fileName = $(this).val().split('\\').pop();
            $('.display-rec-name').text(fileName);
        });
    }
    const ssPreloader = function () {
        $("html").addClass('ss-preload');
        $(window).on('load', function () {
            $("#loader").fadeOut("slow", function () {
                $("#preloader").delay(300).fadeOut("slow");
            });
            $("html").removeClass('ss-preload');
            $("html").addClass('ss-loaded');
        });
    };
    const navShow = function () {
        $('#checkbox').change(function() {
            if ($(this).is(':checked')) {
              $('.myHeader').addClass("show");
            } else {
              $('.myHeader').removeClass("show");
            }
        });
        // $('#checkbox').change(function() {
        //     $('.myHeader').toggleClass("show", $(this).is(':checked'));
        // });
    }
    const hideHeader = function () {
        let lastScrollTop = 0;
        $(window).on('scroll', function() {
            let currentScroll = $(this).scrollTop();
            if (currentScroll > lastScrollTop) {
                $('.myHeader').addClass('hide');
            } else {
                $('.myHeader').removeClass('hide');
            }
            lastScrollTop = currentScroll;
        });
    }
    const textAreaCheck = function (){
        const maxWords = 300;

    $('#lined-textarea').on('input', function () {
        const text = $(this).val();
        const words = text.trim().split(/\s+/);
        const wordCount = words.filter(word => word.length > 0).length;
        if (wordCount > maxWords) {
            const truncatedWords = words.slice(0, maxWords).join(' ');
            $(this).val(truncatedWords);
        }
        $('#word-count').text(`Words: ${Math.min(wordCount, maxWords)}/${maxWords}`);
    });
    }
})(jQuery);