function closest(el, selector) {
    while (el) {
        el = el.parentElement;
        if (el && el.matches(selector)) {
            return el;
        }
    }

    return null;
}

function externalLinks() {
    for (var links = document.getElementsByTagName("a"), i = 0; i < links.length; i++) {
        var link = links[i];
        if (link.getAttribute("href")
            && link.getAttribute("href") !== "javascript:;"
            && link.hostname !== location.hostname)
        { 
            link.target = "_blank";
        }
    }
}

externalLinks();

function backToTop() {
    var toTop = document.getElementById("to-top");

    var onScroll = function () {
        if (window.scrollY > 0) {
            toTop.style.setProperty("opacity", 1);
            toTop.style.setProperty("pointer-events", "auto");
        } else {
            toTop.style.setProperty("opacity", 0);
            toTop.style.setProperty("pointer-events", "none");
        }
    };

    window.addEventListener("scroll", onScroll);

    var scrollToTop = function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    };

    toTop.addEventListener("click", scrollToTop);
}

backToTop();

function revealContactInformation() {
    var clickToReveal = document.getElementById("click-to-reveal-contact-info");
    var emailAddressLink = document.getElementById("email-address-link");
    var emailAddressText = document.getElementById("email-address-text");
    var contactInformation = document.getElementById("contact-info");

    var reveal = function () {
        clickToReveal.style.setProperty("display", "none");
        emailAddressLink.setAttribute("href", "mailTo:" + "djordje.cvijic.etf" + "@" + "gmail.com");
        emailAddressText.innerText = "djordje.cvijic.etf" + "@" + "gmail.com";
        contactInformation.style.setProperty("max-height", "200px");
    };

    clickToReveal.addEventListener("click", reveal);
    window.addEventListener("beforeprint", reveal);
}

revealContactInformation();

function showMoreOrLess() {
    var showMore = function (e) {
        var clickToShowMore = e.target;
        var section = closest(clickToShowMore, ".section");
        var clickToShowLess = section.getElementsByClassName("click-to-show-less")[0];
        var infoShort = section.getElementsByClassName("info-short")[0];
        var infoLong = section.getElementsByClassName("info-long")[0];
        clickToShowMore.style.setProperty("display", "none");
        clickToShowLess.style.setProperty("display", "block");
        if (!!infoShort) infoShort.style.setProperty("max-height", "0");
        if (!!infoLong) infoLong.style.setProperty("max-height", "999px");
    };

    var showLess = function (e) {
        var clickToShowLess = e.target;
        var section = closest(clickToShowLess, ".section");
        var clickToShowMore = section.getElementsByClassName("click-to-show-more")[0];
        var infoShort = section.getElementsByClassName("info-short")[0];
        var infoLong = section.getElementsByClassName("info-long")[0];
        clickToShowLess.style.setProperty("display", "none");
        clickToShowMore.style.setProperty("display", "block");
        if (!!infoShort) infoShort.style.setProperty("max-height", "999px");
        if (!!infoLong) infoLong.style.setProperty("max-height", "0");
    };

    Array.from(document.getElementsByClassName("click-to-show-more")).forEach(el => {
        el.addEventListener("click", showMore);
    });
    Array.from(document.getElementsByClassName("click-to-show-less")).forEach(el => {
        el.addEventListener("click", showLess);
    });
}

showMoreOrLess();