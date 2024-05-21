const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculadora(valor1, valor2, operacao) {
    switch (operacao) {
        case 'soma':
            return valor1 + valor2;
        case 'subtracao':
            return valor1 - valor2;
        case 'multiplicacao':
            return valor1 * valor2;
        case 'divisao':
            if (valor2 !== 0) {
                return valor1 / valor2;
            } else {
                return 'Erro: Divisão por zero';
            }
        default:
            return 'Erro: Operação inválida';
    }
}

rl.question('Digite o primeiro valor: ', (input1) => {
    const valor1 = parseFloat(input1);
    
    rl.question('Digite o segundo valor: ', (input2) => {
        const valor2 = parseFloat(input2);
        
        rl.question('Digite a operação (soma, subtracao, multiplicacao, divisao): ', (operacao) => {
            const resultado = calculadora(valor1, valor2, operacao);
            console.log(`Resultado: ${resultado}`);
            
            rl.close();
        });
    });
});
