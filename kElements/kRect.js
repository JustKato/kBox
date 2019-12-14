class kRect extends kElement {
    constructor(x, y, w, h = undefined, tl = undefined, tr = undefined, br = undefined, bl = undefined) {
        super(x, y, w, h);
        if ( h == undefined ) h = w;
        this.tl = tl;   this.tr = tr;   this.br = br;   this.bl = bl;
    }

    /**
     * @summary Draw the element, this has to be called in the draw() method of p5.js
     */
    Draw() {
        super.Draw();
        rect(this.x, this.y, this.w, this.h, this.tl, this.tr, this.br, this.bl);
    }

}