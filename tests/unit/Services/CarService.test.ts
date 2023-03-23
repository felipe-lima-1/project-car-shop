import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import { carMock, newCarMock } from '../mocks/mocksCar';
import CarService from '../../../src/Services/CarService';

describe('Teste Car Service', function () {
  beforeEach(function () {
    sinon.restore();
  });
  it('Criar carro', async function () {
    sinon.stub(Model, 'create').resolves(newCarMock);

    const service = new CarService();
    const result = await service.create(carMock);
    expect(result).to.be.deep.equal(newCarMock);
  });

  it('Retornar carros GetAll', async function () {
    sinon.stub(Model, 'find').resolves([newCarMock]);
  
    const service = new CarService();
    const result = await service.getAll();
    expect(result).to.be.deep.equal([newCarMock]);
  });

  it('Retorna carro ById', async function () {
    sinon.stub(Model, 'findById').resolves(newCarMock);

    const service = new CarService();
    const result = await service.getById('test3201');
    expect(result).to.be.deep.equal(newCarMock);
  });
  
  it('Retornar Nulo GetById', async function () {
    sinon.stub(Model, 'findById').resolves(null);

    const service = new CarService();
    const result = await service.getById('test3201');
    expect(result).to.be.equal(null);
  });
});
