import {Parallelogramma} from './Parallelogramma'

export class Quadrato extends Parallelogramma{
    constructor(public base:number, public altezza:number){
        super(base, altezza);
    }
}