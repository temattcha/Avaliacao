function ordemCrescente() {
    var v1 = parseInt(document.getElementById('v1').value);
    var v2 = parseInt(document.getElementById('v2').value);

    if (v1 > v2){
        document.getElementById('result').innerHTML = v2 + ", " + v1;
    }else if ((v2 > v1) || (v1 == v2) ){
        document.getElementById('result').innerHTML = v1 + ", " + v2;
    }
}

function pesoIdeal() {
    var altura = parseInt(document.getElementById('altura').value);
    var pesoMasculino = (0.727 * altura) - 58;
    var pesoFeminino = (0.621 * altura) - 44.7;
    var genero = document.getElementById('genero').value;

    if (genero === "m"){
    document.getElementById('result').innerHTML = pesoMasculino.toFixed(2) + "kg";
    }else if (genero === "f") {
        document.getElementById('result').innerHTML = pesoFeminino.toFixed(2) + "kg";
    }
 }

 function mostraMenor() {
    var v1 = parseInt(document.getElementById('v1').value);
    var v2 = parseInt(document.getElementById('v2').value);
    var v3 = parseInt(document.getElementById('v3').value);

    if ((v1 < v2) && (v1 < v3)){
        document.getElementById('result').innerHTML = v1;
    }else if ((v2 < v1) && (v2 < v3)){
        document.getElementById('result').innerHTML = v2;
    }else if ((v3 < v1) && (v3 < v2)){
        document.getElementById('result').innerHTML = v3;
    }
}

function mostraValor() {
    var v1 = parseInt(document.getElementById('v1').value);
    var resultado = v1 % 2 == 0 ? 'par' : 'ímpar';
    
    if (!v1){
        document.getElementById('result').innerHTML = "";
    }else if (v1 < 0){
        document.getElementById('result').innerHTML = v1;
    }else {
        document.getElementById('result').innerHTML = "O número " + v1 + " é " + resultado;
    }
}

function mostraDivisibilidade2ou3() {
    var v1 = parseInt(document.getElementById('v1').value);
    
    if (!v1){
        document.getElementById('result').innerHTML = "";
    }else if ((v1 % 2 == 0) && (v1 % 3 == 0)){
        document.getElementById('result').innerHTML = v1 + " é divisível por 2 e 3.";
    }else {
        document.getElementById('result').innerHTML = v1 + " não é divisível por 2 e 3.";
    }
}

function mostraDivisibilidade2e7() {
    var v1 = parseInt(document.getElementById('v1').value);
    
    if (!v1){
        document.getElementById('result').innerHTML = "";
    }else if ((v1 % 2 == 0) && (v1 % 7 == 0)){
        document.getElementById('result').innerHTML = v1 + " é divisível por 2 e 7.";
    }else if (v1 % 2 == 0){
        document.getElementById('result').innerHTML = v1 + " é divisível por 2.";
    }else if (v1 % 7 == 0){
        document.getElementById('result').innerHTML = v1 + " é divisível por 7.";
    }else {
        document.getElementById('result').innerHTML = v1 + " não é divisível por 2 nem 7.";
    }
}

function mostraDiaSemana() {
    var valor = parseInt(document.getElementById('valor').value);
    
    switch(valor) {
        case (1):
        document.getElementById('result').innerHTML = "Domingo";
        break;
        case (2):
        document.getElementById('result').innerHTML = "Segunda-feira";
        break;
        case (3):
        document.getElementById('result').innerHTML = "Terça-feira";
        break;
        case (4):
        document.getElementById('result').innerHTML = "Quarta-feira";
        break;
        case (5):
        document.getElementById('result').innerHTML = "Quinta-feira";
        break;
        case (6):
        document.getElementById('result').innerHTML = "Sexta-feira";
        break;
        case (7):
        document.getElementById('result').innerHTML = "Sábado";
        break;
        default:
        document.getElementById('result').innerHTML = "Valor inválido.";
    }
}

function somaPares() {
    let soma = 0;
    for (let i = 0; i <= 20; i += 2){
        soma += i;
    }
    document.getElementById('result').innerHTML = soma;
}

function tabuada() {
    var valor = parseInt(document.getElementById('valor').value);
    
    if (!valor){
        document.getElementById('result').innerHTML = "";    
    }else{document.getElementById('result').innerHTML = "1 x " + valor + " = " + 1*valor + "<br>" +
                                                        "2 x " + valor + " = " + 2*valor + "<br>" +
                                                        "3 x " + valor + " = " + 3*valor + "<br>" +
                                                        "4 x " + valor + " = " + 4*valor + "<br>" +
                                                        "5 x " + valor + " = " + 5*valor + "<br>" +
                                                        "6 x " + valor + " = " + 6*valor + "<br>" +
                                                        "7 x " + valor + " = " + 7*valor + "<br>" +
                                                        "8 x " + valor + " = " + 8*valor + "<br>" +
                                                        "9 x " + valor + " = " + 9*valor + "<br>" +
                                                        "10 x " + valor + " = " + 10*valor;
    }
}

function fatorial() {
    var valor = parseInt(document.getElementById('valor').value);
    
    if (!valor){
        document.getElementById('result').innerHTML = "";    
    }else if(valor < 0){
        document.getElementById('result').innerHTML = "Insira um valor positivo.";
    }else{
        var fatorial = valor;
        var resultado = fatorial;
        for (var i = 1; i < fatorial; i++) {
            resultado *= i;
        }
        document.getElementById('result').innerHTML = "O fatorial de " + valor + " é: " + resultado;
    }
}