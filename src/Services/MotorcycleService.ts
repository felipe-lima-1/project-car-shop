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
}