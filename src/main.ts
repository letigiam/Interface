import{Parallelogramma} from './Parallelogramma'
import {Tringolo} from './Triangolo'
import{Quadrato} from './Quadrato'
import {Shape} from './Shape'

let parallelogramma = new Parallelogramma(10, 3);
let tringolo = new Tringolo(4,6,9,)
let quadrato = new Quadrato(10,10);

console.log(`Area parallelogramma ${parallelogramma.area()}`);
console.log(`Perimetro parallelogramma ${parallelogramma.perimetro()}`);

console.log(`Area Tringolo ${tringolo.area()}`);
console.log(`Perimetro Triangolo ${tringolo.perimetro()}`);

console.log(`Area Quadrato ${quadrato.area()}`);
console.log(`Perimetro Quadrato ${quadrato.perimetro()}`);