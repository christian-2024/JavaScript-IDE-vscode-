const wage = parseFloat(prompt("Digite o valor do salário: "));
const valore = parseFloat(prompt("Digite o valor do beneficio: "));

const impost = calcularImposto(wage);

const exit = wage - impost + valore;
console.log(exit.toFixed(2));

function calcularImposto(wage){
    let aliquota;
    if (wage >= 0 && wage <= 1100){
        aliquota = 0.05;
    } else if (wage >= 1100 && wage <= 2500){
        aliquota = 0.10;
    } else {
        aliquota = 0.15;
    }
    return aliquota * wage;
}