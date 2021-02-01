import {Shape} from './Shape'

export class Parallelogramma implements Shape{

    constructor(public base:number, public altezza:number){}

    perimetro():number{
        return ((this.base*2) + (this.altezza*2))
    }
    area():number{
        return this.base * this.altezza
    }
    
}