process.env.NODE_ENV = 'test';
import chai from 'chai';
import myapp from '../routers/repairRequestRoutes';
import request from 'request';
const { expect } = chai.expect;
const should = chai.should();


describe('Maintenance-Tracker Route Tests', () => {
  
    it('Should fetch all the request of a logged in user', function (done) {
      request('/', (err, res) => {
      res.body.should.have.status(200);
    });
    });
});
  
 