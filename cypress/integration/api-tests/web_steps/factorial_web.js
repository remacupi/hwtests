import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import {FactorialPage} from "../page-objects/factorial_page";

var factorialPage = new FactorialPage();

//VISIT WEB page
Given('I visit factorial web',()=>{
  cy.viewport('iphone-8');
  cy.visit('/');
})

//FACTORIAL WEB STEPS
When(`I calculate factorial for the number {string}`,(number)=>{
  factorialPage.calculateFactorial(number);
})

When(`I press calculate factorial button`,()=>{
  factorialPage.pressCalculateFactorialButton();
})

//ASSERT STEPS

Then(`I should see factorial result {string}`,(number)=>{
  factorialPage.assertFactorialMessage(number);
})


Then(`I should see factorial error message`,()=>{
  factorialPage.assertFactorialErrorMessage();
})
