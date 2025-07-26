Algoritmo Calc_dctos_pagos
	
	Definir nombre_producto Como Cadena 
	Definir precio_unitario, descuento, cantidad, subtotal, monto_pagar, total, cambio, alternativa como entero
	dcto10 = 10
	dcto20 = 30
	dcto30 = 50
	
	Escribir "Porfavor, ingrese nombre del producto"
	Leer nombre_producto
	Escribir "Ingrese el precio unitario del producto anterior"
	Leer precio_unitario
	Escribir "Ingrese cantidad a comprar"
	Leer cantidad
	
	subtotal <- precio_unitario*cantidad
	
	Si cantidad >= dcto10 y cantidad < dcto20 Entonces
		descuento <- subtotal*0.1
		total <- subtotal - descuento 
	SiNo
		Si cantidad >= dcto20 y cantidad < dcto30 Entonces
			descuento <- subtotal*0.2
			total <- subtotal - descuento 
		SiNo
			Si cantidad >= dcto30 Entonces
				descuento <- subtotal*0.3
				total <- subtotal - descuento 
			SiNo
				descuento <- 0
				total <- subtotal
			Fin Si
		Fin Si
	Fin Si
	
	Escribir "El total a pagar es de $", total
	

	Repetir
		Escribir "Ingrese el monto a pagar"
		Leer monto_pagar
		cambio <- monto_pagar-total
		
		Si cambio < 0 Entonces
			Escribir "El pago es insuficiente, porfavor completar la diferencia de $", cambio-cambio-cambio
		Fin Si
	Hasta Que cambio >= 0

	Si cambio = 0 Entonces
		alternativa <- 1
	SiNo
		alternativa <- 2
	Fin Si
	
	Segun alternativa Hacer
		1:
			Escribir "Gracias por su compra"
		2:
			Escribir "Gracias por su compra. Su cambio es de $", cambio
		De Otro Modo:
			Escribir "Hubo un error en el proceso, porfavor, ingrese nuevamente los datos"
	Fin Segun
	
	Escribir ""
	Escribir "--------Resumen Compra----------"
	Escribir "Producto: " producto
	Escribir "Cantidad Comprada: ",cantidad
	Escribir "Subtotal $", subtotal
	Escribir "Dscto. Aplicado $", descuento 
	Escribir "Total a pagar $", total
	si cambio > 0 Entonces
		Escribir "Cambio $", cambio
	FinSi
	Escribir "--------------------------------"
FinAlgoritmo
