Algoritmo RetoNumPrimo
	Definir numeroUsuario, i como entero
	uno = 1
	dos = 2
	
	Escribir "Ingrese un número para saber si es primo o no"
	Leer numeroUsuario
	
	si numeroUsuario <= uno Entonces
		Escribir "Ingrese un número mayor a 1"
	FinSi
	
	si numeroUsuario > dos Entonces
		Para i <- dos Hasta numeroUsuario Hacer
			si numeroUsuario <> i Entonces
				Si numeroUsuario MOD i = 0 Entonces
					
				FinSi
				Escribir " "
			Sino
				Si numeroUsuario MOD i = 0 Entonces
					Escribir "El número ", numeroUsuario " es primo"
				FinSi
			FinSi
		Fin Para
		
	SiNo
		Escribir "Ingresar un número mayor a 2"
	FinSi
	
FinAlgoritmo
