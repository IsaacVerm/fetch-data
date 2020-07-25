const puppeteer = require("puppeteer");

module.exports = {
  openBrowser: async () => {
    // return puppeteer.launch({headless: false, devtools: true});
    return puppeteer.launch()
  },
  closeBrowser: async (browser) => {
    browser.close();
  },
  openPage: async (browser) => {
    return browser.newPage();
  },
  interceptAdRequests: async (page) => {
    await page.setRequestInterception(true);
    page.on("request", (interceptedRequest) => {
      if (
        interceptedRequest.url().includes("s0.2mdn.net") ||
        interceptedRequest.url().includes("akamaized.net") ||
        interceptedRequest.url().includes("daznplayervod") ||
        interceptedRequest.url().includes("daznservices") ||
        interceptedRequest.url().includes("pagead") ||
        interceptedRequest.url().includes("doubleclick") ||
        interceptedRequest.url().includes(".png") ||
        interceptedRequest.url().includes(".mp4") ||
        interceptedRequest.url().includes(".gif") ||
        interceptedRequest.url().includes("outbrain") ||
        interceptedRequest.url().includes("lkqd.net") ||
        interceptedRequest.url().includes("ads.everesttech.net") ||
        interceptedRequest.url().includes("everestads.net") ||
        interceptedRequest.url().includes("rubiconproject") ||
        interceptedRequest.url().includes("googlesyndication") ||
        interceptedRequest.url().includes("adaptv.advertising") ||
        interceptedRequest.url().includes("ads-eu.v.ssp.yahoo.com") ||
        interceptedRequest.url().includes("scorecardresearch") ||
        interceptedRequest.url().includes(".woff") ||
        interceptedRequest.url().includes("google-analytics") ||
        interceptedRequest.url().includes("gumgum") ||
        interceptedRequest.url().includes("adservice.google") ||
        interceptedRequest.url().includes("ioam.de")
      )
        interceptedRequest.abort();
      else interceptedRequest.continue();
    });
  },
};
