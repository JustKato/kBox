var INPUT_TYPE = {
    BUTTON: 'button',
    TEXT  : 'text',
    NUMBER: 'number',
    SLIDER: 'slider'
}

class kUi {

    events = new kEvents();

    constructor (x, y, w, h = w, tl = 0, tr = tl, br = tr, bl = br) {
        this.renderer     = new kRect(x, y, w, h, tl, tr, br, bl); // Create the renderer
        this.highlight    = new kMaterial();
        this.material     = this.renderer.material;
        this.transform    = this.renderer.transform; // Reference the transform
    }

    /**
     * Switch the interaction material
     * @param {kMaterial} highlight The material to switch to whenever the UI element is interacted with
     */
    setHighLightMaterial(highlight) {
        this.highlight = highlight;
    }
}

class kInput extends kUi {
    constructor (type, x, y, w, h = w, tl = 0, tr = tl, br = tr, bl = br) {
        super(x, y, w, h, tl, tr, br , bl);
        this.type = type;
        this.Initialize();
        this.events.bindEventHandler(this.transform);
    }

    Initialize() {
        this.events.addEvent(kEvents.EVENTS.CLICK, () => {
            this.renderer.material = this.highlight;
            setTimeout(() => { this.renderer.material = this.material; }, 100);
        });
        
        this.events.addEvent(kEvents.EVENTS.CUR_ENTER, () => {
            console.log("Cursor Entered");
        });

        this.events.addEvent(kEvents.EVENTS.CUR_EXIT, () => {
            console.log("Cursor Exited");
        });

    }

    Update() {
        this.events.Update();
        switch (this.type) {
            case INPUT_TYPE.BUTTON:
                
                break;
        
            case INPUT_TYPE.NUMBER:
                
                break;
        
            case INPUT_TYPE.SLIDER:
                
                break;
        
            case INPUT_TYPE.TEXT:
                
                break;
        }
        
        
        this.renderer.Update();
    }

}