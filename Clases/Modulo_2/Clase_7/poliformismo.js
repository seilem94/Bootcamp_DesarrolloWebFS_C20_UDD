class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    vender(cantidad) {
        if (cantidad <= this.stock) {
            this.stock -= cantidad;
            console.log(`Se han vendido ${cantidad} unidades de ${this.nombre}`);
        } else {
            console.log(`No hay suficiente stock de ${this.nombre}`);
        }
    }

}


//child

class Serie extends Producto {
    constructor(nombre, precio, stock, temporadas) {
        super(nombre, precio, stock);
        this.temporadas = temporadas;
    }

    verEpisodio(numTemporada, numEpisodio) {
        const temporadaIndex = numTemporada - 1;
        const episodioIndex = numEpisodio - 1;

        if (this.temporadas[temporadaIndex] && this.temporadas[temporadaIndex][episodioIndex]) {
            const episodio = this.temporadas[temporadaIndex][episodioIndex];
            if(!episodio.visto) {
                episodio.visto = true;
                console.log(`Has visto el episodio ${episodio.nombre} de la temporada ${numTemporada} de ${this.nombre}`);
            } else {
                console.log(`Ya has visto el episodio ${episodio.nombre} ya ha sido visto.`);
            }  
        } else {
            console.log(`El episodio ${numEpisodio} de la temporada ${numTemporada} de ${this.nombre} no existe.`);
        }
    }
}