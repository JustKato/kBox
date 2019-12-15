/**
 * @summary     The element that all kClasses inherit, this will allow event listening, reacting, all the base functionality, etc...
 */
class kUiElement {
    event       = null;
    transform   = null;
    material    = null;
    
    active      = false
    
    /**
     * @param {float} x X Position
     * @param {float} y y Position
     * @param {float} w Width
     * @param {float} h Height
     */
    constructor(x, y, w, h) {
        this.transform = new kTransform(x, y, w, h);
        this.material  = new kMaterial();
    }
    
    /**
     * 
     * @param {boolean} active Activate or deactivate the element, undefined = toggle
     */
    toggleElement(active = undefined) {
        this.active = (active == undefined) ? !this.active : active;
    }

    /**
     * @summary This function runs the logic of the class and renders it if need-be
     */
    Update() {
        fill(color(this.material.fill));
        stroke(color(this.material.stroke));
        strokeWeight(this.material.weight);
    }

}