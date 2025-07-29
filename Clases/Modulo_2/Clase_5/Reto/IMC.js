function calculadoraIMC() {

    //pedimos al usuario que ingrese los datos necesarios para calcular el IMC
    const pesoStr = prompt("Por favor, ingrese su peso (kg):");             
    const alturaStr = prompt("Por favor, ingrese su altura (m):");

    // convertir todo a números
    const peso = parseFloat(pesoStr);
    const altura = parseFloat(alturaStr);

    // validar que sean todos numeros
    if (isNaN(peso) || isNaN(altura)) {
        // isNaN significa que not a number
        console.log(`Por favor, ingrese números válidos.`); 
        return;
    }
    let resultado;  

    // calcular el IMC
    const imc = peso / (altura * altura);
    
    // Clasificar el IMC según los rangos de la OMS
    let clasificacion;
    if (imc < 18.5) {
        clasificacion = "Por debajo del peso normal";
    } else if (imc >= 18.5 && imc < 24.9) {
        clasificacion = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        clasificacion = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        clasificacion = "Obesidad grado 1";
    } else if (imc >= 35 && imc < 39.9) {
        clasificacion = "Obesidad grado 2";
    } else {
        clasificacion = "Obesidad grado 3";
    }

    // Mostrar el resultado con dos decimales
    console.log(`Su IMC es: ${imc.toFixed(2)}\n`);
    console.log(`Usted se encuentra en el rango de ${clasificacion.toLowerCase()}.`);
}

calculadoraIMC(); // llamamos a la funcion calculadora para que se ejecute.