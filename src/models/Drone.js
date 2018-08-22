export default class Drone {
  constructor({
    droneId, numFlights, name, currency, price, numCrashes,
  }) {
    this.droneId = droneId;
    this.numFlights = numFlights;
    this.name = name;
    this.currency = currency;
    this.price = price;
    this.numCrashes = numCrashes;
  }
}
