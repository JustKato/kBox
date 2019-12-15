/**
 * The main kBox events handler, required for handling of events
 */
class kEvents {
    static EVENTS = {
        CLICK:  "click",
        RCLICK: "right_click",
        HOVER:  "hover",
        PRESS:  "press"
    };

    constructor() {
        this.events = [];
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
    setEvent(type = kEvents.EVENTS.CLICK, action = () => {}) {

        let action_params = action.toString().match(/\(([^;]*)\)/g)[0].replace(/\(/g, '').replace(/\)/g, '').replace(/ /g, '').split(',');
        if ( action_params.length > 1 )
            kManage.error("Please deliver the parameters of the action as an array or object and handle them inside of the function");


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
    triggerEvents(type = kEvents.EVENTS.CLICK, params = []) {
        this.events.forEach( event => {
            if ( event.type === type ) {
                event.action(params);
            }
        })
    }

    /**
     * @summary             Trigger an event by id
     * @param {*} id      
     * @param {*} params    
     */
    triggerEventByID(id, params = []) {
        this.events.forEach( event => {
            if ( event.id === id ) {
                event.action(params);
            }
        })
    }

}