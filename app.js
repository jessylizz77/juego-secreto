
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


condicionesIniciales();
console.log(numeroSecreto);

/* Recibe dos parametros el elemento html y el texto
* que se colocará en ese elemento 
*/
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

/**
 * Verifica que el número ingresado por el usuario
 * sea igual al número secreto generado aleatoriamente.
 * @returns 
 */
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
   // let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value;
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    
    let numeroGenerado =  Math.floor(Math.random()* numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los número
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los número posibles');
    }else{
         //Si el numero generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }
        else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!!!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto  = generarNumeroSecreto();
    intentos = 1;
    document.getElementById('reiniciar').setAttribute('disabled','true');
}
