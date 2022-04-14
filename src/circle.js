// TODO
// A `Circle` class/function that can be invoked as :
// const c = new Circle();
// It should contain at least 3 hidden fields `x`, `y`, and `radius`.
export class Circle {
  #x;
  #y;
  #radius;
  constructor(x, y, radius) {
    this.#x = x;
    this.#y = y;
    this.#radius = radius;
  }

  
  moveTo(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw  new Error('les cordonnées x et y doivent etre des nombre');
    }
    this.#x = x;
    this.#y = y;
  }

  get radius() {
    return this.#radius;
  }
  set radius(radius) {
    if ( radius < 0 ) {
      throw  new Error('radius doit etre un nombre positif');
    }
    if (typeof radius !== 'number' ) {
      throw  new Error('radius doit etre un nombre ');
    }  
    this.#radius = radius;
  }

  get area() {
    const area = this.#radius * this.#radius * Math.PI;
    return area;
  }

  set area(area) {
    
    if ( area < 0 ) {
      throw  new Error('la surface doit etre un nombre positif');
    }
    if (typeof area !== 'number' ) {
      throw  new Error('la surface doit etre un nombre');
    }
    this.radius = Math.sqrt(area / Math.PI);
  }

  static distance(circle1, circle2){
    const [x1, y1] = circle1.coords;
    const [x2, y2] = circle2.coords;
    const distancex = x1- x2;
    const distancey = y1- y2;
    const ditance_totale=Math.sqrt(distancex**2  +  distancey**2);
    return ditance_totale;
  }

  static doIntersect(circle1, circle2) {
    return (circle1.radius + circle2.radius) > Circle.distance(circle1, circle2);
  }

  get coords() {
    return [this.#x, this.#y];
  }

}




