(function ($) {
    "use strict";
    $(document).ready(function () {
        ssPreloader();
    });
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
})(jQuery);