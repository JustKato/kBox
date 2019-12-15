/**
 * @summary p5.js react equivalent, but has events, handlers, etc...
 */
class kRect extends kElement {
    constructor(x, y, w, h = w, tl = undefined, tr = undefined, br = undefined, bl = undefined) {
        super(x, y, w, h);
        this.tl = tl;   this.tr = tr;   this.br = br;   this.bl = bl;
    }

    /**
     * @summary This function runs the logic of the class and renders it if need-be
     */
    Update() {
        if ( !this.active ) return;
        super.Update();
        rect(this.transform.x, this.transform.y, this.transform.w, this.transform.h, this.tl, this.tr, this.br, this.bl);
    }

}