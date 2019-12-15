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



}