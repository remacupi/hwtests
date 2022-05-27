# Api and End To End Test for HostelWorld Factorial Web Page

# RUN TEST IN LOCAL
Prerequisites:
Node: https://nodejs.org/
Browser: https://www.google.com/intl/en/chrome/

Steps to execute tests in local:
1. Go to Test Directory: hwtest
2. Install Dependencies (cypress and cucumber): npm install
3. Execute tests: npm test
    -> This will run API test and Web Test in your computer. 

# RUN TEST ON CI (Recomended Option)
1. Go to circleCI with the invitation link: https://app.circleci.com/pipelines/github/remacupi/hwtests?invite=true
2. Select in latest build Actions -> rerun (it will run all test in ci)
      - If you click on the build you can see all the information: command line test run log, link to test result. On Artifacts tab you can see video and screenshots recorder.
3. Go to https://dashboard.cypress.io/projects/ubfrjq/runs/ to see complete test result report with:
    - Passed and failed test, execution time, screenshot, logs and video of failing tests

# BUG REPORT OF FACTORIAL (WEB AND API)
All BUGS are reported as JIRA ISSUES IN THE FACTORIAL PROJECT:
Login email: qatestreyes@gmail.com
Login password: Qatest2022
https://remacupi.atlassian.net/jira/software/projects/FAC/boards/1

To reproduce API BUGS manually, you use POSTMAN PROJECT INVITATION LINK (You should be registered to postman with your account and accept the project invitation of this link): https://www.postman.com/crimson-firefly-993263/workspace/factorialapi/collection/21069051-98b74668-50ba-48a8-afb5-3f6dd87699ea?action=share&creator=21069051
