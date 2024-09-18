class figurageometrica {
    calcularArea() {
    }    
}

// Subclase Cuadrado
class Cuadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
        }
        calcularArea() {

            return this.lado * this.lado;
        }
    
}
// sub clase triangulo
class triangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
        }

        calcularArea() {

            return (this.base*this.altura)/2;
        }
    
}

        
// sub clase rectangulo
class rectangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
        }

        calcularArea() {

            return this.base*this.altura;
        }
        
}

// Función para clasificar la figura
function clasificarFigura(figura) {
    const area = figura.calcularArea();
    
    if (area<20) {
        return "Pequeña";
    } 
    else if(area>20){
        return "Grande";
    }
}

// Ejemplo de uso
const cuadrado = new Cuadrado(3);
const triangulo = new triangulo(3,5);
const rectangulo = new rectangulo(8,6);

console.log(cuadrado.calcularArea()); // 16
console.log(clasificarFigura(cuadrado)); // "Pequeña"
console.log(triangulo.calcularArea()); // 7.5
console.log(clasificarFigura(triangulo)); // "Pequeña"
console.log(rectangulo.calcularArea()); // 48
console.log(clasificarFigura(rectangulo)); // "Grande"




