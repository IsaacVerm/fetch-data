const selectors = require("./selectors");

module.exports = {
  playerNames: async (teamPage) => {
    await new Promise(resolve => setTimeout(resolve, 10000));

    return teamPage.$$eval(selectors.playerNames, (playerNames) =>
      playerNames.map((name) => name.textContent)
    );
  },
};
