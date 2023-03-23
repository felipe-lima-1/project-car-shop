import { Router } from 'express';
import CarController from '../Controllers/CarController';

const router = Router();

router.post('/cars', (req, res, next) => {
  new CarController(req, res, next).create();
});

router.get('/cars', (req, res, next) => {
  new CarController(req, res, next).getAll();
});

router.get('/cars/:id', (req, res, next) => {
  new CarController(req, res, next).getById();
});

export default router;