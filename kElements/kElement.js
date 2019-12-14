/**
 * @summary     The element that all kClasses inherit, this will allow event listening, reacting, all the base functionality, etc...
 */
class kElement {
    event = null;

    constructor(x, y, w, h) {
        this.x = x;     this.y = y;     this.w = w;     this.h = h;
    }
    
    /**
     * @summary             Attach an event action to the object
     * @description         This function will attach an event TYPE to the object and run the ACTION, 
     *                      if the element isn't being drawn it won't react to events
     * 
     * @param {kEvents}     type    Will set the type of event, the default is click
     * @param {function}    action  the action to perform when the event is triggered
     */
    setEvent(type = kEvents.click, action = () => {}) {
        this.event.type     = type;
        this.event.action   = action;
    }

    Draw() {

    }

}