/**
 * @description     The class responsable with positioning in a 3D space
 */
 class kTransform {

    events = {};

    /**
     * @param {float} x xPos
     * @param {float} y yPos
     * @param {float} w Width
     * @param {float} h Height
     */
    constructor(x = 0, y = 0, w = 0, h = w) {
        this.x = x;this.y = y;
        this.w = w;this.h = h;

        this.rotation = 0;
        this.material = new kMaterial();
    }

    move(x = undefined, y = undefined) {
        this.x = x ? x: this.x;
        this.y = y ? y: this.y;
        // Catch any errors of the event
        try {
            if ( this.events['move'] !== undefined )
                this.events['move']();
        } catch (e) { 
            kManage.error(`kTransform: Movement event couldn't be executed!`);
        }
    }

    /**
     * @summary             Rotate the transform by an angle
     * @param {int} angle   Angle in degrees
     */
    rotate(angle) {
        kManage.warning("This function is currently disabled, a proper implementation will be made in the near-future");
        return false;
        rotate(angle);
        // Catch any errors of the event
        try {
            if ( this.events['rotate'] !== undefined )
                this.events['rotate']();
        } catch (e) {
            kManage.error(`kTransform: Movement event couldn't be executed!`);
        }
    }

}