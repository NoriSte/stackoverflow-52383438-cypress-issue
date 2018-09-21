# stackoverflow-52383438-cypress-issue
The same test run on Cypress/TestCafe/Puppeteer to check the strange behaviour of the former

The original question was (https://stackoverflow.com/questions/52383438/why-i-cannot-display-available-milestones-in-new-issue-form-inside-chrome-cypre?noredirect=1#comment91788007_52383438)[this]

The GitHub behaviour is strange. I wrote the same test with both TestCafè and Puppeteer to go deeper and understand if the problem is related to GitHub or to Cypress.

Only Cypress has thisthe problem and it's related to the mouse management because if you leave the Cypress browser opened and you enter the page with a real pointer everything starts working immediately.

To run the tests:
- open ```config.js``` and edit
```javascript
githubUser: 'YOURUSERNAME',
githubPwd: 'YOURPASSWORD',
```
- run the tests with the following commands
```bash
npm install
npm test
```
the three tests will be fired.

The final result compared is the following

![](screenshots-compared.jpg?raw=true)
