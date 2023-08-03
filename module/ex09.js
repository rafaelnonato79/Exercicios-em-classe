export class Triangulo{
    //Atributos
    base;
    altura;
    area;
    perimetro;
    constructor(base,altura){
        this.base = base;
        this.altura = altura;
        
    }

    areaN(){
        this.area = (this.base*this.altura)/2
    }

    perimetroN(){
        const lado = Math.sqrt(this.base**2 + this.altura ** 2);
        this.perimetro = (2*this.base*lado).toFixed(2);
    }
}