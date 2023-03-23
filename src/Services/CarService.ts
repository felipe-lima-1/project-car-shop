import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';
import Car from '../Domains/Car';

export default class CarService {
  private model: CarModel;
    
  constructor() {
    this.model = new CarModel();
  }
    
  public async create(car: ICar): Promise<Car> {
    const createCar = await this.model.create(car);
    return new Car(createCar);
  }

  public async getAll() {
    const cars = await this.model.getAll();
    return cars.map((car: ICar) => new Car(car));
  }

  public async getById(id: string) {
    const car = await this.model.getById(id);
    if (!car) return null;
    return new Car(car);
  }

  public async updateCar(id: string, car: ICar) {
    const updateCar = await this.model.updateCar(id, car);
    if (!updateCar) return null;
    return new Car(updateCar);
  }
}

// AJUDA DO MURILO DA TRYBE 2 - Default value como false na model//
