mostrarSaludo();
let nombre = prompt('Ingresa tu nombre: ')
mostrarSaludo2(nombre);

let numero = parseInt(prompt('Ingresa un numero'));
console.log(generarCuadradoNumero(numero));

numero = parseInt(prompt('Ingresa un numero: '));
let numero2 = parseInt(prompt('Ingresa un numero 2: '));
let numero3 = parseInt(prompt('Ingresa un numero 3: '));
console.log(generarPromedio(numero,numero2,numero3));

numero = parseInt(prompt('Ingresa un numero: '));
numero2 = parseInt(prompt('Ingresa un numero 2: '));
console.log(numeroMayor(numero,numero2));

function mostrarSaludo(){
    console.log('Hola mundo');
    return;
}

function mostrarSaludo2(nombre){
    console.log(`¡Hola, ${nombre}!`);
}

function calcularDoble(numero) {
    return numero * 2;
  }

function generarCuadradoNumero(numero){
    let numeroCuadrado = numero * numero;
    return numeroCuadrado;
}

function generarPromedio(numero1, numero2, numero3){
   return (numero1 + numero2 + numero3)/3;
}

function numeroMayor(numero1,numero2){
   
   return numero1 > numero2 ? numero1 : numero2;
    /* if(numero1 > numero2){
        return numero1;
    }else{
        return numero2;
    }*/
}

function solicitarNumero(){
    let numero = parseInt(prompt('Ingresa un numero'));
    return numero;
}