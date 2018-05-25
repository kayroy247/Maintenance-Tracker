import express from 'express';
import myRoute from './routers/repairRequestRouters';
const app = express();
const port = procee.env.PORT || 3000;


app.use('/api/v1/users', myRoute);

app.listen(port, (_) => {`listening on ${port}`});