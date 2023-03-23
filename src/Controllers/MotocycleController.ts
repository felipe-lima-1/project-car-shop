import { NextFunction, Request, Response } from 'express';
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
}