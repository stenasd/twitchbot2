const $ = require('cheerio');
const user = "stenstensten1"
const pass = "zb3789fcp"

const loginarray =[]

let baseurl = "https://www.twitch.tv/"
/*
    todo#
        f_login 
        f_go to channel
     f_collect reward
     f_spend reward
     f_send in chat
     m_getPrefs
     m_login pass and email
     m_
*/
const puppeteer = require('puppeteer-core');
const edgePaths = require("edge-paths");
const EDGE_PATH = edgePaths.getEdgePath();
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }
//C:\Program Files\Google\Chrome\Application\chrome.exe
async function startscrape1() {

    puppeteer.launch({executablePath: EDGE_PATH, headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] }).then(async browser => {

        loginandfollow(browser)
      
    })
}
function loginandfollow(browser){
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
    await page.screenshot({path: 'example.png'});
    //clicks follow
    await delay(4000)
    await page.click('[data-a-target="follow-button"]')}
startscrape1()