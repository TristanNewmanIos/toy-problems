function Car( make, model, year ) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  
  // code here
}

var prius = new Car('Toyota', 'Prius', 2011);

prius.moveCar();


Add another property called moveCar to the Car constructor function. This function should increment the value of move by 10 every time it is called. You must use the this keyword.