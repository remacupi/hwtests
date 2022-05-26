import {FACTORIAL_ENDPOINT} from "../api-objects/urls_api";
import {AssertApi} from "../api-objects/assert_api";

export class PostFactorialApi {

  //POST factorial
  postFactorial(num){
    const formData = new FormData();
    formData.append("number", num);
    //cy.request('POST', FACTORIAL_ENDPOINT, formData).as('request');
    cy.request({
      method: 'POST',
      url: FACTORIAL_ENDPOINT,
      body: formData,
      failOnStatusCode: false
    }).as('request');
  }

  //ASSERT that factorial response is the expected one
  assertFactorialResponse(expectedValue){
      const assertApi = new AssertApi();
      var expectedAnswer='{"answer":'+expectedValue+'}';
      assertApi.assertApiResponse(expectedAnswer);
  }


}
