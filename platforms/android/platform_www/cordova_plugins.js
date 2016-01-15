cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.sharinglabs.cordova.plugin.datepicker/www/android/DatePicker.js",
        "id": "com.sharinglabs.cordova.plugin.datepicker.DatePicker",
        "pluginId": "com.sharinglabs.cordova.plugin.datepicker",
        "clobbers": [
            "datePicker"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "id": "cordova-plugin-vibration.notification",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    },
    {
        "file": "plugins/de.appplant.cordova.plugin.background-mode/www/background-mode.js",
        "id": "de.appplant.cordova.plugin.background-mode.BackgroundMode",
        "pluginId": "de.appplant.cordova.plugin.background-mode",
        "clobbers": [
            "cordova.plugins.backgroundMode",
            "plugin.backgroundMode"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.0",
    "com.sharinglabs.cordova.plugin.datepicker": "1.1.3",
    "cordova-plugin-statusbar": "2.0.0",
    "cordova-plugin-vibration": "2.0.0",
    "de.appplant.cordova.plugin.background-mode": "0.6.4"
}
// BOTTOM OF METADATA
});