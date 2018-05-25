process.env.NODE_ENV = 'test';
import chai from 'chai';
import myapp from '../routers/repairRequestRoutes';
import request from 'request';
const { expect } = chai.expect;



describe('Maintenance-Tracker Route Tests', () => {
  
    it('Should fetch all the request of a logged in user', function (done) {
      request('http://localhost:5000', (error, response, body) => {
         expect(response.statusCode).to.equal(200);
         done();
    });
});
  
  it('Should fetch a request that belong to a user', function (done) {
    request('http://localhost:5000', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
  });
  });

  it('should test non existent id by returning 404', function (done) {
    request('http://localhost:5000', (error, response, body) => {
         expect(response.statusCode).to.equal(404);
         done();
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
    request('http://localhost:5000', (error, response, body) => {
         expect(response.statusCode).to.equal(200);
         done();
  });
});
});
});

