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

  public async getAll() {
    const cars = await this.service.getAll();
    return this.response.status(200).json(cars);
  }

  public async getById() {
    const { id } = this.request.params;
    try {
      const car = await this.service.getById(id);
      if (!car) return this.response.status(404).json({ message: 'Car not found' });
      return this.response.status(200).json(car);
    } catch (error) {
      this.response.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  public async updateCar() {
    const { id } = this.request.params;
    const car: ICar = this.request.body;
    try {
      const updateCar = await this.service.updateCar(id, car);
      if (!updateCar) return this.response.status(404).json({ message: 'Car not found' });
      return this.response.status(200).json(updateCar);
    } catch (error) {
      this.response.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}