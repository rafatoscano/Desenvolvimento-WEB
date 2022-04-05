function calculadora(operando1, operando2, operador) {
    operando1 = Number(operando1);
    operando2 = Number(operando2);
    switch (operador) {
        case '+':
            return operando1 + operando2;
        case '-':
            return operando1 - operando2;
        case '*':
            return operando1 * operando2;
        case '/':
            return operando1 / operando2;
    }
}

export default calculadora;