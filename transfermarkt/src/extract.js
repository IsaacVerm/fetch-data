const selectors = require("./selectors");

module.exports = {
  playerNames: async (teamPage) => {
    return teamPage.$$eval(selectors.playerNames, (playerNames) =>
      playerNames.map((name) => name.textContent)
    );
  },
};
