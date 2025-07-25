let numeroSecreto = 0;
let intento =0;
let listaNumerosSecretos = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let valorIntento = parseInt(document.getElementById('valorUsuario').value);
    if (valorIntento===numeroSecreto){
        asignarTextoElemento('p',`Felicitaciones, acertaste al número en ${intento} ${intento == 1 ? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (valorIntento > numeroSecreto){
            asignarTextoElemento('p','El número secreo es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intento++;
        limpiarNumero();
    }
    return;
}

function devuelveNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumerosSecretos.length == numeroMaximo ){
        asignarTextoElemento('p', 'Has alcansado el número máximo de juegos posibles');
    } else {
        if (listaNumerosSecretos.includes(numeroGenerado)){
            return devuelveNumeroSecreto();
        } else {
            listaNumerosSecretos.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego Del Número Secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = devuelveNumeroSecreto();
    intento =1;
}

function reiniciarJuego(){
    limpiarNumero();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',true);
    return;
}

function limpiarNumero(){
    document.querySelector('#valorUsuario').value ='';
    return;
}



condicionesIniciales();
