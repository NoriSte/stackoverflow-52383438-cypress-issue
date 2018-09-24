
import { ClientFunction, Selector } from 'testcafe';
import config from './config';

fixture `TestCafé ${config.suiteName}`
.page `${config.loginURL}`;

test(config.testName, async t => {
    await t.typeText(config.usernameSelector, config.githubUser);
    await t.typeText(config.passwordSelector, config.githubPwd);
    await t.click(config.buttonSelector);

    await t.navigateTo(config.repoURL);

    const addMouseListeners = ClientFunction(() => {
        window.logMouseEvents = true;
        window.addEventListener('click', e => window.logMouseEvents && console.log(e.type, e.target.outerHTML));
        window.addEventListener('contextmenu', e => window.logMouseEvents && console.log(e.type, e.target.outerHTML));
        window.addEventListener('dblclick', e => window.logMouseEvents && console.log(e.type, e.target.outerHTML));
        window.addEventListener('mousedown', e => window.logMouseEvents && console.log(e.type, e.target.outerHTML));
        window.addEventListener('mouseenter', e => window.logMouseEvents && console.log(e.type, e.target.outerHTML));
        window.addEventListener('mouseleave', e => window.logMouseEvents && console.log(e.type, e.target.outerHTML));
        window.addEventListener('mousemove', e => window.logMouseEvents && console.log(e.type, e.target.outerHTML));
        window.addEventListener('mouseout', e => window.logMouseEvents && console.log(e.type, e.target.outerHTML));
        window.addEventListener('mouseover', e => window.logMouseEvents && console.log(e.type, e.target.outerHTML));
        window.addEventListener('mouseup', e => window.logMouseEvents && console.log(e.type, e.target.outerHTML));
    });
    await addMouseListeners();

    await t.typeText(config.issueTitleSelector, config.issueName);
    await t.click(config.milestoneTriggerSelector);
    await t.takeScreenshot('screenshot-testcafe.png');
    console.dir(await t.getBrowserConsoleMessages());

    await t.expect(Selector(config.milestoneInputSelector).focused).ok();
});
