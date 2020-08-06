module.exports = {
  team: (domain, team, teamId, year) => {
    return `${domain}/${team}/startseite/verein/${teamId}?saison_id=${year}`;
  },
  visit: async (page, url) => {
    await Promise.all([
      page.goto(url),
      // https://github.com/puppeteer/puppeteer/issues/3323
      // transfermarkt redirects to other pages so we have to wait for things to settle down
      page.waitForNavigation()])
  }
}