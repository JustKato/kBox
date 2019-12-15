var INPUT_TYPE = {
    BUTTON: 'button',
    TEXT  : 'text',
    NUMBER: 'number',
    SLIDER: 'slider'
}

class kUi {
    constructor (x, y, w, h = w, tl = 0, tr = tl, br = tr, bl = br) {
        this.renderer     = new kRect(x, y, w, h, tl, tr, br, bl); // Create the renderer
        this.transform    = this.renderer.transform; // Reference the transform
    }
}

class kInput extends kUi {
    constructor (type, x, y, w, h = w, tl = 0, tr = tl, br = tr, bl = br) {
        super(x, y, w, h, tl, tr, br , bl);
        this.type = type;
    }

    Update() {
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