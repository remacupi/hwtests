export class AssertApi {

  //ASSERT response code is the expected one
  assertResponseCode(expectedCode){
    cy.get('@request').then(response => {
        expect(response.status).to.eq(parseInt(expectedCode));
    });
  }

  //ASSERT api response is equal to a given JSON
    assertApiResponse(expectedValue){
      cy.get('@request').then(response => {
          var responseString = String.fromCharCode.apply(null, new Uint8Array(response.body));
          expect(response.body).to.be.an('arraybuffer');
          expect(responseString).to.contain(expectedValue);
      });
    }


}
