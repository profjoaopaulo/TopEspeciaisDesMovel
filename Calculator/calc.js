function somar() {

    //document é um objeto que representa a página Web
    //através de seu método, getElementById(), pode-se pegar a referência de um 
    //elemento na página HTML
    var v1 = document.getElementById("v1");
    var v2 = document.getElementById("v2");

    //parseFloat() converte a string para float e assim pode-se efetuar o cálculo
    var res = parseFloat(v1.value) + parseFloat(v2.value);

    //innerHTML permite editar o próprio elemento HTML
    document.getElementById("resultado").innerHTML = "Resultado: " + res;
}

function subtrair() {

    var v1 = document.getElementById("v1");
    var v2 = document.getElementById("v2");

    var res = parseFloat(v1.value) - parseFloat(v2.value);

    document.getElementById("resultado").innerHTML = "Resultado: " + res;
}

function multiplicar() {

    var v1 = document.getElementById("v1");
    var v2 = document.getElementById("v2");

    var res = parseFloat(v1.value) * parseFloat(v2.value);

    document.getElementById("resultado").innerHTML = "Resultado: " + res;
}

function dividir() {

    var v1 = document.getElementById("v1");
    var v2 = document.getElementById("v2");

    var res = parseFloat(v1.value) / parseFloat(v2.value);

    document.getElementById("resultado").innerHTML = "Resultado: " + res;
}

