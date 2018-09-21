import config from './config';

describe(`Cypress ${config.suiteName}`, function() {
  it(config.testName, function() {

    cy.visit(config.loginURL);
    cy.get(config.usernameSelector).type(config.githubUser);
    cy.get(config.passwordSelector).type(config.githubPwd);
    cy.get(config.buttonSelector).click();

    cy.request({
      url: config.repoURL,
    })
    .then((resp) => {
      // redirect status code is 302
      expect(resp.status).to.eq(200)
    });

    cy.visit(config.repoURL);
    cy.get(config.issueTitleSelector).type(config.issueName);
    cy.get(config.milestoneTriggerSelector).click();
    cy.screenshot('cypress-testcafe.png');
    cy.focused().should('have.class', config.classExpected)
  })
})
