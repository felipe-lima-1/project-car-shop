import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';
import Car from '../Domains/Car';

export default class CarService {
  private model: CarModel;
    
  constructor() {
    this.model = new CarModel();
  }
    
  public async create(car: ICar): Promise<Car> {
    const obj = car;
    if (!car.status) {
      obj.status = false;
    }
    const createCar = await this.model.create(obj);
    // console.log(createCar, 'AQUIIIIIIIIIIII');
    return new Car(createCar);
  }
}

// AJUDA DO MURILO DA TRYBE//
