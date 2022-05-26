import {FACTORIAL_ENDPOINT} from "../api_objects/urls_api";
import {AssertApi} from "../api_objects/assert_api";

export class PostFactorialApi {
  //POST factorial
  postFactorial(num){
    //Create formData to send to body api
    const formData = new FormData();
    formData.append("number", num);

    //Request, avoid fail test when status code diferent to 2xx or 3xx, save response as request
    cy.request({
      method: 'POST',
      url: FACTORIAL_ENDPOINT,
      body: formData,
      failOnStatusCode: false
    }).as('request');
  }

  //ASSERT that factorial response is equal to {answer:4(the expected number result)}
  assertFactorialResponse(expectedValue){
      const assertApi = new AssertApi();
      var expectedAnswer='{"answer":'+expectedValue+'}';
      assertApi.assertApiResponse(expectedAnswer);
  }


}
