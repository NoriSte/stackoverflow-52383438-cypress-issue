
import { Selector } from 'testcafe';
import config from './config';

fixture `TestCafé ${config.suiteName}`
    .page `${config.loginURL}`;

test(config.testName, async t => {
    await t
        .typeText(config.usernameSelector, config.githubUser)
        .typeText(config.passwordSelector, config.githubPwd)
        .click(config.buttonSelector)

    await t.navigateTo(config.repoURL);

    await t.typeText(config.issueTitleSelector, config.issueName)
        .click(config.milestoneTriggerSelector)
        .takeScreenshot('screenshot-testcafe.png')
        .expect(Selector(config.milestoneInputSelector).focused).ok();
});
