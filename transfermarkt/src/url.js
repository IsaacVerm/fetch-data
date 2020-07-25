module.exports = {
  team: (domain, team, teamId, year) => {
    return `${domain}/${team}/startseite/verein/${teamId}?saison_id=${year}`;
  },
  visit: async (page, url) => {
    page.goto(url);
  }
}