module.exports = (chai, server, should) => {
  let id = null;

  // App block test
  describe("App Controller", () => {
    beforeEach(done => {
      // Before each test we empty the database in your case
      done();
    });
    /*
     * Test the /GET route
     */
    describe("/GET apps", () => {
      it("it should GET all the app", done => {
        chai
          .request(server)
          .get("/api/v1/contact")
          .end((err, res) => {
            res.should.have.status(200);
            res.body.result.data.should.be.a("array");
            done();
          });
      });
    });

    /*
     * Test the /POST route
     */
  });
};
