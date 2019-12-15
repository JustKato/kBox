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
     * @summary         Checks if the mouse is in the defined area
     * @param {float} x X Position
     * @param {float} y Y Position
     * @param {float} w Width
     * @param {float} h [Optional] Height
     * @returns         if the mouse is in the area or not
     */
    static isMouseInArea(x, y, w, h = w) {
        if ( mouseX >= x - w/2 && mouseX <= x + w/2 )
            if ( mouseY >= y - h/2 && mouseY <= y + h/2 )
            return true;
        return false;
    }
    
    /**
     * @summary             Check if the mouse is in the area
     * @param {kArea} area  The area to check for
     * @returns             if the mouse is in the area or not
     */
    static isMouseInArea(area) {
        return isMouseInArea(area.x, area.y, area.w, area.h);
    }

}