import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  id?: string;
  protected model: string;
  year: number;
  color: string;
  status: boolean | undefined;
  buyValue: number;

  constructor(data: IVehicle) {
    this.id = data.id;
    this.model = data.model;
    this.year = data.year;
    this.color = data.color;
    this.status = data.status;
    this.buyValue = data.buyValue;
  }

  public getModel(): string {
    return this.model;
  }

  public setModel(model: string): void {
    this.model = model;
  }
}