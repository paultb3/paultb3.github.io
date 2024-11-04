const form = document.getElementById('form');

let numberOne = form['numberOne'];
let numberTwo = form['numberTwo'];
let respuesta = 0;


function sumar(){
    respuesta = parseFloat(numberOne.value) + parseFloat(numberTwo.value);
    document.getElementById('respuesta').innerHTML = `La suma es: ${respuesta}`
}
function restar(){
 respuesta = parseFloat(numberOne.value) - parseFloat(numberTwo.value);
    document.getElementById('respuesta').innerHTML = `La resta es: ${respuesta}`
}

function multiplicar(){
    respuesta = parseFloat(numberOne.value) * parseFloat(numberTwo.value);
    document.getElementById('respuesta').innerHTML = `La multiplicacion es: ${respuesta}`
}

function dividir(){
    let MAX = parseFloat(numberOne.value);
    let MIN = parseFloat(numberTwo.value);


    if(MIN>0){
        respuesta = MAX/MIN;
        document.getElementById('respuesta').innerHTML = `La division es: ${respuesta}`
    }else{
        respuesta = "No se puede dividir";
        document.getElementById('respuesta').innerHTML = `${respuesta}`
    }


}


