import { Request, Response, NextFunction } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private request: Request;
  private response: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(request: Request, response: Response, next: NextFunction) {
    this.request = request;
    this.response = response;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = this.request.body;
    // console.log(car, 'AQUIIIIIIIIIIII');
    try {
      const createCar = await this.service.create(car);
      return this.response.status(201).json(createCar);
    } catch (error) {
    //   console.log(error);
      this.next(error);
    }
  }
}