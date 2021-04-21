const puppeteer = require('puppeteer-core');
const edgePaths = require("edge-paths");
const EDGE_PATH = edgePaths.getEdgePath();
let jsonData = require('./accountinfo.json');


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
    if(isfollowed){
        await page.click('[data-a-target="follow-button"]')
    }
    await page.type('[data-a-target="chat-input"]', "hello world")
    await delay(30000)
}
async function isfollowed(){

}
async function sendmsg(page,msg){
    await page.type('[data-a-target="chat-input"]', msg)
    await delay(500)
    await page.click('[class="tw-transition]')
}