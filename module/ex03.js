export class Circulo{
    raio;
    area;
    perimetro;
    constructor(raio,area,perimetro){
        this.raio = raio;
        this.area = area;
        this.perimetro = perimetro;
    }

    areaN(){
        this.area = 3.14159*(this.raio**2)
    }

    perimetroN(){
        this.perimetro = 2*3.14159*this.raio
    }
}