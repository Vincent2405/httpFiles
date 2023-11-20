document.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var parallaxElements = document.getElementsByClassName("parallax");
    for (var i = 0; i < parallaxElements.length; i++) {
        var element = parallaxElements[i];
        element.style.backgroundPositionY = (scrollTop * -0.5) + "px";
    }
});