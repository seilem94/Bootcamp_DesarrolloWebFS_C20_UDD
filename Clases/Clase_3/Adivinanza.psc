Algoritmo Adivinanza
	Definir numeroSecreto, ingresadoUser,cantIntento como Entero
	numeroSecreto <- Aleatorio(1,10)
	cantIntento <- 0
	ingresadoUser <- -1
	
	Escribir "Adivina el n�mero del 1 a 10"
	
	Repetir
		Escribir "Ingresa un n�mero: "
		Leer ingresadoUser
		cantIntento <- cantIntento +1
		
		Si ingresadoUser < numeroSecreto
			Escribir "El n�mero ingresado es menor, intente nuevamente"
		FinSi
		Si ingresadoUser > numeroSecreto
			Escribir "El n�mero ingresado es mayor, intente nuevamente"
		SiNo
			Escribir "Felicidades, adivinaste el n�mero secreto ", numeroSecreto
		FinSi
		
	Hasta Que ingresadoUser = numeroSecreto
	
	
	
FinAlgoritmo
