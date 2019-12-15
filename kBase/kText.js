class kTextMaterial extends kMaterial {
    constructor(new_color = undefined, new_stroke = undefined) {
        super(new_color, new_stroke);
    }
}

class kText {

    align   = [LEFT, TOP];
    font    = 'Georgia';

    constructor(txt = "", size = 1, x = 0, y = 0) {
        this.txt    = txt;
        this.size   = size;
        this.x = x; this.y = y;
    }

    setAlign(h, v = h) {
        this.align[0] = h; this.align[1] = v;
    }

    setFont(font) {
        this.font = font;
    }

    Update() {
        textSize(this.size);
        textAlign(this.align[0], this.align[1]);
        textFont(this.font);

        text(this.txt, this.x, this.y);
    }

}