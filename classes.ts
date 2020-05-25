class Vehicle {
  // color: string = 'red';

  constructor(public color: string) { }

  protected honk(): void {
    console.log('example two');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, public color: string) {
    super(color);
  }

  private drive(): void {
    console.log('example three');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

// PUBLIC --> 
// This method can be called any where, any time

// PRIVATE --> 
// This method can only be called by other methods in this class

// PROTECTED --> 
// This method can be called by other methods in this class, 
// or by other methods in child classes