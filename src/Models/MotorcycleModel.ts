import { Model, Schema, model, models } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcycleModel {
  private schema: Schema;
  model: Model<IMotorcycle>;

  constructor() {
    this.schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, default: false, required: true },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });

    this.model = models.Motorcycle || model<IMotorcycle>('Motorcycle', this.schema);
  }

  public async create(data: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...data });
  }
}