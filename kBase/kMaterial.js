/**
 * @summary Manage per object materials
 */
class kMaterial {
    
    color   = [255, 255, 255, 255];
    stroke = [0, 0, 0, 255];
    
    weight = 0;

    constructor(new_stroke = undefined, new_fill = undefined) {
        this.stroke = new_stroke ? new_stroke : this.stroke;
        this.color  = new_fill   ? new_fill   : this.color;
    }

    /**
     * Set the color of the fill
     * @param {int} r Red
     * @param {int} g Green
     * @param {int} b Blue
     * @param {int} a Alpha
     */
    setColor(r, g, b, a = 255) {
        this.color = [r, g, b, a];
    }
    
    /**
     * Set the color of the Stroke
     * @param {int} r Red
     * @param {int} g Green
     * @param {int} b Blue
     * @param {int} a Alpha
     */
    setStroke(r, g, b, a = 255) {
        this.stroke = [r, g, b, a];
    }
    
    /**
     * Set the weight of the stroke
     * @param {int} weight The thickness
     */
    setStrokeWeight(weight) {
        this.weight = weight;
    }


}