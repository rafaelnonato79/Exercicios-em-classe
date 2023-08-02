export class Retangulo{
    altura;
    largura;
    area;
    perimetro;

    constructor(altura,largura,area,perimetro){
        this.altura = altura;
        this.largura = largura;
        this.area = area;
        this.perimetro = perimetro;
    }

    areaN(){
        this.area = this.altura*this.largura
    }

    perimetroN(){
        this.perimetro = 2*(this.altura+this.largura)
    }
}