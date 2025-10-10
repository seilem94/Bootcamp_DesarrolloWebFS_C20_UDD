const stringChallenge = (str) => {

    //Hay que ingresar un texto y comprobar el formato XXX.XXX.XXX
    //const stringEntrada = prompt("Ingrese la cadena a evaluar:");
    str_nospaces = str.trim();
    const grupos = str_nospaces.split("."); //Separa la cadena en 3 partes.
    const numeros = grupos.join(""); // Une las partes en una sola cadena sin puntos.

    //Validaciones; se comprobara el largo del texto, que las posiciones [3] y [7] sean puntos y que el resto sean numeros.
    for (let i = 0; i < numeros.length; i++) {
        if (isNaN(numeros[i]) && numeros[i]!== "0") {
            //console.log(`El formato de la cadena debe ser XXX.XXX.XXX \n Donde cada 'X' es un dígito del 1 al 9 (sin ceros).`);
            console.log("false");
            return false;
        }
    }
    
    if (str_nospaces.length !== 11) {
        //console.log("Largo incorrecto. El formato de la cadena debe ser XXX.XXX.XXX");
        console.log("false");
        return false;
    }

    if (str_nospaces[3] !== "." || str_nospaces[7] !== ".") {
        //console.log("Los grupos de números deben estar separados por puntos. El formato de la cadena debe ser XXX.XXX.XXX");
        console.log("false");
        return false;
    }

    //Si la cadena es correcta, se procede a comprobar las condiciones para retornar true o false.
    //Utilizamos el arreglo 'grupos' para validar cada grupo de números.
    const grupos_parsed = grupos.map(grupo => parseInt(grupo, 10));
    
};

// 🔹 Captura argumento desde consola
const entrada = process.argv[2];
stringChallenge(entrada);
