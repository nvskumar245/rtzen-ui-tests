import appRoot from 'app-root-path'
var downloadPath = appRoot + "/downloads"

class CommonUtils {

    public static globalMap: Map<string,string> = new Map();

    async setVariable(key:string,value:string) {
        CommonUtils.globalMap.set(key,value);
    }

    async getVariable(key:string) {
        return CommonUtils.globalMap.get(key);
    }

    async isFileDownloaded(fileTypeOrName:string) {
        let isFileDownloaded:boolean;
        await browser.pause(5000);
        const fs = require('fs');
        await fs.readdirSync(downloadPath).forEach(file => {
            console.log("File => "+file)
            if(file.includes(fileTypeOrName)) {
                isFileDownloaded = true;
            }else {
                isFileDownloaded = false;
            }
        });
        return isFileDownloaded;
    }
}

export default new CommonUtils()