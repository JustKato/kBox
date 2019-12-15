/**
 * @summary Manage per object materials
 */
class kMaterial {
    
    stroke = [0, 0, 0, 255];
    weight = 0;

    fill   = [255, 255, 255, 255];

    constructor(new_stroke = undefined, new_fill = undefined) {
        this.stroke = new_stroke ? new_stroke : this.stroke;
        this.fill   = new_fill   ? new_fill   : this.fill;
    }

    /**
     * Set the color of the fill
     * @param {int} r Red
     * @param {int} g Green
     * @param {int} b Blue
     * @param {int} a Alpha
     */
    setFill(r, g, b, a = 255) {
        this.fill = [r, g, b, a];
    }
    
    /**
     * Set the color of the Stroke
     * @param {int} r Red
     * @param {int} g Green
     * @param {int} b Blue
     * @param {int} a Alpha
     */
    setStroke(r, g, b, a = 255) {
        this.fill = [r, g, b, a];
    }
    
    /**
     * Set the weight of the stroke
     * @param {int} weight The thickness
     */
    setStrokeWeight(weight) {
        this.weight = weight;
    }


}