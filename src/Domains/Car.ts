import ICar from '../Interfaces/ICar';

export default class Car {
  id: string | undefined;
  protected model: string;
  year: number;
  color: string;
  status: boolean | undefined;
  buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor({ id, model, year, color, status, buyValue, doorsQty, seatsQty }: ICar) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status;
    this.buyValue = buyValue;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }

  getModel(): string {
    return this.model;
  }

  setModel(model: string): void {
    this.model = model;
  }

  public getDoorsQty(): number {
    return this.doorsQty;
  }

  public getSeatsQty(): number {
    return this.seatsQty;
  }
}