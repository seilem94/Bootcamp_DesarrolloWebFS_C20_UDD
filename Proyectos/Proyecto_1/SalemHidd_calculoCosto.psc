Algoritmo SalemHidd_calculoCosto
    
	// Definicion de Variables básicas
    Definir precioOriginal, porcentajeDescuento, impuesto, peso, precioPeso, totalFinal, costoFijoEnvioNacional Como Real
    Definir cantidad Como Entero
    Definir destino Como Caracter
	Definir respuestaCupon como Cadena
	
    // Arreglos para descuentos y componentes del costo
    Definir descuentos, componentesCosto Como Real
    Dimension descuentos(2)         // [1]: cupón, [2]: por cantidad
    Dimension componentesCosto(4)   // [1]: subtotal, [2]: impuestos, [3]: descuentos totales, [4]: envío
	
	//Se nombran los indices del vector de Descuentos
    cuponDcto = 1
	cantDcto = 2
	
	//Se nombran los indices del vector de Costo
	costoSubtotal = 1
	costoImp = 2
	costoDesc = 3 
	costoEnvio = 4
	
	//Costos Fijos
	costoFijoEnvioNacional = 10 // Costo fijo de 10
    impuesto = 19 // IVA del 19%
	
	
    // Entrada de datos
    Escribir "Ingrese el precio original del producto:"
    Leer precioOriginal
	
    Repetir
		Escribir "¿Tiene cupón de descuento? (si/no):"
		Leer respuestaCupon
		respuestaCupon <- Minusculas(respuestaCupon)
		
		Si respuestaCupon <> "si" Y respuestaCupon <> "no" Entonces
			Escribir "ERROR: Responda solo con si o no."
		FinSi
	Hasta Que respuestaCupon = "si" O respuestaCupon = "no"
	
	Segun respuestaCupon Hacer
		"si":
			Repetir
				Escribir "Ingrese el porcentaje de descuento (entre 1 y 99):"
				Leer porcentajeDescuento
				
				Si porcentajeDescuento < 1 O porcentajeDescuento >= 100 Entonces
					Escribir "ERROR: El porcentaje debe estar entre 1 y 99."
				FinSi
			Hasta Que porcentajeDescuento >= 1 Y porcentajeDescuento < 100
			
			descuentos(cuponDcto) <- precioOriginal * (porcentajeDescuento / 100)
		"no":
			descuentos(cuponDcto) <- 0
	FinSegun

	
    // Subtotal después del descuento por cupón (precio unitario)
    componentesCosto(cuponDcto) <- precioOriginal - descuentos(cuponDcto)
	
    // Cantidad y descuento por cantidad
    Escribir "Ingrese la cantidad de artículos:"
    Leer cantidad
	
    Si cantidad > 10 Entonces
        descuentos(cantDcto) <- (componentesCosto(costoSubtotal) * cantidad) * 0.15 // 15% de descuento
    Sino
        Si cantidad > 5 Entonces
            descuentos(cantDcto) <- (componentesCosto(costoSubtotal) * cantidad) * 0.10 // 10%
        Sino
            Si cantidad >= 2 Entonces
                descuentos(cantDcto) <- (componentesCosto(costoSubtotal) * cantidad) * 0.05 // 5%
            Sino
                descuentos(cantDcto) <- 0
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
            componentesCosto(costoEnvio) <- costoFijoEnvioNacional + peso * 2
        "nacional":
            componentesCosto(costoEnvio) <- costoFijoEnvioNacional + peso * 3
        "internacional":
            componentesCosto(costoEnvio) <- 2 * costoFijoEnvioNacional + peso * 10
        De Otro Modo:
            Escribir "Destino no válido. Se usará tarifa nacional por defecto."
            componentesCosto(costoEnvio) <- costoFijoEnvioNacional + peso * 3
    FinSegun
	
    // Recalcular subtotal total (después de cupón y por cantidad)
    Definir subtotalTotal Como Real
    subtotalTotal <- (componentesCosto(costoSubtotal) * cantidad) - descuentos(cantDcto)
	
    // Calcular impuesto sobre el subtotal total
    componentesCosto(costoImp) <- subtotalTotal * (impuesto / 100)
	
    // Total de descuentos
    componentesCosto(costoDesc) <- descuentos(cuponDcto) + descuentos(cantDcto)
	
    // Cálculo del total final
    totalFinal <- subtotalTotal + componentesCosto(costoImp) + componentesCosto(costoEnvio)
	
    // Mostrar desglose
    Escribir "------- DETALLE DE COSTO FINAL -------"
    Escribir "Precio original unitario: $", precioOriginal
    Escribir "Descuento por cupón: -$", descuentos(cuponDcto)
    Escribir "Subtotal después del cupón: $", componentesCosto(costoSubtotal)
    Escribir "Cantidad de artículos: ", cantidad
    Escribir "Descuento por cantidad: -$", descuentos(cantDcto)
	Escribir "------------ POR PAGAR ---------------"
    Escribir "Subtotal total antes de impuestos: $", subtotalTotal
    Escribir "Impuestos (", impuesto, "%): $", componentesCosto(costoImp)
    Escribir "Costo de envío (", destino, "): $", componentesCosto(costoEnvio)
    Escribir "--------------------------------------"
    Escribir "TOTAL A PAGAR: $", totalFinal
    Escribir "--------------------------------------"	
FinAlgoritmo
