//JavaScript file

"use strict";

$(document).ready(function () {


    $(".js--nav-icon").click(function() {
        var nav = $(".js--main-nav");
        var icon = $(".js--nav-icon");
        nav.slideToggle(200);

        if (icon.hasClass("ion-navicon")) {
            icon.addClass("ion-close");
            icon.removeClass("ion-navicon");

        } else {
            icon.removeClass("ion-close");
            icon.addClass("ion-navicon");
        }
    });

});
