function enableForwardSeek() {
    var elems = document.querySelectorAll(".disable-forward-seek");
    [].forEach.call(elems, function (el) {
        console.debug('Enabling forward seek for div', el);
        el.className = el.className.replace(/\bdisable-forward-seek\b/, "");
    });
}

setInterval(enableForwardSeek, 3000);
setInterval(enableForwardSeek, 6000);
setInterval(enableForwardSeek, 12000);
setInterval(enableForwardSeek, 15000);
setInterval(enableForwardSeek, 18000);
