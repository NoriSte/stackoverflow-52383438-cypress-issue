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

    cy.on('window:before:load', (win) => {
      cy.spy(win.console, "log")
    })
    cy.window().then((win) => {
      win.logMouseEvents = true;
      win.addEventListener('click', e => win.logMouseEvents && console.log(e.type, e.target.outerHTML));
      win.addEventListener('contextmenu', e => win.logMouseEvents && console.log(e.type, e.target.outerHTML));
      win.addEventListener('dblclick', e => win.logMouseEvents && console.log(e.type, e.target.outerHTML));
      win.addEventListener('mousedown', e => win.logMouseEvents && console.log(e.type, e.target.outerHTML));
      win.addEventListener('mouseenter', e => win.logMouseEvents && console.log(e.type, e.target.outerHTML));
      win.addEventListener('mouseleave', e => win.logMouseEvents && console.log(e.type, e.target.outerHTML));
      win.addEventListener('mousemove', e => win.logMouseEvents && console.log(e.type, e.target.outerHTML));
      win.addEventListener('mouseout', e => win.logMouseEvents && console.log(e.type, e.target.outerHTML));
      win.addEventListener('mouseover', e => win.logMouseEvents && console.log(e.type, e.target.outerHTML));
      win.addEventListener('mouseup', e => win.logMouseEvents && console.log(e.type, e.target.outerHTML));
    })


    cy.get(config.issueTitleSelector).type(config.issueName);
    cy.get(config.milestoneTriggerSelector).click();
    cy.screenshot('cypress-testcafe.png');
    cy.focused().should('have.class', config.classExpected)
    cy.window().then((win) => {
      win.logMouseEvents = false;
    })
  })
})
