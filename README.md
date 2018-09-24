# stackoverflow-52383438-cypress-issue
The same test run on Cypress/TestCafe/Puppeteer to check the strange behaviour of the former

The [Original question](https://stackoverflow.com/questions/52383438/why-i-cannot-display-available-milestones-in-new-issue-form-inside-chrome-cypre?noredirect=1#comment91788007_52383438) on StackOverflow

The GitHub behaviour is strange. I wrote the same test with both TestCafè and Puppeteer to go deeper and understand if the problem is related to GitHub or to Cypress.

Only Cypress has the problem and it's related to the mouse management because if you leave the Cypress browser opened and you enter the page with a real pointer everything starts working immediately.


The final result compared is the following

![](screenshots-compared.jpg?raw=true)


Then I tried to log everything happening in the client (I put it on a dedicated branch, take a look at the [mouse-log](https://github.com/NoriSte/stackoverflow-52383438-cypress-issue/commit/a52ab10bae1cab13dd635c3ed9dafba0989093ff) branch) in all the test I wrote, the result is the following

TestCafè
```
mouseover <summary class="text-bold discussion-sidebar-heading discussion-sidebar-toggle" aria-label="Set milestone" aria-haspopup="menu" data-hotkey="m">...</summary>
mousemove <summary class="text-bold discussion-sidebar-heading discussion-sidebar-toggle" aria-label="Set milestone" aria-haspopup="menu" data-hotkey="m">...</summary>
mousemove <summary class="text-bold discussion-sidebar-heading discussion-sidebar-toggle" aria-label="Set milestone" aria-haspopup="menu" data-hotkey="m">...</summary>
mousedown <summary class="text-bold discussion-sidebar-heading discussion-sidebar-toggle" aria-label="Set milestone" aria-haspopup="menu" data-hotkey="m">...</summary>
mouseup <summary class="text-bold discussion-sidebar-heading discussion-sidebar-toggle" aria-label="Set milestone" aria-haspopup="menu" data-hotkey="m">...</summary>
click <summary class="text-bold discussion-sidebar-heading discussion-sidebar-toggle" aria-label="Set milestone" aria-haspopup="menu" data-hotkey="m">...</summary>
```

Puppeteer
```
mouseover <summary class=​"text-bold discussion-sidebar-heading discussion-sidebar-toggle" aria-label=​"Set milestone" aria-haspopup=​"menu" data-hotkey=​"m">​…​</summary>​
mousemove <summary class=​"text-bold discussion-sidebar-heading discussion-sidebar-toggle" aria-label=​"Set milestone" aria-haspopup=​"menu" data-hotkey=​"m">​…​</summary>​
mousedown <summary class=​"text-bold discussion-sidebar-heading discussion-sidebar-toggle" aria-label=​"Set milestone" aria-haspopup=​"menu" data-hotkey=​"m">​…​</summary>​
mouseup <summary class=​"text-bold discussion-sidebar-heading discussion-sidebar-toggle" aria-label=​"Set milestone" aria-haspopup=​"menu" data-hotkey=​"m">​…​</summary>​
click <summary class=​"text-bold discussion-sidebar-heading discussion-sidebar-toggle" aria-label=​"Set milestone" aria-haspopup=​"menu" data-hotkey=​"m">​…​</summary>​
```

Cypress
```
mousedown <summary class="text-bold discussion-sidebar-heading discussion-sidebar-toggle" aria-label="Set milestone" aria-haspopup="menu" data-hotkey="m">...</summary>
mouseup <summary class="text-bold discussion-sidebar-heading discussion-sidebar-toggle" aria-label="Set milestone" aria-haspopup="menu" data-hotkey="m">...</summary>
click <summary class="text-bold discussion-sidebar-heading discussion-sidebar-toggle" aria-label="Set milestone" aria-haspopup="menu" data-hotkey="m">...</summary>
```

As you can see there aren't any `mousemove` event in Cypress and I guess that's the problem with the GitHub mileston widget (and it explains event the reason why everything works well as soon as I move the cursor manually into the Cypress window).

If you'd liket to run the tests yourself:
- disable the 2FA if of GitHub account if you have enabled it
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
