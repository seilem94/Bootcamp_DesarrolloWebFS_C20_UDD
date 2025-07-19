Algoritmo calcIMC
	Definir peso, altura, imc como real
	
	Escribir "Ingrese su peso en Kg."
	Leer peso
	
	Escribir "Ingrese su altura en Metros"
	Leer altura
	
	imc<- peso/(altura*altura)
	Escribir "Su IMC es: ", imc
	
	Si imc < 18.5 Entonces
		Escribir "Clasificación: Bajo Peso"
	SiNo
		Si imc < 24.9 Entonces
			Escribir "Clasificación: Peso Normal"
		SiNo
			Si imc < 29.9 Entonces
				Escribir "Clasificación: Sobrepeso"
			SiNo
				Escribir "Clasificación: Obesidad"
			Fin Si
		Fin Si
	Fin Si
	
	
FinAlgoritmo
