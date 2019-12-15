/**
 * @summary kMouseController, handles the mouse events and nicely translates them
 */
class kMouse {

    /**
     * @returns an Array [mouseX, mouseY]
     */
    static getMousePosition() {
        return [mouseX, mouseY];
    }

    /**
     * @summary         Checks if the mouse is in the defined transform
     * @param {float} x X Position
     * @param {float} y Y Position
     * @param {float} w Width
     * @param {float} h [Optional] Height
     * @returns         if the mouse is in the transform or not
     */
    static isMouseInArea(x, y, w, h = w) {
        if ( mouseX >= x && mouseX <= x + w )
            if ( mouseY >= y && mouseY <= y + h )
            return true;
        return false;
    }
    
    /**
     * @summary             Check if the mouse is in the transform
     * @param {ktransform} transform  The transform to check for
     * @returns             if the mouse is in the transform or not
     */
    static isMouseInTransform(transform) {
        return kMouse.isMouseInArea(transform.x, transform.y, transform.w, transform.h);
    }

}