let pResultado = document.getElementById("resultado");
let primeiroNumero = document.getElementById("num1");
let segundoNumero = document.getElementById("num2");
let opcao = document.getElementById("select");

function calcular() {

    let num1 = parseFloat(primeiroNumero.value);
    let num2 = parseFloat(segundoNumero.value);

    if(isNaN(num1) || isNaN(num2)){
        return;
    }

    var opcao = select.options[select.selectedIndex].value;

    let subtracao = num1 - num2;
    let soma = num1 + num2;
    let multiplicacao = num1 * num2; 
    let divisao = num1 / num2; 

    if (opcao == "soma") {
        mostrarResultado(soma)
    } else if (opcao == "subtracao") {
        mostrarResultado(subtracao)
    } else if (opcao == "multiplicacao") {
        mostrarResultado((multiplicacao.toFixed(2)))
    }
    else if (opcao == "divisao") {
        if (num2 == 0) {
            alert("O divisor não pode ser 0")
        }
        else {
            mostrarResultado((divisao.toFixed(2)))
        }

    }

}
function mostrarResultado(valor) {
    pResultado.value = valor;
}

function limpar() {
    primeiroNumero.value = "";
    segundoNumero.value = "";
    pResultado.value = "";
    opcao.value = "";
}
