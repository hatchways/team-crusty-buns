const chai = require("chai");
const chaiHttp = require("chai-http");
const { app } = require("../app.js");
const dotenv = require("dotenv");

dotenv.config();

chai.should();
chai.use(chaiHttp);

describe("/GET /auth/logout", () => {
  it("it should return 200 and message", (done) => {
    chai
      .request(app)
      .get(`/auth/logout`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have
          .property("message")
          .eql("You have successfully logged out");
        done();
      });
  });
});

describe("/POST /auth/logout", () => {
  it("it should return 500", (done) => {
    chai
      .request(app)
      .post(`/auth/logout`)
      .end((err, res) => {
        res.should.have.status(500);
        done();
      });
  });
});
