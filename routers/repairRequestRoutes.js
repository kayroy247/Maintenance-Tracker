import express from 'express';
import RequestControllers from '../controllers/requestControllers';

const myRequest = new RequestControllers();
const app = express();
const port = process.env.PORT || 3000;

const routing = express.Router();
app.use(express.json());

routing.get('/', myRequest.homePageDisplay());

routing.get('/api/v1/users/requests', myRequest.getAllRequests());

routing.get('/api/v1/users/requests/:id',  myRequest.getUserRequests());

routing.post('/api/v1/users/requests',  myRequest.postRequest() );

routing.put('/api/v1/users/requests/:id',  myRequest.modifyRequest());

routing.delete('/api/v1/users/requests/:id', myRequest.deleteRequest());

routing.listen(port, () => console.log('listening on port 3000'));

export default routing;
