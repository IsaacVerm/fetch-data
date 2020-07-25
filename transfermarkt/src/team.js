const browse = require("./browse");
const url = require("./url");
const extract = require("./extract");

module.exports = {
  getData: async (domain, team, teamId, year) => {
    const browser = await browse.openBrowser();
    const page = await browse.openPage(browser);
  
    await url.visit(page, url.team(domain, team, teamId, year));
    const playerNames = await extract.playerNames(page);

    await browse.closeBrowser(browser);
    const data = { playerNames: playerNames}
    return data;
  }
}