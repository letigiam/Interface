import {Shape} from './Shape'

export class Tringolo implements Shape{

    constructor( public latoA:number, public latoB: number, public latoC: number){}

    perimetro():number{
        return (this.latoA+this.latoB+this.latoC)
    }

    area():number{
        let sp = (this.latoA+this.latoB+this.latoC)/2
        return (sp*(sp-this.latoA)*(sp-this.latoB)*(sp-this.latoC))
    }
   

}