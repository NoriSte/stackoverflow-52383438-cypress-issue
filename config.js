module.exports = {
    githubUser: 'YOURUSERNAME',
    githubPwd: 'YOURPASSWORD',

    suiteName: 'StackOverflow 52383438 question',
    testName: 'Focus the milestone input field',

    repoURL: 'https://github.com/NoriSte/stackoverflow-52383438-cypress-issue/issues/new',
    issueName: 'New issue ' + Math.floor((Math.random() * 1000) + 1),

    loginURL: 'https://github.com/login',

    usernameSelector: '#login_field',
    passwordSelector: '#password',
    buttonSelector: '.btn',
    issueTitleSelector: '#issue_title',
    milestoneTriggerSelector: '.sidebar-milestone > .js-issue-sidebar-form > .details-reset > .text-bold',
    milestoneInputSelector: '#context-milestone-filter-field',

    selectorExpected: '[aria-label="Type or choose a milestone"]',
    classExpected: 'js-filterable-field',
};
