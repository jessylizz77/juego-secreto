console.log(calcularIMC(75,1.62));
console.log(getFactorial(5));
console.log(conversorDivisas(500));
console.log(calcularPerimetro(56,29));
console.log(calcularArea(80,60));
generarTablaMultiplicar(9);


function calcularIMC(peso, altura){
  return peso/(altura * altura);
}

function getFactorial(numero){
  let factorial = 1;

  for(i=1;i<=numero;i++){
    factorial = factorial * i;
    console.log(i);
  }
  return factorial;
}

function conversorDivisas(dolares){
    return dolares * 4.80;
}

function calcularPerimetro(alto,ancho){
     let perimetro = alto + ancho;
    return perimetro;
}

function calcularArea(alto,ancho){
    let area = alto * ancho;
    return area;
}

function generarTablaMultiplicar(numero){
   let resultado = 0;
    for(var i = 1; i<=10; i++){
    resultado = numero * i;
    console.log(`${i} x ${numero} = ${resultado}`);
   }
}