let listaGenerica = [];
console.log(listaGenerica);
let lenguajesProgramacion = ["Java","Ruby","GoLang"];
let arrayNumeros1 = [1,5,6,8,3,9,7,1];
let arrayNumeros2 = [6,7,1,8,9,3,1,2];

console.log(lenguajesProgramacion);
mostrarElementosLista();
mostrarElementosListaInverso();
generarPromedioLista();
numeroGrandeYPequenio();
sumarElementosLista();
encontrarNumero(45);
console.log(sumarDosListas(arrayNumeros1,arrayNumeros2));
console.log(generarListaCuadrados(arrayNumeros2));


function mostrarElementosLista(){
    console.log('mostrarElementosLista');
    lenguajesProgramacion.forEach(function (elemento, indice,array){
        console.log(elemento,indice);
    });
}

function mostrarElementosListaInverso(){
    let elementosArreglo = lenguajesProgramacion.length - 1;
    console.log('mostrarElementosListaInverso');
    while(elementosArreglo >= 0){
        console.log(lenguajesProgramacion[elementosArreglo]);
        elementosArreglo--;
    }
}

function generarPromedioLista(){
    let arrayNumeros = [1,5,6,8,5,9,10,1];
    let promedio = 0;
    arrayNumeros.forEach(function (elemento, indice,array){
        //console.log(elemento,indice);
        promedio += elemento;
    });
    promedio = promedio/arrayNumeros.length;
    console.log(promedio);
}

function numeroGrandeYPequenio(){
    let arrayNumeros = [1,5,6,8,5,9,10,1];
    let arregloOrdenado = arrayNumeros.sort(function(a,b){
        return a-b;
    });
    console.log('Numero grande y pequeño');
    console.log(arregloOrdenado);
    console.log('Numero menor: ' + arregloOrdenado[0]);
    console.log('Numero mayor: ' + arregloOrdenado[arregloOrdenado.length-1]); 
}

function sumarElementosLista(){
    let arrayNumeros = [1,5,6,8,5,9,10,1];
    let resultado = 0;
    arrayNumeros.forEach(function (elemento, indice,array){
        console.log(elemento,indice);
        resultado += elemento;
    });
    console.log(resultado);
}

function encontrarNumero(numero){
    let arrayNumeros = [1,5,6,8,6,9,10,1];
    console.log(`indice de numero encontrado ${arrayNumeros.indexOf(numero)}`);

}

function sumarDosListas(arrayNumeros1, arrayNumeros2){
    let resultado = [];
    let suma = 0;

    arrayNumeros1.forEach(function (elemento, indice,array){
        resultado.push(arrayNumeros1[indice] + arrayNumeros2[indice]);
    });    
   /* for(var i=0; i<=arrayNumeros1.length; i++){
        //suma = ;
        resultado.push(arrayNumeros1[i] + arrayNumeros2[i]);
    }*/

    return resultado;
}


function generarListaCuadrados(arrayNumeros){
    let resultado = [];
    
    arrayNumeros.forEach(function (elemento, indice,array){
        console.log(elemento,indice);
        resultado.push(elemento*elemento);
    });    
    return resultado;
}



