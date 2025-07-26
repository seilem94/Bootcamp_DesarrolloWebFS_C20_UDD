function calculadora() {
    //pedimos al usuario que ingrese la operacion deseada.
    // promt es las pantallitas que te dan las web.
    const operacion = prompt(
        `Ingrese la operación deseada (suma, resta, multiplicación, dividir):`
    ).toLowerCase();

    const input1 = prompt(`ingresa nume1`);
    const input2 = prompt(`ingresa nume2`);

    // convertir todo a nuemros
    const num1 = parseFloat(input1); 
    const num2 = parseFloat(input2);

    // validar que sean todos numeros
    if (isNaN(num1) || isNaN(num2)) {
        // isNaN significa que not a number
        console.log(`Por favor, ingrese números válidos.`); // console.log es para imprimir en la consola.
        return;
    }
    let resultado;

    switch (
    operacion // switch le explica a la app como hacer las opeciones, siemrpe que hay switch hay case.
    ) {
        case `suma`: // case es como un if, pero para varias opciones.
            resultado = num1 + num2;
            break; // break es para salir del switch.
        case `resta`:
            resultado = num1 - num2;
            break;
        case `multiplicacion`:
            resultado = num1 * num2;
            break;
        case `dividir`: // este caso es mas complejo porque no se puede dividir por cero.
            // validamos que no se divida por cero
            if (num2 === 0) {
                console.log(`No se puede dividir por cero.`);
                return;
            }
            resultado = num1 / num2;
            break;
        default: // default es como el else, si no se cumple ningun case.
            // si no se cumple ningun case, se ejecuta este bloque.
            console.log(
                `Operación no válida. Por favor, ingrese una operación válida (suma, resta, multiplicación, dividir).`
            );
            return;
    }
    console.log(`El resultado de la ${operacion} es: ${resultado}`);
    return; // return es para salir de la funcion.
}

calculadora(); // llamamos a la funcion calculadora para que se ejecute.
