import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(request: Request, response: Response, next: NextFunction) {
    this.req = request;
    this.res = response;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create(): Promise<Response> {
    const data: IMotorcycle = this.req.body;
    const motorcycle = await this.service.create(data);
    return this.res.status(201).json(motorcycle);
  }

  public async getAll() {
    try {
      const motorcycles = await this.service.getAll();
      return this.res.status(200).json(motorcycles);
    } catch (error) {
      return this.res.status(404).json({ message: 'Motorcycles not found' });
    }
  }

  public async getById() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });
    try {
      const motorcycle = await this.service.getById(id);
      if (!motorcycle) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      return this.next(error);
    }
  }
}