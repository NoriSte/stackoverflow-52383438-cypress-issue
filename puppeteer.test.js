
const puppeteer = require('puppeteer');
const config = require('./config');

describe(`Puppeteer ${config.suiteName}`, () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({headless: false});
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test(config.testName, async () => {
    await page.goto(config.loginURL);
    await page.type(config.usernameSelector, config.githubUser);
    await page.type(config.passwordSelector, config.githubPwd);
    await page.click(config.buttonSelector);

    await page.waitForNavigation({ waitUntil: 'networkidle0' }),

    await page.goto(config.repoURL);
    await page.type(config.issueTitleSelector, config.issueName);
    await page.click(config.milestoneTriggerSelector);
    await page.screenshot({path: './screenshot-puppeteer.png'});

    const activeElementClasses = await page.evaluate(() => [...document.activeElement.classList]);
    expect(activeElementClasses).toEqual(expect.arrayContaining([config.classExpected]));
  }, 60000);
});
