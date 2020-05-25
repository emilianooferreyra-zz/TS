interface Reportable {
  // name: string;
  // year: number,
  // year: Date;
  // broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  // year: 2000,
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drinks = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printVehicle = (item: Reportable): void => {
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken?: ${vehicle.broken}`);
  console.log(item.summary())
};

printVehicle(oldCivic);
printVehicle(drinks);