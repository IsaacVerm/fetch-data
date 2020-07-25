const team = require("./team");

const timeout = 30000
jest.setTimeout(timeout); 

test(`runs in less than ${timeout} ms`, async () => {
  const domain = "https://www.transfermarkt.com";
  const club = "cercle-brugge";
  const teamId = "520";
  const year = "2012";

  const expectedPlayer = ["Eidur Gudjohnsen"]

  data = await team.getData(domain, club, teamId, year);
  expect(data.playerNames).toEqual(expect.arrayContaining(expectedPlayer));
});
