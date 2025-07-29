
# Proyecto 1

Algoritmo de calculo de costos , incluyendo cupones de descuento, descuento por cantidad, impuestos a pagar y envío.
Todo el detalle de cobros se desglosan e imprimen en pantalla.
Esta pensado para calcular los valores en dolares, ya que el costo fijo del envío es de $10 (o $20)

## Descripcion General

En el codigo primero se definen las variables a utilizar. 
Luego se definen los arreglos de "componentesCosto" y "descuentos" con sus respectivas dimensiones. Se almacenan aca las variables dados que existen distintos cobros, los cuales pueden ser agrupados en un vector. En el caso de los descuentos, esta el descuento por cantidad y por cupón.

Despues de solicitar todos los datos, el algoritmo arroja el desglose de los costos subtotales, impuesto, y envío. Estos los imprime en pantalla, junto con el total a pagar en la última línea.

Importante recalcar que acá no importa el producto que sea, ya que es una calculadora de costos en general, aplicable a cualquier producto en cuestion. La única limitante es que se realiza el calculo por producto. Si se quisiera calcular más de un producto, hay que repetir el algoritmo.



### Descuento por Cupon
Se pregunta si existe un cupón a aplicar. Se debe escribir si o no.
En caso de que la respuesta sea si, preguntará el % de descuento, por lo que hay que escribir un número entre 0 y 100 (exclusivos).

Se verifica que la respuesta si o no exclusivamente. Tambien verifica que el cupon sea un numero entero en 1 y 99. Proporciona un mensaje de error claro si el valor ingresado es incorrecto, y evitando que el programa se "caiga"/"cuelgue" en caso de haber una respuesta incorrecta. Esto se logró implementando cada caso con una sentencia tipo "Segun .. Hacer"

### Descuento por cantidad
Más de 2 artículos: 5% de descuento

Más de 5 artículos: 10% de descuento

Más de 10 artículos: 15% de descuento

### Impuestos
El impuesto se calcula posteriormente a aplicar todos los descuentos, en caso de que hubiesen.

El impuesto es del 19% considerando el caso del IVA chileno.



### Envío
El envío tiene dos variables: Tipo de envío (local/nacional/internacional) y peso.

Local y Nacional tienen el mismo costo fijo, y varía su costo de envío por kilogramo. en el envío local es $2 x Kg, en cambio en el envío nacional es de $3 x Kg.

El envío internacional tiene un costo fijo del doble de costo fijo nacional, y $10 x Kg. No se consideran aranceles de internación.

### Desglose
El desglose tiene el siguiente formato:

    ------- DETALLE DE COSTO FINAL -------"
    Precio original unitario: $
    Descuento por cupón: -$
    Subtotal después del cupón: $
    Cantidad de artículos: 
    Descuento por cantidad: -$
	------------ POR PAGAR ---------------"
    Subtotal total antes de impuestos: $
    Impuestos (", impuesto, "%): $
    Costo de envío (", destino, "): $
    --------------------------------------"
    TOTAL A PAGAR: $
    --------------------------------------"		