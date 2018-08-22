import faker from 'faker';
import Drone from '../../models/Drone';

export default {
  create: () => {
    const numFlights = faker.random.number();

    return new Drone({
      droneId: faker.random.number(),
      numFlights,
      name: faker.name,
      currency: faker.finance.currencyCode(),
      price: faker.commerce.price(),
      numCrashes: faker.random.number({ min: 0, max: numFlights }),
    });
  },
};
