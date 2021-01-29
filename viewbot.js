const puppeteer = require('puppeteer-core');
const edgePaths = require("edge-paths");
const EDGE_PATH = edgePaths.getEdgePath();



async function loginandfollow(browser) {
    const page = await browser.newPage();
    await page.goto('https://www.twitch.tv/cashapp');
    await delay(4000)
    //clicks login button on twitchy OwO
    await page.click('[data-a-target="login-button"]')
    //NYa :3 enter user/pass
    await delay(500)
    await page.type('[autocomplete="username"]', user)
    await delay(500)
    await page.type('[autocomplete="current-password"]', pass)
    await delay(500)
    await page.click('[data-a-target="passport-login-button"]')
    await page.screenshot({ path: 'example.png' });
    //clicks follow
    await delay(4000)
    await page.click('[data-a-target="follow-button"]')
}