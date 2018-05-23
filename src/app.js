import express from 'express';
import RequestControllers from '../controllers/requestControllers';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', 
          RecipeControllers.homePageDisplay());

app.get('/api/v1/users/requests', 
          RecipeControllers.getAllRequests());

app.get('/api/v1/users/requests/:id', 
         RecipeControllers.getUserRequests());

app.post('/api/v1/users/requests', 
          RecipeControllers.postRequest() );

app.put('/api/v1/users/requests/:id', 
          RecipeControllers.modifyRequest());

app.delete('/api/v1/users/requests/:id', 
             RecipeControllers.deleteRequest());

app.listen(port, () => console.log('listening on port 3000'));

export default app;
