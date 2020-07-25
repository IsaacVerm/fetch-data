const team = require("./src/team");

const domain = "https://www.transfermarkt.com";
const club = "cercle-brugge";
const teamId = "520";
const year = "2012";

(async () => {
  data = await team.getData(domain, club, teamId, year);
  console.log(data);
})();
