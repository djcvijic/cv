function externalLinks() { for (var c = document.getElementsByTagName("a"), a = 0; a < c.length; a++) { var b = c[a]; b.getAttribute("href") && b.getAttribute("href") !== "javascript:;" && b.hostname !== location.hostname && (b.target = "_blank") } }; externalLinks();

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
        contactInformation.style.setProperty("opacity", 1);
        contactInformation.style.setProperty("pointer-events", "auto");
    };

    clickToReveal.addEventListener("click", reveal);
    window.addEventListener("beforeprint", reveal);
}

revealContactInformation();