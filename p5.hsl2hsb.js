p5.prototype.hsl2hsb = function (hsl) {
    var h = hsl.h;
    var b = ((2*hsl.l) + (hsl.s * (1 - abs(2 * hsl.l - 1)))) / 2;
    var s = (2 * (b - hsl.l)) / b;
    return {
        h: h,
            s: s,
            b: b
    };
};

p5.prototype.hsl = function (hsl){
    var hsb = hsl2hsb(hsl);
    fill(hsb.h, hsb.s*100, hsb.b*100);
};
