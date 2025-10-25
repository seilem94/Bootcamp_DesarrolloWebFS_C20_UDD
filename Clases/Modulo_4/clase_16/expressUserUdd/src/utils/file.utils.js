import fs from 'fs/promises' //file system -> Modulo que permite gestionar la creación, manipulación y lectura de archivos con JS
import path from 'path'

/* 
Pasos para crear un archivo:

-> Asegurar una ruta de almacenaje o lectura ✅
-> Leer si es que hay un archivo ✅
-> Escribir el contenido que voy a agregar al archivo ✅
-> crear en el archivo✅
*/ 

export const asegurarRuta = async(rutaArchivo) => {
    try {
        console.log(rutaArchivo)
        const carpeta = path.dirname(rutaArchivo)
        await fs.mkdir(carpeta, { recursive: true }) // mkdir recursive true -> Revise si la carpeta ya esta
    } catch (error) {
        console.error('Error al segurar la ruta', error)
        throw new Error('Error al asegurar la ruta', error)
    }
}

export const leerArchivo = async (rutaArchivo) => {
    try {
        const data = await fs.readFile(rutaArchivo, 'utf-8') //Esto siempre se devuelve como un string
        return JSON.parse(data)
    } catch (error) {
        if(error.code === 'ENOENT') return ''
        console.error('Error al leer el archivo', error)
        throw new Error('Error al leer el archivo', error)
    }
}

export const escribirArchivo = async(rutaArchivo, data) => {
    try {
        const dataJson = JSON.stringify(data, null, 4);
        // Despues manejaremos datos como JSON
        await fs.writeFile(rutaArchivo, dataJson, 'utf-8')
    } catch (error) {
        console.error("Error al escribir el archivo", error);
        throw new Error("Error al escibir el archivo", error);
    }
}


//JSDocs
/**
 * Resumen - Esta función crea un archivo en la ruta especificada con la data enviada
 * en formato Objeto o JSON
 * @param {*} rutaArchivo - Ruta de donde se quiere crear el archivo de destino 
 * @param {*} data - Datos a escribir en el archivo. Puede ser un Array
 * @return {Promise<void>} Promesa que se resuelve cuando el archivo ha sido creado
 * @throws {Error} Lanza un error si ocurre un problema al crear el archivo
 * 
 */
export const crearArchivo = async(rutaArchivo, data) => {
    try {
        await asegurarRuta(rutaArchivo);
        const dataPrevia = await leerArchivo(rutaArchivo);

        if(!dataPrevia) await escribirArchivo(rutaArchivo, data)

        const todaData = [ ...dataPrevia, data ]

        await escribirArchivo(rutaArchivo, todaData);

        console.log("Archivo creado con éxito")
    } catch (error) {
        console.error("Error al crear el archivo", error);
        throw new Error("Error al crear el archivo", error);
    }
}