const puppeteer = require('puppeteer');

const domain = 'https://www.transfermarkt.com'
const team = 'cercle-brugge'
const teamId = '520'
const year = '2012'

function buildUrl(domain, team, teamId, year) {
    return `${domain}/${team}/startseite/verein/${teamId}?saison_id=${year}`
}

async function fetch(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // span.hide-for-small because there's also show-for-small with the exact same text content
    // not specifying hide-for-small would result in duplicates
    const playerNamesSelector = 'table span.hide-for-small a.spielprofil_tooltip'

    const playerNames = await page.$$eval(playerNamesSelector, playerNames => playerNames.map(name => name.textContent))

    await console.log(playerNames)

    await browser.close();
}

const url = buildUrl(domain, team, teamId, year)
fetch(url)