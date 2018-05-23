process.env.NODE_ENV = 'test';
import chai from 'chai';
import myapp from '../routers/repairRequestRoutes';
import { request } from 'http';
import should from 'chai.should()';
import chaiHttp from 'chai-Http';

const { expect } = chai.expect;

chai.use(chaiHttp);


describe('Maintenance-Tracker Route Tests', () => {
  
    it('Should fetch all the request of a logged in user', function (done) {
      chai.request(myapp)
        .get('/api/v1/users/requests')
          .end((error, response) => {
            if (error) return;
            response.should.have.status(200);
          });
    });
});
  
  it('Should fetch a request that belong to a user', function (done) {
      chai.request(myapp)
          .get('/api/v1/users/requests/1')
          .end((error, response) => {
            if (error) return;
            response.should.have.status(200);
          });
          
  });

describe('GET /users/:noextistingId', () => {
  it('should test non existent id by returning 404', function (done) {
    chai.request(myapp)
      .get('/users/v1/requests/1e3')
      .end((error, response) => {
        if (error) return;
        response.should.have.status(404);
      });
          });
  });
});
describe('POST /users/requests', () => {
  const newRequest = {
     name: 'Frank jeff',
      userId : 3,
      title: 'Car repair',
      description: 'The car has engine fault',
  }
  it('should Modify a request', (done) => {
    chai.request(myapp)
      .put('/api/v1/users/requests/3')
        .send.(newRequest)
        .end((error, response) => {
          if (error) return;
          response.should.have.status(200);
        });
          });
  });
});

});

