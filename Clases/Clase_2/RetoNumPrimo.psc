Algoritmo RetoNumPrimo
	Definir numeroUsuario, i como entero
	uno = 1
	dos = 2
	
	Escribir "Ingrese un n�mero para saber si es primo o no"
	Leer numeroUsuario
	
	si numeroUsuario <= uno Entonces
		Escribir "Ingrese un n�mero mayor a 1"
	FinSi
	
	si numeroUsuario > dos Entonces
		Para i <- dos Hasta numeroUsuario Hacer
			si numeroUsuario <> i Entonces
				Si numeroUsuario MOD i = 0 Entonces
					
				FinSi
				Escribir " "
			Sino
				Si numeroUsuario MOD i = 0 Entonces
					Escribir "El n�mero ", numeroUsuario " es primo"
				FinSi
			FinSi
		Fin Para
		
	SiNo
		Escribir "Ingresar un n�mero mayor a 2"
	FinSi
	
FinAlgoritmo
