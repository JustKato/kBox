/**
 * The main kBox events handler, required for handling of events
 */
class kEvents {

    /**
     * @summary Do not manually change this.
     */
    static kEventsList = [];
    
    target_transform = null;
    mouse_in = false;

    static EVENTS = {
        CLICK:      "click",
        CUR_ENTER:  "cursor_enter",
        CUR_EXIT:   "cursor_exit",
        HOLD_DOWN:  "hold_down" // Will be added in the near future
    };

    constructor() {
        this.events = [];
        kEvents.kEventsList.push(this);
    }

    /**
     * @summary         Remove an event by id
     * @param {string}  Which event to remove, check listEvents() for id
     * @returns         If succesfully removed the event
     */
    removeEventById(id) {
        for ( let i = 0; i < this.events.length; i++ ) {
            if ( this.events[i].id === id ) { 
                this.events.splice(i, 1);
                return true;
            }
        }
        return false;
    }
    
    /**
     * @summary         Remove an event by index
     * @param {int}     Which event to remove, check listEvents() for index
     * @returns         If succesfully removed the event
     */
    removeEventByIndex(index) {
        for ( let i = 0; i < this.events.length; i++ ) {
            if ( i === index ) { 
                this.events.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    /**
     * @summary         List all events by id
     * @returns         The event id
     */
    getEvents() {
        return this.events;
    }

    /**
     * @summary             Attach an event action to the object
     * @description         This function will attach an event TYPE to the object and run the ACTION, 
     *                      if the element isn't being drawn it won't react to events
     * 
     * @param {kEvents.EVENTS}     type    Will set the type of event, the default is click
     * @param {function}    action  the action to perform when the event is triggered
     */
    addEvent(type = kEvents.EVENTS.CLICK, action = () => {}) {
        let event = {
            id    : kGenerator.generateGUID(),
            type  : type,
            action: action
        };

        this.events.push(event);
        return event.id;
    }

    /**
     * @summary             Trigger all events of type
     * @param {kEvents.EVENTS} type Event types to trigger
     */
    triggerEvents(type = kEvents.EVENTS.CLICK, param) {
        this.events.forEach( event => {
            if ( event.type === type ) {
                event.action(param);
            }
        })
    }

    /**
     * @summary             Trigger an event by id
     * @param {*} id      
     * @param {*} params    
     */
    triggerEventByID(id, param) {
        this.events.forEach( event => {
            if ( event.id === id ) {
                event.action(param);
            }
        })
    }

    /**
     * Bind the transform of an element for event handling
     * @param {kTransform} transform The transform to bind to
     */
    bindEventHandler(transform) {
        this.target_transform = transform;
    }

    Update() {

        if ( !this.mouse_in ) {
            if ( kMouse.isMouseInTransform(this.target_transform)) {
                this.mouse_in = true;
                this.triggerEvents(kEvents.EVENTS.CUR_ENTER, {time: new Date(), pos: [mouseX, mouseY]});
            }
        }

        if ( this.mouse_in ) {
            if ( !kMouse.isMouseInTransform(this.target_transform)) {
                this.mouse_in = false;
                this.triggerEvents(kEvents.EVENTS.CUR_EXIT, {time: new Date(), pos: [mouseX, mouseY]});
            }
        }

    }

    // Handle mouse pressed events
    mousePressed(event) {
        if ( this.target_transform !== null ) {
            if ( kMouse.isMouseInTransform(this.target_transform) )
                this.triggerEvents(kEvents.EVENTS.CLICK, event);
        }
    }

}

function mousePressed(event) {
    kEvents.kEventsList.forEach(listener => {
        listener.mousePressed(event);
    })
}



















