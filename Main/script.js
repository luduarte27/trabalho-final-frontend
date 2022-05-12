let pResultado = document.getElementById("resultado");
let primeiroNumero = document.getElementById("num1");
let segundoNumero = document.getElementById("num2");
let opcaoSelect = document.getElementById("select");
var historico = [];

function calcular() {

    let num1 = parseFloat(primeiroNumero.value);
    let num2 = parseFloat(segundoNumero.value);


    if (isNaN(num1) || isNaN(num2)) {
        return;
    }

    var opcaoValue = select.options[select.selectedIndex].value;
    let subtracao = num1 - num2;
    let soma = num1 + num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;

    let result = "";

    if (opcaoValue == "soma") {
        result = soma;
        mostrarResultado(soma)
    } else if (opcaoValue == "subtracao") {
        result = subtracao;
        mostrarResultado(subtracao)
    } else if (opcaoValue == "multiplicacao") {
        result = multiplicacao;
        mostrarResultado((multiplicacao.toFixed(2)))
    }
    else if (opcaoValue == "divisao") {
        if (num2 == 0) {
            alert("O divisor não pode ser 0")
        }
        else {
            result = divisao;
            mostrarResultado((divisao.toFixed(2)))
        }

    }

    let calculo = {
        num1: num1,
        num2: num2,
        opcaoValue: opcaoValue,
        resultado: result
    }
    historico.push(calculo)
    console.log(historico);
}


function mostrarResultado(valor) {
    pResultado.value = valor;
}

function limpar() {
    primeiroNumero.value = "";
    segundoNumero.value = "";
    pResultado.value = "";
    opcaoSelect.value = "";
}
