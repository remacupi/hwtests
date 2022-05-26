export class FactorialPage {


  //calculate Factorial
  calculateFactorial(num){
    cy.get("#number").type(num);
    this.pressCalculateFactorialButton();
  }

//press calculate factorial button
pressCalculateFactorialButton(){
  cy.get("#getFactorial").click();
}

//assert error response of factorial when introduce invalid value
assertFactorialErrorMessage(){
  var errorMessage = "Please enter an integer";
  this.assertFactorialMessage(errorMessage);
}

//assert result of factorial is equal to the expected one
assertFactorialMessage(expectedResult){
  cy.get("#resultDiv").contains(expectedResult);
}

}
