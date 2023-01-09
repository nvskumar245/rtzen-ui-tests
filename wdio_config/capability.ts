import appRoot from 'app-root-path'

module.exports ={
        "chromeCaps": {
            "maxInstances": 5,
            "browserName": "chrome",
            "acceptInsecureCerts": true,
            "goog:chromeOptions": {
                "args": [
                    "--no-sandbox",
                    "--disable-dev-shm-usage",
                   // "--headless"
                ],
                "prefs": {
                    "download.default_directory": appRoot + "/downloads"
                }
            }
        }
}
