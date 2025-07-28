Algoritmo SalemHidd_calculoCosto
    // Variables básicas
    Definir precioOriginal, porcentajeDescuento, impuesto, peso, precioPeso, totalFinal, costoFijoEnvioNacional Como Real
    Definir cantidad Como Entero
    Definir tieneCupon Como Logico
    Definir destino Como Caracter
	
    // Arreglos para descuentos y componentes del costo
    Definir descuentos, componentesCosto Como Real
    Dimension descuentos(2)         // [1]: cupón, [2]: por cantidad
    Dimension componentesCosto(4)   // [1]: subtotal, [2]: impuestos, [3]: descuentos totales, [4]: envío
	
    costoFijoEnvioNacional <- 10 // Costo fijo de 10
    impuesto <- 19 // IVA del 19%
	
    // Entrada de datos
    Escribir "Ingrese el precio original del producto:"
    Leer precioOriginal
	
    Escribir "¿Tiene cupón de descuento? (Verdadero/Falso):"
    Leer tieneCupon
	
    Si tieneCupon Entonces
        Repetir
            Escribir "Ingrese el porcentaje de descuento (entre 1 y 99):"
            Leer porcentajeDescuento;
			
            Si porcentajeDescuento < 1 O porcentajeDescuento >= 100 Entonces
                Escribir "ERROR: El porcentaje debe estar entre 1 y 99."
            FinSi
        Hasta Que porcentajeDescuento >= 1 Y porcentajeDescuento < 100;
		
        descuentos(1) <- precioOriginal * (porcentajeDescuento / 100);
    Sino
        descuentos(1) <- 0;
    FinSi
	
    // Subtotal después del descuento por cupón (precio unitario)
    componentesCosto(1) <- precioOriginal - descuentos(1)
	
    // Cantidad y descuento por cantidad
    Escribir "Ingrese la cantidad de artículos:"
    Leer cantidad
	
    Si cantidad > 10 Entonces
        descuentos(2) <- (componentesCosto(1) * cantidad) * 0.15 // 15% de descuento
    Sino
        Si cantidad > 5 Entonces
            descuentos(2) <- (componentesCosto(1) * cantidad) * 0.10 // 10%
        Sino
            Si cantidad >= 2 Entonces
                descuentos(2) <- (componentesCosto(1) * cantidad) * 0.05 // 5%
            Sino
                descuentos(2) <- 0
            FinSi
        FinSi
    FinSi
	
    // Costo de envío
    Escribir "Ingrese el destino (local/nacional/internacional):"
    Leer destino
	
    Escribir "Ingrese el peso del paquete (en kg):"
    Leer peso
	
    Segun destino Hacer
        "local":
            componentesCosto(4) <- costoFijoEnvioNacional + peso * 2
        "nacional":
            componentesCosto(4) <- costoFijoEnvioNacional + peso * 3
        "internacional":
            componentesCosto(4) <- 2 * costoFijoEnvioNacional + peso * 10
        De Otro Modo:
            Escribir "Destino no válido. Se usará tarifa nacional por defecto."
            componentesCosto(4) <- costoFijoEnvioNacional + peso * 3
    FinSegun
	
    // Recalcular subtotal total (después de cupón y por cantidad)
    Definir subtotalTotal Como Real
    subtotalTotal <- (componentesCosto(1) * cantidad) - descuentos(2)
	
    // Calcular impuesto sobre el subtotal total
    componentesCosto(2) <- subtotalTotal * (impuesto / 100)
	
    // Total de descuentos
    componentesCosto(3) <- descuentos(1) + descuentos(2)
	
    // Cálculo del total final
    totalFinal <- subtotalTotal + componentesCosto(2) + componentesCosto(4)
	
    // Mostrar desglose
    Escribir "------- DETALLE DE COSTO FINAL -------"
    Escribir "Precio original unitario: $", precioOriginal
    Escribir "Descuento por cupón: -$", descuentos(1)
    Escribir "Subtotal después del cupón: $", componentesCosto(1)
    Escribir "Cantidad de artículos: ", cantidad
    Escribir "Descuento por cantidad: -$", descuentos(2)
    Escribir "Subtotal total antes de impuestos: $", subtotalTotal
    Escribir "Impuestos (", impuesto, "%): $", componentesCosto(2)
    Escribir "Costo de envío (", destino, "): $", componentesCosto(4)
    Escribir "--------------------------------------"
    Escribir "TOTAL A PAGAR: $", totalFinal
    Escribir "--------------------------------------"	
FinAlgoritmo
