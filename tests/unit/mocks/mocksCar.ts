import Car from '../../../src/Domains/Car';

const carMock = {
  model: 'Tempra',
  year: 1995,
  color: 'Black',
  buyValue: 39,
  doorsQty: 2,
  seatsQty: 5,
};

const newCarMock : Car = new Car({
  id: '634852326b35b59438fbea31',
  model: 'Tempra',
  year: 1995,
  color: 'Black',
  buyValue: 39,
  doorsQty: 2,
  seatsQty: 5,
});

export { carMock, newCarMock };