module.exports = {
    githubUser: 'YOURUSERNAME',
    githubPwd: 'YOURPASSWORD',

    suiteName: 'StackOverflow 52383438 question',
    testName: 'Focus the milestone input field',

    repoURL: 'https://github.com/NoriSte/feti-workshop-e2e-testing-with-puppeteer/issues/new', // TODO modificare
    issueName: 'New issue ' + Math.floor((Math.random() * 1000) + 1),

    loginURL: 'https://github.com/login',

    usernameSelector: '#login_field',
    passwordSelector: '#password',
    buttonSelector: '.btn',
    issueTitleSelector: '#issue_title',
    milestoneTriggerSelector: '.sidebar-milestone > .js-issue-sidebar-form > .details-reset > .text-bold',
    milestoneInputSelector: '#context-milestone-filter-field',

    classExpected: 'form-control',
};
