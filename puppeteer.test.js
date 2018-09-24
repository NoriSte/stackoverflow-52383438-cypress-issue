
const puppeteer = require('puppeteer');
const config = require('./config');

describe(`Puppeteer ${config.suiteName}`, () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({headless: false, devtools:true});
    page = await browser.newPage();
  });

  afterAll(async () => {
    //await browser.close();
  });

  test(config.testName, async () => {
    await page.goto(config.loginURL);
    await page.type(config.usernameSelector, config.githubUser);
    await page.type(config.passwordSelector, config.githubPwd);
    await page.click(config.buttonSelector);

    await page.waitForNavigation({ waitUntil: 'networkidle0' }),

    await page.goto(config.repoURL);
    page.evaluate(() => (
      () => {
        window.logMouseEvents = true;
        window.addEventListener('click', e => window.logMouseEvents && console.log(e.type, e.target));
        window.addEventListener('contextmenu', e => window.logMouseEvents && console.log(e.type, e.target));
        window.addEventListener('dblclick', e => window.logMouseEvents && console.log(e.type, e.target));
        window.addEventListener('mousedown', e => window.logMouseEvents && console.log(e.type, e.target));
        window.addEventListener('mouseenter', e => window.logMouseEvents && console.log(e.type, e.target));
        window.addEventListener('mouseleave', e => window.logMouseEvents && console.log(e.type, e.target));
        window.addEventListener('mousemove', e => window.logMouseEvents && console.log(e.type, e.target));
        window.addEventListener('mouseout', e => window.logMouseEvents && console.log(e.type, e.target));
        window.addEventListener('mouseover', e => window.logMouseEvents && console.log(e.type, e.target));
        window.addEventListener('mouseup', e => window.logMouseEvents && console.log(e.type, e.target));
    }
    )());
    await page.type(config.issueTitleSelector, config.issueName);
    await page.click(config.milestoneTriggerSelector);
    await page.screenshot({path: './screenshot-puppeteer.png'});

    await page.waitForSelector(config.selectorExpected);

    const activeElementClasses = await page.evaluate(() => [...document.activeElement.classList]);
    expect(activeElementClasses).toEqual(expect.arrayContaining([config.classExpected]));
    await page.evaluate(() => window.logMouseEvents = false);
  }, 60000);
});
