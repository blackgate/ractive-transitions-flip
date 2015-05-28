var DEFAULTS = {
    duration: 400,
    easing: "easeInOut"
};

module.exports = function flip (t, params) {
    var target;

    params = t.processParams(params, DEFAULTS);

    if (t.isIntro) {
        target = t.getStyle("transform");
        t.setStyle("transform", "rotateY(-180deg)");
    } else {
        target = "rotateY(180deg)";
    }

    t.setStyle({
        backfaceVisibility: "hidden",
        WebKitBackfaceVisibility: "hidden"
    });

    t.animateStyle("transform", target, params).then(t.complete);
};
