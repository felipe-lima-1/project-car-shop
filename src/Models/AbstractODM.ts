import { model, Model, models, Schema, UpdateQuery } from 'mongoose';

abstract class AbstractODM<T> {
  model: Model<T>;
  modelName: string;
  schema: Schema;

  constructor(modelName: string, schema: Schema) {
    this.modelName = modelName;
    this.schema = schema;
    this.model = models[modelName] || model(modelName, schema);
  }

  public async create(data: T): Promise<T> {
    return this.model.create({ ...data });
  }

  public async update(id: string, data: T): Promise<T | null> {
    if (!id) throw new Error('Invalid Mongo id');
    return this.model.findByIdAndUpdate(id, { ...data } as UpdateQuery<T>, { new: true });
  }
}

export default AbstractODM;