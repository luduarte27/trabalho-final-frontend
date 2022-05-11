let h1Resultado = document.getElementById("resultado");
let primeiroNumero = document.getElementById("num1");
let segundoNumero = document.getElementById("num2");
let opcao = document.getElementById("select");

function calcular() {

    let num1 = parseFloat(primeiroNumero.value);
    let num2 = parseFloat(segundoNumero.value);

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
        mostrarResultado(multiplicacao)
    }
    else if (opcao == "divisao") {
        let continuar = true;
        if (num2 == 0) {
            mostrarResultado("O divisor não pode ser 0")
        }
        else {
            mostrarResultado(divisao)
        }

    }

}
function mostrarResultado(valor) {
    if (isNaN(valor)) {
        h1Resultado.textContent = ("");
    } else {
        h1Resultado.textContent = ("Resultado: " + valor);
    }
}
function limpar() {
    primeiroNumero.value = "";
    segundoNumero.value = "";
    h1Resultado.textContent = "";
    opcao.value = "";
}
