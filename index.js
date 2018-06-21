const webdriverio = require('webdriverio');

const options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

const TIMEOUT = 10000;
const LOGIN_TIMEOUT = 6 * TIMEOUT;

const WAPP = "insert here";
const WEB_WAPP = "insert here";

(async function(){
    let driver = webdriverio
        .remote(options)
        .init()
        .url(WAPP);

    // Whatsapp web navigation button element:
    // <a class="_36or" href="{WEB_WAPP}">WAPP Web</a>
    await driver.waitForExist(`a[href="${WEB_WAPP}"]`, TIMEOUT);
    await driver.click(`a[href="${WEB_WAPP}"]`);

    await driver.waitForExist('input[title="Search or start new chat"]', LOGIN_TIMEOUT);
    await driver.click('span[title="Sheleg & Nala"]', TIMEOUT);

    driver.closeApp().end();
})();