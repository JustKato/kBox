/**
 * @summary The main kBox debugging and managing library, usefull for management
 */
 class kManage {
    static logs = [];
    static base_style = "background: #222; padding: 2px 5px;font-size: 0.8rem;";

    static log(msg) {
        let style = kManage.base_style + "color: #bada55;";
        console.log(`%ckLog: ${msg}!`, style);
        
        kManage.logs.push({type: 'log', msg: `kLog: ${msg}`});
    }

    static error(msg) {
        let style = kManage.base_style +  "color: #ff5d5d; border: 1px solid #ff000077;";
        console.log(`%ckError: ${msg}`, style);
        kManage.logs.push({type: 'error', msg: `kError: ${msg}`});
    }

    static warning(msg) {
        let style = kManage.base_style +  "color: yellow; border: 1px solid yellow;";
        console.log(`%ckWarning: ${msg}!`, style);
        kManage.logs.push({type: 'warning', msg: `kWarning: ${msg}`});
    }

}