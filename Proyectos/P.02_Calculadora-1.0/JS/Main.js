"const form = document.getElementById('form');

let numberOne = form['numberOne'];
let numberTwo = form['numberTwo'];
let respuesta = 0;

function validar(respuesta){
    if(isNaN(respuesta)){
        return respuesta = "No se puede realizar la operacion, ingrese numeros"
    }else{
        return respuesta;
    }
}



function sumar(){
    respuesta = parseFloat(numberOne.value) + parseFloat(numberTwo.value);
    respuesta = validar(respuesta);
    document.getElementById('respuesta').innerHTML = `Respuesta: ${respuesta}`
}
function restar(){
 respuesta = parseFloat(numberOne.value) - parseFloat(numberTwo.value);
 respuesta = validar(respuesta);
    document.getElementById('respuesta').innerHTML = `Respuesta: ${respuesta}`
}

function multiplicar(){
    respuesta = parseFloat(numberOne.value) * parseFloat(numberTwo.value);
    respuesta = validar(respuesta);
    document.getElementById('respuesta').innerHTML = `Respuesta: ${respuesta}`
}

function dividir(){
    let MAX = parseFloat(numberOne.value);
    let MIN = parseFloat(numberTwo.value);

    respuesta = validar(MIN);
    document.getElementById('respuesta').innerHTML = `Respuesta: ${respuesta}`

    if(MIN>0){
        respuesta = MAX/MIN;
        respuesta = validar(respuesta);
        document.getElementById('respuesta').innerHTML = `Respuesta: ${respuesta}`
    }else{
        respuesta = "No se puede dividir";
        document.getElementById('respuesta').innerHTML = `${respuesta}`
    }


}


