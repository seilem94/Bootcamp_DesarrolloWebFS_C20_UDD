function saludo() {
    const idiomas = {
        'ingles': { hola: 'Hello', adios: 'Goodbye' },
        'portugues': { hola: 'Olá', adios: 'Adeus' },
        'frances': { hola: 'Bonjour', adios: 'Au revoir' },
        'italiano': { hola: 'Ciao', adios: 'Addio' },
        'aleman': { hola: 'Hallo', adios: 'Auf Wiedersehen' },
        'japones': { hola: 'Konnichiwa', adios: 'Sayonara' },
        'nihongo': { hola: 'こんにちは', adios: 'さようなら' }
    };

    let continuar = true;
    while (continuar) {
        
        let idioma = prompt(
            '¿En qué idioma quieres saludar? Opciones: ingles, portugues, frances, italiano, aleman, japones (o nihongo)'
        );
        if (!idioma) return;
        idioma = idioma.toLowerCase();

        let saludoTexto = '';
        let despedidaTexto = '';
        switch (idioma) {
            case 'ingles':
                saludoTexto = idiomas.ingles.hola;
                despedidaTexto = idiomas.ingles.adios;
                break;
            case 'portugues':
                saludoTexto = idiomas.portugues.hola;
                despedidaTexto = idiomas.portugues.adios;
                break;
            case 'frances':
                saludoTexto = idiomas.frances.hola;
                despedidaTexto = idiomas.frances.adios;
                break;
            case 'italiano':
                saludoTexto = idiomas.italiano.hola;
                despedidaTexto = idiomas.italiano.adios;
                break;
            case 'aleman':
                saludoTexto = idiomas.aleman.hola;
                despedidaTexto = idiomas.aleman.adios;
                break;
            case 'japones':
                saludoTexto = idiomas.japones.hola;
                despedidaTexto = idiomas.japones.adios;
                break;
            case 'nihongo':
                saludoTexto = idiomas.nihongo.hola;
                despedidaTexto = idiomas.nihongo.adios;
                break;
            default:
                alert('Idioma no reconocido. Intenta de nuevo.');
                continue;
        }

        alert(saludoTexto);

        let opcion = prompt('¿Quieres despedirte en el mismo idioma? (si/no) o volver a saludar en otro idioma (otro)');
        if (!opcion) return;
        opcion = opcion.toLowerCase();
        switch (opcion) {
            case 'si':
                alert(despedidaTexto);
                continuar = false;
                break;
            case 'no':
                continuar = false;
                break;
            case 'otro':
                continuar = true;
                break;
            default:
                alert('Opción no reconocida. Terminando.');
                continuar = false;
        }
    }
}
