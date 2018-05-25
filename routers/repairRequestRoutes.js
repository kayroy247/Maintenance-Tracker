import express from 'express';
import RequestControllers from '../controllers/requestControllers';


const app = express();

const router = express.Router();

router.get('/', RequestControllers.homePageDisplay)
router.get('/v1/users', RequestControllers.homePageDisplay);

router.get('/v1/users/requests', RequestControllers.getAllRequests);

router.get('/v1/users/requests/:id',  RequestControllers.getUserRequests);

router.post('/v1/users/requests',  RequestControllers.postRequest);

router.put('/v1/users/requests/:id',  RequestControllers.modifyRequest);

router.delete('/v1/users/requests/:id', RequestControllers.deleteRequest);

export default router;
