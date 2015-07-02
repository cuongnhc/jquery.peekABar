$(function () {

    var faviconUrl = "http://kunalnagar.github.io/custom-404-pro/favicon.ico",
        css = "background-image: url('" + faviconUrl + "');" +
            "background-repeat: no-repeat;" +
            "display: block;" +
            "background-size: 13px 13px;" +
            "padding-left: 13px;" +
            "margin-left: 5px;",
        text = "So. You like to investigate. I get it. You're a nosey dude. And I like fixing things. Visit www.kunalnagar.in/contact ";
    if (navigator.userAgent.match(/chrome/i)) {
        console.log(text + '%c', css);
    } else {
        console.log('%c   ' + text, css);
    }

    var defaultBar = $.peekABar();
    $('.btn-default-show').click(function() {
       defaultBar.show();
    });
    $('.btn-default-hide').click(function() {
        defaultBar.hide();
    });

});