import express from 'express';
import carRoute from './Routes/carRoute';
import motorcycleRoute from './Routes/motorcycleRoute';

const app = express();

app.use(express.json());
app.use(carRoute);
app.use(motorcycleRoute);

export default app;