import chai from 'chai';
import superT from 'supertest';
import myapp from '../src/app';
import { request } from 'http';

const { expect } = chai.expect;
const serverControl = superT.agent(myapp);


describe('Maintenance-Tracker Route Tests', () => {
  describe('GET /users/requests', () => {
    it('Should fetch all the request of a logged in user', function (done) {
      serverControl
        .get('/api/v1/users/requests')
          .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
              .expect(200, done);
    });
});
  describe('GET /users/requests/<requestId>', () => {
  it('Should fetch a request that belong to a user', function (done) {
      serverControl
          .get('/api/v1/users/requests/1')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
  });
});
describe('GET /users/:invalidId', () => {
  it('should test non existent id by returning 404', function (done) {
    serverControl
      .get('/users/v1/requests/1e3')
        .set('Accept', 'application/json')
          .expect('Content-Type', "text/html; charset=utf-8")
            .expect(404)  
              .end((err) => {
              if (err) return done(err);
              done();
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
    serverControl
      .put('/api/v1/users/requests/3')
        .send(newRequest)
        .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
           .expect(200)
              .end((err) => {
              if (err) return done(err);
              done();
          });
  });
});

});

