import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';
import Motorcycle from '../Domains/Motorcycle';

export default class MotorcycleService {
  private model: MotorcycleModel;
    
  constructor() {
    this.model = new MotorcycleModel();
  }
    
  public async create(data: IMotorcycle): Promise<Motorcycle> {
    const motorcycle = await this.model.create(data);
    return new Motorcycle(motorcycle);
  }

  public async getAll() {
    const motorcycles = await this.model.model.find();
    return motorcycles.map((motorcycle) => new Motorcycle(motorcycle));
  }

  public async getById(id: string) {
    const motorcycle = await this.model.model.findById(id);
    if (!motorcycle) return null;
    return new Motorcycle(motorcycle);
  }
}
