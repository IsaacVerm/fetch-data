const puppeteer = require("puppeteer");

module.exports = {
  openBrowser: async () => {
    return puppeteer.launch({headless: false});
  },
  closeBrowser: async browser => {
    browser.close();
  },
  openPage: async browser => {
    return browser.newPage();
  },
};
