var INPUT_TYPE = {
    BUTTON: 'button',
    TEXT  : 'text',
    NUMBER: 'number',
    SLIDER: 'slider'
}

class kUi {

    events      = new kEvents();
    active      = true;

    constructor (x, y, w, h = w, tl = 0, tr = tl, br = tr, bl = br) {
        this.renderer     = new kRect(x, y, w, h, tl, tr, br, bl); // Create the renderer
        this.highlight    = new kMaterial();
        this.material     = this.renderer.material;
        this.transform    = this.renderer.transform; // Reference the transform
    }

    /**
     * 
     * @param {boolean} active Activate or deactivate the element, undefined = toggle
     */
    toggleElement(active = undefined) {
        this.active = (active == undefined) ? !this.active : active;
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

    }

    Update() {
        if ( !this.active ) return;
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
        
        this.events.Update();
        this.renderer.Update();
    }

}