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

    setFill(r, g, b, a = 255) {
        this.fill = [r, g, b, a];
    }

    setStroke(r, g, b, a = 255) {
        this.fill = [r, g, b, a];
    }

    setStrokeWeight(weight) {
        this.weight;
    }


}