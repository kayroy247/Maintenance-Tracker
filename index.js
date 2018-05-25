import express from 'express';
import myRoute from './routers/repairRequestRoutes';
const app = express();
const port = process.env.PORT || 5000;


app.use('/api', myRoute);

app.listen(port, () => {console.log(`Listening on ${port}`)});