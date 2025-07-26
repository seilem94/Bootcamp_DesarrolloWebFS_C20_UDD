Algoritmo LanzamientoDeDados
	
	Definir valorDado, numDados, numLanzamientos, listResult, lanzamientosTotales Como Entero
	Definir suma, promedio Como Real
	Definir contador, i, j Como Entero
    contador <- 0
    suma <- 0
	
	
	Escribir "Ingrese el número de dados a lanzar:"
    Leer numDados
    Escribir "Ingrese el número de veces que se lanzarán los dados:"
    Leer numLanzamientos
	lanzamientosTotales <- numDados * numLanzamientos
	Dimension listResult[lanzamientosTotales]
	
	Para i <- 1 Hasta numLanzamientos
        Para j <- 1 Hasta numDados
            valorDado <- Aleatorio(1, 6)
            contador <- contador + 1
			Escribir "Contador: " contador, "; Valor: " valorDado
            listResult[contador] <- valorDado
            suma <- suma + valorDado
        FinPara
    FinPara
	
	promedio <- suma / lanzamientosTotales
	
	Escribir "Lista de resultados:"
	Para i <- 1 Hasta lanzamientosTotales
        Escribir Sin Saltar listResult[i], " "
    FinPara
	Escribir "Fin Lista de resultados"
	
	
	Escribir ""
    Escribir "Cantidad total de valores: ", lanzamientosTotales
    Escribir "Suma total de valores: ", suma
    Escribir "Promedio de valores: ", promedio
	Escribir ""
	
	
	
	
	
FinAlgoritmo
