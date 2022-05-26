import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import {PostFactorialApi} from "../api-objects/post_factorial_api";
import {AssertApi} from "../api-objects/assert_api";

var postFactorialApi = new PostFactorialApi();
var assertApi = new AssertApi();

//POST STEPS
When(`I POST factorial for number {string}`,(number)=>{

  postFactorialApi.postFactorial(number);

})

//VERIFY CODES
Then(`I should see response code {string}`,(responseCode)=>{
  assertApi.assertResponseCode(responseCode);
})

//VERIFY RESPONSES
Then(`I should see factorial response with value {string}`,(responseFactorial)=>{
  postFactorialApi.assertFactorialResponse(responseFactorial);
})
