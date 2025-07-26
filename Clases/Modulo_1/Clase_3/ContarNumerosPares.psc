Algoritmo ContarNumerosPares
	
	Definir numeroArray, i, pares, impares Como Entero
	Dimension numeroArray[10]
	
	pares <- 0
	impares <- 0
	
	Para i<-1 hasta 10 Hacer
		Escribir "Ingrese número entero: "
		Leer numeroArray[i]
		Escribir i
		
		Si numeroArray[i] MOD 2 = 0
			pares <- pares +1
		SiNo
			impares <- impares+1			
		FinSi
	FinPara
	
	Escribir "Cantidad de numero pares ", pares
	Escribir "Cantidad de números impares ", impares
FinAlgoritmo
